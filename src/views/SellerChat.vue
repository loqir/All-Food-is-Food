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
          <small>{{ chat.name }}</small> <br />
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
        };
      },
      methods: {
        login: function () {
          signInWithPopup(auth, new GoogleAuthProvider());
        },
        logout: function () {
          signOut(auth);
        },
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
      toggleChat: function (chat) {
        if (this.openedChats.includes(chat)) {
            // If chat is already opened, remove it from openedChats
            this.openedChats = this.openedChats.filter((c) => c !== chat);
          } else {
            // If chat is not opened, add it to openedChats
            this.openedChats.push(chat);
          }
        },
      },
      mounted() {
        const loginListener = auth.onAuthStateChanged((user) => {
          if (user != null) {
            this.loggedin = true;
            this.title = 'welcome admin';
            const chatSnapshot = onSnapshot(
              query(collection(db, 'chats'), orderBy('date', 'desc')),
              (snapshot) => {
                this.chats = snapshot.docs.map((doc) => {
                  return { ...doc.data(), id: doc.id };
                });
              },
              (error) =>{
                if (this.loggedin && error.code.includes("permission")) {
                  this.title = "you are not admin !";
                }
              }
            );
            onUnmounted(chatSnapshot);
          } else {
            this.loggedin = false;
            this.title = 'please login';
          }
        });
        onUnmounted(loginListener)
      },
    };
    </script>