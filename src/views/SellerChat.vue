<template>
    <h1>{{ title }}</h1>
    <div v-if="loggedin">
      <div v-for="chat in chats" class="p-2">
        <div
          @click="toggleChat(chat)"
          style="text-align: left"
          class="w-100 btn my-1"
          :class="chat.seen ? 'btn-secondary' : 'btn-primary'"
        >
          <small>{{ chat.firstName }} {{ chat.lastName }}</small> <br/>
          <strong>{{ chat.latestMessage }}</strong>
        </div>
      </div>
      <div v-for="chat in openedChats">
        <SellerChatComp :client="chat"></SellerChatComp>
      </div>
      <button @click="logout">logout</button>
    </div>
    <div v-else>
      <button @click="login">login</button>
    </div>
  </template>
    
    <script>
    import { db, auth } from '../firebase.js';
    import { GoogleAuthProvider, signInWithPopup , signOut } from 'firebase/auth';
    import {
      onSnapshot,
      collection,
      doc,
      deleteDoc,
      setDoc,
      addDoc,
      orderBy,
      query,
    } from 'firebase/firestore';
    import { ref, onUnmounted } from 'vue';
    
    import SellerChatComp from '../components/SellerChatComp.vue';

    export default {
      name: 'SellerChat',
      components: {
        SellerChatComp,
      },
      data: () => {
        return {
          chats: ref([]),
          openedChats: ref([]),
          loggedin: false,
          title: '',
          isAdmin: false
        };
      },
      methods: {
        // login: function () {
        //   signInWithPopup(auth, new GoogleAuthProvider());
        // },
        // logout: function () {
        //   signOut(auth);
        // },
        sendMessage:function() {
        addDoc(collection(db,'chats/'+this.client.id+'/messages'),
      {
        text:this.$refs.newMessage.value,
        admin:true,
        date:Date.now()
      }
      )

      let updateLatestMessage = {...this.client,latestMessage:this.$refs.newMessage.value}
      delete updateLatestMessage.id;
      setDoc(doc(db,'chats/'+this.client.id),updateLatestMessage);
      this.$refs.newMessage.value = '';
    },
    async isSeller(uid) {
      const sellDocRef = doc(getFirestore(firebaseApp), "sellers", uid);
      const sellDocSnap = await getDoc(sellDocRef);

      if (sellDocSnap.exists()) {
          this.isAdmin = true
      }
    },
    toggleChat: function (chat) {
    // Check if the chat is already opened
        const index = this.openedChats.findIndex((c) => c.id === chat.id);

        if (index > -1) {
        // If the chat is already opened, remove it from openedChats
        this.openedChats.splice(index, 1);
        } else {
        // If the chat is not opened, add it to openedChats
        this.openedChats.push(chat);
        }
        },
      },
      mounted() {
        const loginListener = auth.onAuthStateChanged((user) => {
          if (user != null) {
            this.loggedin = true;
          
          if (this.isAdmin) {
          this.title = 'Admin Chats';
          const chatSnapshot = onSnapshot(
            query(collection(db, 'chats'), orderBy('date', 'desc')),
            (snapshot) => {
              this.chats = snapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
              });
            })
            onUnmounted(chatSnapshot);
          } else {
            //this.title = "Access Denied"
            this.title = 'Admin Chats';
          const chatSnapshot = onSnapshot(
            query(collection(db, 'chats'), orderBy('date', 'desc')),
            (snapshot) => {
              this.chats = snapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
              });
            })
            onUnmounted(chatSnapshot);
          }
        } else {
            this.loggedin = false;
            this.title = 'please login';
          }
        });
        onUnmounted(loginListener)
      },
    };
    </script>