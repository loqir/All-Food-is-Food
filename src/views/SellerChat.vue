<template>
  <SellerSideBar/>
    <h1 style = "text-align: center">{{ title }}</h1>
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
    </div>
  </template>
    
    <script>
    import SellerSideBar from '../components/commons/SellerSideBar.vue'
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
      getFirestore,
      getDoc
    } from 'firebase/firestore';
    import { ref, onUnmounted } from 'vue';
    import firebaseApp from '@/firebase.js'
    import SellerChatComp from '../components/SellerChatComp.vue';
    import SellerSideBarVue from '../components/commons/SellerSideBar.vue';

    export default {
      name: 'SellerChat',
      components: {
        SellerChatComp,
        SellerSideBar
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
      async beforeCreate() {
        await auth.onAuthStateChanged(async (user) => {
          if (user != null) {
            this.loggedin = true;
            await this.isSeller(user.uid);
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
              console.log("else block " + this.isAdmin)
              this.title = "Access Denied"
            }
          } else {
            this.loggedin = false;
            this.title = 'Please Login';
          }
        });
      },
      mounted() {
        const loginListener = auth.onAuthStateChanged((user) => {
          //this.isSeller(user.uid)
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
            console.log("else block " + this.isAdmin)
            this.title = "Access Denied"
          //   this.title = 'Admin Chats';
          // const chatSnapshot = onSnapshot(
          //   query(collection(db, 'chats'), orderBy('date', 'desc')),
          //   (snapshot) => {
          //     this.chats = snapshot.docs.map((doc) => {
          //       return { ...doc.data(), id: doc.id };
          //     });
          //   })
          //   onUnmounted(chatSnapshot);
          }
        } else {
            this.loggedin = false;
            this.title = 'Please Login';
          }
        });
        onUnmounted(loginListener)
      },
    };
    </script>

<style scoped>
.btn-primary{
  background-color:rgba(234, 106, 18, 1)
}
.btn-secondary{
  background-color:#B2C248
}
</style>