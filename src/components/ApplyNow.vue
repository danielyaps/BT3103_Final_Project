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
            datapacket: "",
        }
    }, 
    methods: {
        fetchItems: function() {
            var id = this.$route.params.tutorid;
            this.tutor_id = id
            console.log(id)
            firebaseApp.firestore().collection('users').doc(id).get().then(snapshot => {
                this.datapacket = snapshot.data()
                this.name = this.datapacket.firstName + " " + this.datapacket.lastName
                this.subjects = this.datapacket.subjects
                this.level = this.datapacket.level
                this.rate = this.datapacket.rates  
            });
        
        },
        
    }
}
</script>

<style>
</style>