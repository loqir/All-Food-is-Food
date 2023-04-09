<template>
    <h1>{{title}}</h1>
    <div v-if="loggedin">
      <div v-for="chat in chats" class="p-2">
        <div
          @click="openedChats.push(chat)"
          style="text-align: left"
          class="w-100 btn my-1"
          :class="chat.seen ? 'btn-secondary' : 'btn-primary'"
        >
          <small>{{ chat.name }}</small> <br />
          <strong>{{ chat.latestMessage }}</strong>
        </div>
      </div>
      <div v-for="chat in openedChats">
        <chat :client="chat"></chat>
      </div>
      <button @click="logout">logout</button>
    </div>
    <div v-else>
      <button @click="login">login</button>
    </div>
    
    </template>
    
    <script>
    import { db, auth } from './firebase';
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
    
    import chat from './components/chat';
    
    export default {
      name: 'App',
      components: {
        chat,
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