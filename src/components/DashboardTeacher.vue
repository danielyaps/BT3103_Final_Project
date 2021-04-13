<template>
    <div>
        <Header></Header>
        <div>
            <ul>
                <li>Number of lessons per week: {{numLessons}}</li> 
                <li>Weekly Earnings: {{earnings}}</li>
            </ul>
            <Barchart :chartdata="this.chartdata"></Barchart>
        </div>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js'
import Header from './Header.vue'
import Barchart from './Charts/BarChart.vue'

export default {
    data() {
        return {
            uid: this.$route.params.uid,
            numLessons: 0,
            rates:0,
            earnings:0,
            numTeacher:0,
            teachernumLessons:0,
            teacherRates:0,
            teacherEarnings:0,
            chartdata: {},
        }
    },

    methods: {
        prepare:function() {
            firebaseApp.firestore().collection("users").doc(this.uid).collection("applicationsConfirmed").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.id != null){
                        this.numLessons += 1;
                        this.earnings += (doc.durationA * doc.rateA);
                        this.rates += doc.rateA;
                    }
                });
            });
            firebaseApp.firestore().collectionGroup("applicationsConfirmed").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.id != null){
                        this.teachernumLessons += 1;
                        this.teacherRates += doc.rateA;
                        this.teacherEarnings += (doc.durationA * doc.rateA);
                    }
                });
            });
            firebaseApp.firestore().collection("users").where("type", "==", "Tutor").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.id != null){
                        this.numTeacher += 1;
                    }
                });
            });
        },

        average:function() {
            this.teachernumLessons = this.teachernumLessons/this.numTeacher;
            this.teacherRates = this.teacherRates/this.numTeacher;
            this.teacherEarnings = this.teacherEarnings/this.numTeacher;
        },

        prepChart:function() {
            this.chartdata.numLessons = this.numLessons;
            this.chartdata.teachernumLessons = this.teachernumLessons;
            this.chartdata.rates = this.rates;
            this.chartdata.teacherRates = this.teacherRates;
            this.chartdata.earnings = this.earnings;
            this.chartdata.teacherEarnings = this.teacherEarnings;
        },

    },

    components:{
        'Header': Header,
        'Barchart': Barchart,
    },

    created(){
        this.prepare();
        this.average();
        this.prepChart();
        console.log(this.numLessons);
        console.log(this.numTeacher);
    }


}
</script>

<style scoped>
</style>