<template>
<div id="page">
    <Header></Header>
    <MenuBarTutors v-bind:uid="uid" v-if="this.type == 'Tutor'"></MenuBarTutors>
    <MenuBarStudents v-bind:uid="uid" v-else></MenuBarStudents>
    <div id="chatPart">
        <h2 id="title">Chats</h2>
        <ul id>
            <li v-for="chat in chats" v-bind:key=chat.otherID v-on:click="goToChat(chat.otherID)" style="list-style-type: none">
                <div id="container">
                    <img v-bind:src="chat.image" class="images">
                    <div class="lastMsg">
                        <p style="font-size: 30px">{{chat.name}}</p> <br>
                        <span v-if="chat.messages[chat.messages.length - 1].myself" style="color: #8BBEE8FF; font-size: 25px">You: </span>
                        <span v-else style="color: #8BBEE8FF; font-size: 25px">{{chat.name}}: </span>
                        <span>{{chat.messages[chat.messages.length - 1].content}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import firebaseApp from '../firebase.js';
import Header from "./Header.vue";
import MenuBarTutors from './MenuBarTutors.vue';
import MenuBarStudents from './MenuBarStudents.vue';

export default {
    components: {
        Header, MenuBarTutors, MenuBarStudents
    },

    data() {
        return {
            uid: this.$route.params.uid,
            chats: [],
            type: this.$route.params.type
        }
    },

    methods: {
        fetchItems: function() {
            firebaseApp.firestore().collection('users').doc(this.uid).collection('chats').onSnapshot(snapShot => {
                let chat = {}
                snapShot.forEach(doc => {
                    chat = doc.data()
                    this.chats.push(chat)
                })
            })
            console.log(this.chats)
        },

        goToChat: function(otherId) {
            this.$router.push({ name: 'chat', params: {uid: this.uid, otherid: otherId}, props: true});
        }
    },

    created() {
        this.fetchItems()
    }
}
</script>

<style scoped>
#page {
    background-color: white;
    overflow-y: scroll;
    position: fixed;
    width: 100vw;
    height: 100vh;
}

#container {
    height: 200px;
    width: 1200px;
    background-color: #388087;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    margin-top: 50px;
    border-radius: 15px;
    font-size: 20px;
}

.images {
    width: 150px; 
    height: 150px; 
    position: relative; 
    float: left; 
    left: 20px
}

.lastMsg {
    position: relative; 
    border-style: solid; 
    height: 150px; 
    width: 900px; 
    left: 50px; 
    padding: 20px
}

#title {
    font-size: 40px; 
    color: #388087; 
    font-family: Playfair Display
}

#chatPart {
    position: absolute;
    left: 50px;
}
</style>