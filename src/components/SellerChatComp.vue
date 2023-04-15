<template>
    <div>chat with : {{client.name}}</div>
    <div class="chatbox">
      <div v-for="message in messages">
        <div :class="message.admin ? 'admin' : 'client'">
        {{message.text}}
        </div>
      </div>
    </div>
    <input type="text" size="100" @keypress.enter="sendMessage" ref="newMessage" placeholder="new message ...">
    <button @click="sendMessage()" class="btn btn-primary">send</button>
  </template>
  
  <script>
  import {db} from '../firebase.js';
  import {onSnapshot,collection,doc,deleteDoc,setDoc,addDoc,orderBy,query} from 'firebase/firestore';
  import { ref, onUnmounted } from 'vue';
  
  export default {
    name: 'SellerChatComp',
    props: {
      client:Object
    },
    data:()=>{
      return {
        messages:ref([])
      }
    },
    methods: {
      sendMessage:function() {
        console.log(this.$refs.newMessage.value.length)
        if (this.$refs.newMessage.value.length > 0) {
            addDoc(collection(db,'chats/'+this.client.id+'/messages'),
            {
              text:this.$refs.newMessage.value,
              admin:true,
              date:Date.now()
            }
        )
        } else {
            alert("Please enter message")
        }
  
        let updateLatestMessage = {...this.client,latestMessage:this.$refs.newMessage.value}
        delete updateLatestMessage.id;
        setDoc(doc(db,'chats/'+this.client.id),updateLatestMessage);
        this.$refs.newMessage.value = '';
      }
    }
    ,
    mounted() {
      let updateSeen = {...this.client,seen:true}
      delete updateSeen.id;
      setDoc(doc(db,'chats/'+this.client.id),updateSeen);
      this.client.seen = true;
      const messages = onSnapshot(
        query(collection(db,'chats/'+this.client.id+'/messages')
        ,
          orderBy('date','desc')
        )
        ,
        (snapshot)=>{
          this.messages = snapshot.docs.map((doc)=>{
            return {... doc.data() , id:doc.id}
          })
        }
      );
  
      onUnmounted(messages)
    }
  }
  </script>
  
  <style>
  .btn-primary, .btn-primary:hover, .btn-primary:active {
    background-color: rgba(234, 106, 18, 1);
  }
  .chatbox {
        height: 50vh;
        overflow: scroll;
        flex-direction: column-reverse; 
        background-color: brown;
        border-radius: 5px;
        display: flex;
       
  }
  
  .chatbox > div {
    display: flex;
    flex-direction: column
  }
  
  .chatbox > div > div {
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 4px;
  }
  
  
  .client {
    align-self: start;
    background-color: #fdff8f;
  
  }
  
  .admin {
    align-self: end;
    background-color: white;
  }
  </style>