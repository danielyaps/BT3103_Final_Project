<template>
  <div class="page">
    <Header></Header>
    <div id="title">Chats</div>
    <div id="chatuser">
      <img
        id="userimg"
        src="https://netstorage-kami.akamaized.net/images/e63acbfea15ff5a2.jpg?imwidth=1200&impolicy=default-amp"
      />
      Mr Asher Goh
    </div>

    <div id="chatbox">
      <ol>
        <li v-for="message in messages" v-bind:key="message.content">
          <span class="messageDesign">{{message.content}}</span>
        </li>
      </ol>
    </div>

    <div id="inputMsgContainer">
      <textarea
        id="chatmsg"
        placeholder="Message"
        rows="3"
        cols="100"
        v-model="textAreaValue"
      ></textarea>
      <button id="submitb" type="submit" v-on:click="sendMsg">Send</button>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue"
import firebaseApp from '../firebase.js'

export default {
  components: {
    Header
  },

  data() {
    return {
      uid: this.$route.params.uid,
      otherId: this.$route.params.otherId,
      inputmsg: "",
      textAreaValue: "",
      messages: []
    }
  },

  methods: {
    fetchItems: function() {
      firebaseApp.firestore().collection('users').doc(this.uid).collection('chats').where('otherID', '==', this.otherId).limit(1).onSnapshot(snapshot => {
        const thing = snapshot.docs[0]
        if (typeof thing != "undefined") {
          console.log(thing.data().messages)
          this.messages = thing.data().messages
        }
      })
    },

    sendMsg: function() {
      let msg = {}
      msg.content = this.textAreaValue
      msg.myself = true
      var date = new Date()
      msg.timestamp = {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(), hours: date.getHours(), minutes: date.getMinutes()}
      this.messages.push(msg)
      firebaseApp.firestore().collection('users').doc(this.uid).collection('chats').where('otherID', '==', this.otherId).limit(1).get().then(snapshot => {
        const thing = snapshot.docs[0]
        if (typeof thing == "undefined") {
          let chatt = {}
          chatt.messages = this.messages
          chatt.otherID = this.otherId
          firebaseApp.firestore().collection('users').doc(this.uid).collection('chats').add(chatt)
        } else {
          thing.ref.update({messages: this.messages})
        }   
      })

      msg.myself = false
      firebaseApp.firestore().collection('users').doc(this.otherId).collection('chats').where('otherID', '==', this.uid).limit(1).get().then(snapshot => {
        const thing = snapshot.docs[0]
        if (typeof thing == "undefined") {
          let chatt={}
          chatt.messages = this.messages
          chatt.otherID = this.uid
          firebaseApp.firestore().collection('users').doc(this.otherId).collection('chats').add(chatt)
        } else {
          thing.ref.update({messages: this.messages})
        }
      })
      this.textAreaValue = ''
    }
  },

  created() {
    this.fetchItems();
  }
}
</script>

<style scoped>
.page {
    background-color: #E8E8E8;
    overflow-y: scroll;
    position: fixed;
    width: 100vw;
    height: 100vh;
}

#title {
  font-weight: 900;
  font-size: 70px;
  color: dimgrey;
  position: relative;
  left: 100px;
}

#userimg {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}

#chatuser {
  font-size: 30px;
  font-weight: bold;
  color: rgb(70, 69, 69);
}

#chatbox {
  height: 500px;
  border-radius: 35px;
  background-color: #555;
  overflow: scroll
}

#chatmsg{
    position: relative;
    float: left;
    border-style: solid
}

#submitb{
    background-color: dimgrey;
    color: white;
}

#inputMsgContainer {
  position: relative;
  top: 20px;
  left: 20px;
}

.messageDesign {
  list-style-type: none;
  position: relative;
  margin: 10px;
  color: white;
  background-color: #388087;
  padding: 10px;
  border-radius: 35px;
  max-width: 50%;
}

</style>