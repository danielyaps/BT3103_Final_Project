<template>
<div>
    <Header></Header>
    <div>
        <H1>Class Application</H1>
        <label for = "Subject">Subjects: </label>
        <option disabled value="">Select Option</option>
        <option v-for="s in details" v-bind:value="s.subjects" v-bind:key="s"> 
            {{s.subjects}}
        </option>
        <label for = "Day">Day of Week: </label>
        <select v-model="daySelected" multiple>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
            </select>
            <br>
        <span>Selected: {{ daySelected }}</span>
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
            daySelected: "",
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
