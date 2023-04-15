<template>
  <NavBar/>
    <div v-if="client.id">
    <h1>{{ this.firstName }} {{ this.lastName }}</h1>
      <div>chat with : Admin</div>
      <div class="chatbox">
        <div v-for="message in messages">
          <div :class="message.admin ? 'client' : 'admin'">
            {{ message.text }}
          </div>
        </div>
      </div>
      <input
        type="text"
        @keypress.enter="sendMessage"
        ref="newMessage"
        placeholder="new message ..."
      />
      <button @click="sendMessage" class="btn btn-primary">send</button>
      </div>
      <div v-else>
        <h2>Oops! Please log in!</h2>
      </div>
    </template>
    
    <script>
    import { db, auth } from '../firebase.js';
    import firebaseApp from '@/firebase.js'
    import NavBar from '@/components/commons/NavBar.vue'
    import {
      onSnapshot,
      collection,
      doc,
      deleteDoc,
      setDoc,
      addDoc,
      orderBy,
      query,
      getDoc,
      getFirestore
    } from 'firebase/firestore';
    import { ref, onUnmounted } from 'vue';
    
    export default {
      name: 'BuyerChat',
      components: {
        NavBar
      },
      props: {},
      data: () => {
        return {
          messages: ref([]),
          client: {
            id: null,
            firstName: '',
            lastName: '',
            date: 0,
            latestMessage: '',
            seen: false,
          },
        };
      },
      methods: {
        async getData(uid) {
            const buyDocRef = doc(getFirestore(firebaseApp), "buyers", uid);
            const buyDocSnap = await getDoc(buyDocRef);

            if (buyDocSnap.exists()) {
                console.log("Document data:", buyDocSnap.data());
                this.firstName = buyDocSnap.data().FirstName;
                this.lastName = buyDocSnap.data().LastName;

            } else {
                console.log("No such document!");
            }
        },

        sendMessage: function () {
            if (this.$refs.newMessage.value.length > 0) {
                addDoc(collection(db, 'chats/' + this.client.id + '/messages'), {
                    text: this.$refs.newMessage.value,
                    date: Date.now(),
                });
            } else {
                alert("Please enter message")
            }
    
          let updateLatestMessage = {
            ...this.client,
            latestMessage: this.$refs.newMessage.value,
            seen: false,
            date: Date.now(),
            lastName: this.lastName,
            firstName: this.firstName

          };
          delete updateLatestMessage.id;
          setDoc(doc(db, 'chats/' + this.client.id), updateLatestMessage);
          this.$refs.newMessage.value = '';
        },
      },
      mounted() {
        const loginListener = auth.onAuthStateChanged((user) => {
          if (user != null) {
            this.user = user
            this.client.id = user.uid
            this.getData(this.user.uid)  
            const messages = onSnapshot(
              query(
                collection(db, 'chats/' + this.client.id + '/messages'),
                orderBy('date', 'desc')
              ),
              (snapshot) => {
                this.messages = snapshot.docs.map((doc) => {
                  return { ...doc.data(), id: doc.id };
                });
              }
            );
    
            onUnmounted(messages);
          }
        });
        onUnmounted(loginListener);
      },
    };

    </script>
    
    <style>
    .chatbox {
      height: 50vh;
      overflow: scroll;
      flex-direction: column-reverse;
      background-color: #0045c4;
      border-radius: 5px;
      display: flex;
    }
    
    .chatbox > div {
      display: flex;
      flex-direction: column;
    }
    
    .chatbox > div > div {
      padding: 0.5rem;
      margin: 0.5rem;
      border-radius: 4px;
    }
    
    .client {
      align-self: end;
      background-color: white;
    }
    
    .admin {
      align-self: start;
      background-color: #fdff8f;
    }
    </style>