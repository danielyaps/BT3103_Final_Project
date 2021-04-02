<template>
<div>
    <MenuBarStudents></MenuBarStudents>
    <p style="font-size: 50px; text-align: center; color: #C6C6C6">CLASSY AND FABULOUS TUTORS</p>
    <p style="font-size: 30px; color: #C6C6C6; padding-left: 20px">Find Your Tutor Now!</p>
    <div style="background-color: #E2E2E2; min-height: 500px">
        <ul id="un">
            <li id="boxed" v-for="tutor of tutors" v-bind:key="tutor.id">
                <ol style="list-style-type: none">
                    
                    <div style="text-align: center">
                        <img v-bind:id="tutor.id" style="width: 300px; height: 200px;"> <br>
                        <div style="display: inline-block; text-align: left; width: 300px"> 
                            Name: {{tutor.firstName}} {{tutor.lastName}} <br>
                            Subjects Offered: {{tutor.Subjects}} <br>
                            Level: {{tutor.Level}} <br>
                            Rates: {{tutor.Rates}} <br><br>
                            Description: {{tutor.Description}}
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


export default {
    components: {
        MenuBarStudents
    },
    data() {
        return {
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
                    if (item.type == "Teacher") {
                        var storageRef = firebaseApp.storage().ref();
                        storageRef.child('images/' + doc.id).getDownloadURL()
                            .then((url) => {
                                var img = document.getElementById(doc.id);
                                img.setAttribute('src', url); 
                            }).then(this.tutors.push(item))
                    }
                })
            })
            console.log(this.tutors)
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
    background-color: #C2C2C2;
    margin: 10px;
}
</style>
