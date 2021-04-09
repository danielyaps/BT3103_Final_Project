<template>
<div>
    <Header></Header>
    <MenuBarStudents v-bind:uid="uid"></MenuBarStudents>
    <p style="font-size: 50px; text-align: center; color: #388087">CLASSY AND FABULOUS TUTORS</p>
    <p style="font-size: 30px; color: #388087; padding-left: 20px; padding-top: 50px; font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 56px;">Find Your Tutor Now!</p> <br>
    <div style="background-color: #388087; min-height: 600px">
        <ul id="un">
            <li id="boxed" v-for="tutor of tutors" v-bind:key="tutor.id" v-on:click="tutorDetails(tutor.id)">
                <ol style="list-style-type: none">
                    
                    <div style="text-align: center">
                        <img v-bind:id="tutor.id" style="width: 300px; height: 200px;"> <br>
                        <div style="display: inline-block; text-align: left; width: 300px"> 
                            Name: {{tutor.firstName}} {{tutor.lastName}} <br>
                            Subjects Offered: {{tutor.subjects}} <br>
                            Level: {{tutor.level}} <br>
                            Rates: ${{tutor.rates}}/hr <br><br>
                            Description: {{tutor.description}}
                        </div>
                    </div>
                </ol>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import firebaseApp from '../firebase.js'
import MenuBarStudents from './MenuBarStudents.vue'
import Header from './Header.vue'

export default {
    components: {
        MenuBarStudents,
        Header
    },
    data() {
        return {
            uid: this.$route.params.uid,
            type: "Student",
            tutors: []
        }
    },
    methods: {
        fetchItems: function() {
            firebaseApp.firestore().collection('users').get().then((querySnapShot) => {
                let item={}
                querySnapShot.forEach(doc => {
                    item=doc.data()
                    item.id=doc.id
                    item.photo=null
                    if (item.type == "Tutor") {
                        var storageRef = firebaseApp.storage().ref();
                        storageRef.child('images/' + doc.id).getDownloadURL()
                            .then((url) => {
                                var img = document.getElementById(doc.id);
                                img.setAttribute('src', url); 
                            }).then(this.tutors.push(item))
                    }
                })
            })
        },
        tutorDetails: function(tutor_id) {
            this.$router.push({name: "tutorDetails", params: {tutorid: tutor_id}, props: true})
        }
    },

    created() {
        this.fetchItems()
    }
}
</script>

<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

#boxed {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    background-color: #F6F6F2;
    margin: 10px;
}
</style>
