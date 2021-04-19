<template>
    <div>
        Our Performance!
        <ul>
            <li>We have over {{numTutor}} Tutors AVAILABLE!</li> 
            <li>With {{numStudent}} students and growing!</li>
            <li>We have bridged over {{confirmedApplication}} successful connections! </li>
        </ul>
        <Barchart v-bind:chartdata="this.chartdata"></Barchart>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js'
import Barchart from './Charts/BarChart.vue'

export default {
    data() {
        return {
            numTutor: 0,
            numStudent: 0,
            confirmedApplication:0,
            grades: {},
            chartdata: null,
            
        }
    },

    methods: {
        getNumbers:function() {
            firebaseApp.firestore().collection("users").where("type", "==", "Tutor").get().then((querySnapshot) => {
                this.numTutor = querySnapshot.size;
            });

            firebaseApp.firestore().collection("users").where("type", "==", "Student").get().then((querySnapshot) => {
                this.numStudent = querySnapshot.size;
            });

            firebaseApp.firestore().collectionGroup("applicationsConfirmed").get().then((querySnapshot) => {
                this.confirmedApplication = querySnapshot.size;
            });

            firebaseApp.firestore().collectionGroup("reviews").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    var user = doc.data();
                    var improve = user.gradeImprovement;
                    if (!(improve in this.grades)) {
                        this.grades[improve]= 1;
                    } else {
                        this.grades[improve] += 1;
                    }
                })
            });
        },
        prepare:function() {
            this.getNumbers();
            setTimeout(() => {
                this.chartdata = {};
                var label = [];
                var data = [];
                for (const [key, value] of Object.entries(this.grades)) {
                    label.push(String(key));
                    data.push(value);
                }
                this.chartdata.label = label;
                this.chartdata.data = data;
                this.chartdata.name = "Grades Improvements!";
                this.chartdata.color = "Green";
                this.chartdata.yaxisname = "Number of Students"
                this.chartdata.xaxisname = "Number of Grades Improved"
            }, 500);
            
            
        },
    },

    components:{
        'Barchart': Barchart,
    },
    
    created(){
        this.prepare();
    }


}
</script>

<style scoped>
    div {
        color: black;
        text-align: center;
        font-size: 48px;
        font-weight: bold;

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
        color:black;
        text-align: center;
        font-size: 36px;
        font-weight: normal;
    }
</style>