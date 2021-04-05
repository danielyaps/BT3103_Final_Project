<template>
<div>
    <Header></Header>
    <div>
        <H1>Class Application</H1>
        <label for = "Subject">Subjects: </label>
        <option disabled value="">Select Option</option>
        
        <label for = "Day">Day of Week: </label>
        <label for = "Time">Time: </label>
        <label for = "Duration">Duration: </label>
        <label for = "Location">Location: </label>
        <label for = "Rate">Rates(S$/hour): </label>
    </div>
</div>
</template>

<script>
import Header from './Header.vue'
import firebaseApp from '../firebase.js'

export default {
    components: {
        'Header': Header
    },
    data() {
        return {
            uid: "",
            details: [], 
        }
    }, 
    methods: {
        fetchItems:function() {
            var id = this.$route.params.id;
            firebaseApp.firestore().collection('users').doc(id).get().then((doc)=>{
                this.details.push(doc.data())
            });
            console.log(this.details);
            var storageRef = firebaseApp.storage().ref();
            storageRef.child('images/' + this.uid).getDownloadURL().then((url) => {
                this.image = url;
            })
        },
    }
}
</script>

<style>
</style>