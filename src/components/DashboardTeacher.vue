<template>
    <div>
        <Header></Header>
        <MenuBarTutors v-bind:uid="uid"></MenuBarTutors>
        <p id="title">ANALYTICS</p>
        <br><br>
        <ul>
            <li>My Lessons per Week: 
                <p>{{numLessons}}</p>
            </li> 
            <li>My Average Rates: 
                <p>{{rates}}</p>
            </li>    
            <li>My Weekly Earnings: 
                <p>{{earnings}}</p>
            </li>

        </ul>
        <Barchart v-bind:chartdata="this.chartdata" v-if="this.chartdata"></Barchart>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js'
import Header from './Header.vue'
import Barchart from './Charts/BarChart.vue'
import MenuBarTutors from './MenuBarTutors.vue'

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
            chartdata: null,
        }
    },

    methods: {
        prepare:function() {
            firebaseApp.firestore().collection("users").doc(this.uid).collection("applicationsConfirmed").get()
            .then((querySnapshot) => {
                this.numLessons = querySnapshot.size;
                querySnapshot.forEach((doc) => {
                    if (doc.id != "null"){
                        var user = doc.data();
                        var rates = parseInt(user.rateA, 10)
                        var duration = parseInt(user.durationA, 10)
                        this.earnings += (duration * rates);
                        this.rates += rates;
                    }
                });
            });
            firebaseApp.firestore().collectionGroup("applicationsConfirmed").get().then((querySnapshot) => {
                this.teachernumLessons = querySnapshot.size;
                querySnapshot.forEach((doc) => {
                    if (doc.id != "null"){
                        var user = doc.data();
                        var rates = parseInt(user.rateA, 10)
                        var duration = parseInt(user.durationA, 10)
                        this.teacherRates += rates;
                        this.teacherEarnings += (duration * rates);
                    }
                });
            });
            firebaseApp.firestore().collection("users").where("type", "==", "Tutor").get().then((querySnapshot) => {
                this.numTeacher = querySnapshot.size;
            });
        },

        average:function() {
            this.prepare();
            setTimeout(() => {
                this.rates = this.rates/this.numLessons;
                this.teacherRates = this.teacherRates/this.teachernumLessons;
                this.teachernumLessons = this.teachernumLessons/this.numTeacher;
                this.teacherEarnings = this.teacherEarnings/this.numTeacher;
                this.prepChart();
            }, 2000);
            
            
        },

        prepChart:function() {
            this.chartdata = {};
            this.chartdata.label = ["My Number of Lessons", "Average Number of Lessons", "My Rates", "Average Rates", "My Earnings", "Average Earnings"];
            this.chartdata.data = [this.numLessons, this.teachernumLessons, this.rates, this.teacherRates, this.earnings, this.teacherEarnings];
            this.chartdata.name = "My Performance!";
            this.chartdata.color = ["#4287f5","#064bb9","#ff4ccf","#b90689","#4cffed","#68bdb4"];
            this.chartdata.yaxisname = ""
            this.chartdata.xaxisname = ""
        },

    },

    components:{
        'Header': Header,
        'Barchart': Barchart,
        'MenuBarTutors': MenuBarTutors,

    },

    created(){
        this.average();
    }


}
</script>

<style scoped>
    #title {
        color: black;
        font-weight: bold;
        text-align: center;
        font-size: 48px;

    }
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        text-align: center;
        font-size: 30px;
    }
    li {
        flex-grow:1;
        flex-basis:300px;
        text-align: center;
        padding: 10px;
        color: #388087;
    }
    p {
        font-weight: bold;
        text-decoration: underline;
        color:black;
        text-align: center;
        font-size: 36px;
    }
</style>