<template>
  <div class="page">
    <Header></Header>
    <div class="nav" v-if="this.type === 'Student'">
            <MenuBarStudents v-bind:uid="uid"></MenuBarStudents>
            </div>

            <div class="nav" v-else>
                <MenuBarTutors v-bind:uid="uid"></MenuBarTutors></div> 
    <div id="title">Chats</div>
    <div id="chatuser">
      <img :src="this.image" id="userimg"/>
      {{this.name}}
    </div>

    <div id="chatbox">
      <ul>
        <li v-for="message in messages" v-bind:key="message.content" v-bind:class="{alignRight: message.myself}">
          <span v-bind:class="message.myself ? 'senderMessageDesign' : 'recipientMessageDesign'">{{message.content}}</span>
          <span style="color: white; font-size: 10px">{{message.timestamp.day}}/{{message.timestamp.month}}/{{message.timestamp.year}}, {{message.timestamp.hours}}:{{message.timestamp.minutes}}</span>
        </li>
      </ul>
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
import Header from "./Header.vue";
import firebaseApp from "../firebase.js";
import MenuBarStudents from './MenuBarStudents.vue';
import MenuBarTutors from './MenuBarTutors.vue';

export default {
  components: {
    Header, MenuBarTutors, MenuBarStudents
  },

  data() {
    return {
      uid: this.$route.params.uid,
      otherId: this.$route.params.otherid,
      inputmsg: "",
      textAreaValue: "",
      messages: [],
      image: null,
      name: null,
      type: "",
    };
  },

  methods: {
    fetchItems: function() {
      firebaseApp.firestore().collection('users').doc(this.uid).collection('chats').where('otherID', '==', this.otherId).limit(1).onSnapshot(snapshot => {
        const thing = snapshot.docs[0]
        if (typeof thing != "undefined") {
          this.messages = thing.data().messages
        }
      })

      var storageRef = firebaseApp.storage().ref();
      storageRef
        .child("images/" + this.otherId)
        .getDownloadURL()
        .then((url) => {
          this.image = url;
        });

      firebaseApp
        .firestore()
        .collection("users")
        .doc(this.otherId)
        .get()
        .then((snapshot) => {
          this.datapacket = snapshot.data();
          this.name =
            this.datapacket.firstName + " " + this.datapacket.lastName;
        });
      
      firebaseApp
        .firestore()
        .collection("users")
        .doc(this.uid)
        .get()
        .then((snapshot) => {
          this.type = snapshot.data().type;
        })
    },

    sendMsg: function() {
      let msg = {}
      msg.content = this.textAreaValue
      msg.myself = true
      var date = new Date()
      msg.timestamp = {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(), hours: date.getHours(), minutes: date.getMinutes()}
      firebaseApp.firestore().collection('users').doc(this.uid).collection('chats').where('otherID', '==', this.otherId).limit(1).get().then(snapshot => {
        const thing = snapshot.docs[0]
        if (typeof thing == "undefined") {
          let chatt = {}
          chatt.messages = this.messages
          chatt.otherID = this.otherId
          chatt.name = this.name
          chatt.image = this.image
          firebaseApp.firestore().collection('users').doc(this.uid).collection('chats').add(chatt)
        } else {
          thing.ref.update({messages: this.messages})
        }   
      })

      var Msg = Object.assign({}, msg)
      Msg.myself = false
      firebaseApp.firestore().collection('users').doc(this.otherId).collection('chats').where('otherID', '==', this.uid).limit(1).get().then(snapshot => {
        const thing = snapshot.docs[0]
        if (typeof thing == "undefined") {
          let chatt={}
          chatt.messages = [Msg]
          chatt.otherID = this.uid

          var storageRef = firebaseApp.storage().ref();
          storageRef
            .child("images/" + this.uid)
            .getDownloadURL()
            .then((url) => {
              chatt.image = url;
            }).then(() => {
              firebaseApp
                .firestore()
                .collection("users")
                .doc(this.uid)
                .get()
                .then((snapshot) => {
                  this.datapacket = snapshot.data();
                  this.type = this.datapacket.type;
                  chatt.name =
                    this.datapacket.firstName + " " + this.datapacket.lastName;
                })
                .then(() => {
                  firebaseApp.firestore().collection('users').doc(this.otherId).collection('chats').add(chatt)
                })
            })      
        } else {
          var Messages = thing.data().messages
          Messages.push(Msg)
          thing.ref.update({messages: Messages})
        }
      })

      this.messages.push(msg)
      this.textAreaValue = ''
    }
  },

  created() {
    this.fetchItems();
  },
};
</script>

<style scoped>
.page {
  background-color: white;
  overflow-y: scroll;
  position: fixed;
  width: 100vw;
  height: 100vh;
}

#title {
  font-weight: 900;
  font-size: 70px;
  color:#388087;
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
  color: #388087;
  position: relative;
  top: 30px;
  left: 30px;
}

#chatbox {
  height: 500px;
  border-radius: 35px;
  background-color: #6FB3B8;
  overflow: scroll;
  position: relative;
  top: 50px;
  left: 50px;
  width: 1300px;
}

#chatmsg {
  position: relative;
  float: left;
  border-style: solid;
  top: 60px;
  left: 50px
}

#submitb {
  background-color: #388087;
  color: white;
  height: 25px;
  width: 60px;
  border-radius: 5px;
  left: 60px;
  top: 75px;
  position: relative
}

#inputMsgContainer {
  position: relative;
  top: 20px;
  left: 20px;
  border-radius: 5px;
}

.senderMessageDesign {
  background-color: #D7A9E3FF;
  list-style-type: none;
  position: relative;
  color: white;
  padding: 10px;
  border-radius: 35px;
  max-width: 50%;
  margin: 10px;
  display: inline-block;
}

.recipientMessageDesign {
  background-color: #8BBEE8FF;
  list-style-type: none;
  position: relative;
  color: white;
  padding: 10px;
  border-radius: 35px;
  max-width: 50%;
  margin: 10px;
  display: inline-block;
}

.alignRight {
  text-align: right
}
</style>