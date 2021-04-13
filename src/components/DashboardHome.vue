<template>
    <div>
        <ul>
            <li>Over {{numTutor}} of Tutors AVAILABLE!</li> 
            <li>{{numStudent}} over students and growing!</li>
            <li>We have bridged over {{confirmedApplication}} successful connections! </li>
        </ul>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js'

export default {
    data() {
        return {
            numTutor: 0,
            numStudent: 0,
            confirmedApplication: -1, //Account for null doc
        }
    },

    methods: {
        getNumbers:function() {
            firebaseApp.firestore().collection("users").where("type", "==", "Tutor").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc) {
                        this.numTutor += 1;
                    }
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

            firebaseApp.firestore().collection("users").where("type", "==", "Student").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc) {
                        this.numStudent += 1;
                    }
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

            firebaseApp.firestore().collectionGroup("applicationsConfirmed").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc) {
                        this.confirmedApplication += 1;
                    }     
                });
            });

        },
    },
    
    created(){
        this.getNumbers();
    }


}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  width:90vw;
}
li {
  flex-basis: 30%;
  text-align: center;
  padding: 10px;
  border: 1px solid black;
  margin: 10px;
  color: black;
  font-size: 32px;
}
</style>