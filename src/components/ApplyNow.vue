<template>
<div>
    <Header></Header>
    <br>
    <H1>Apply for {{name}}'s class</H1>
    <v-app style="background: #2D2D2D">
    <v-container grid-list-md text-md-center fluid fill-height>
        <v-col fluid>
        <v-card elevation="2" fluid outlined tile>
            <v-card-text>
            <h4>Subject:</h4>
            <v-text-field placeholder="Subject" v-model="details.subjectA"></v-text-field>
            <h4>Day:</h4>
            <v-autocomplete ref="day" :items="days" v-model="details.dayA"
              label="Day" required solo-inverted></v-autocomplete>
            <h4>Time:</h4>
            <div class="oye-timepicker">
            
                <div class="p-1">
                    <select v-model="oyeHour" name="" id="">
                        <option  v-for="n in 12" :value="n" :key="n">{{n}}</option>
                    </select>
                </div>
                <div class="p-1">:</div>
                <div class="p-1">
                    <select name="" v-model="oyeMin" id="">
                        <option  v-for="n in 60" :value="n" :key="n">{{n}}</option>
                    </select>
                </div> 

                <div class="p-1">
                    <select v-model="oyePeriod" name="" id="">
                        <option  value="am" >AM</option>
                        <option value="pm" >PM</option>
                    </select>
                </div>
            </div><br>
            <h4>Location:</h4>
            <v-text-field placeholder="Location" v-model="details.locationA"></v-text-field>
            <v-btn v-on:click="submitBtn()">Submit</v-btn>
            </v-card-text>
        </v-card>
        </v-col>
        </v-container>
        </v-app>

</div>
</template>

<script>
import Header from './Header.vue'
import firebaseApp from '../firebase.js'


export default {
    components: {
        'Header': Header,
    },
    data() {
        return {
            uid: "",
            details: [{
                subjectA: "",
                dayA: "",
                locationA: "",
            }], 
            datapacket: [],
            oyePeriod: "",
            oyeMin: "",
            oyeHour:"",
            name: "",
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
        }
    }, 
    methods: {
        fetchItems: function() {
            var id = this.$route.params.tutorid;
            this.uid = id
            console.log(this.$route.params.tutorid)
            firebaseApp.firestore().collection('users').doc(id).get().then(snapshot => {
                this.datapacket = snapshot.data()
                this.name = this.datapacket.firstName + " " + this.datapacket.lastName
                this.subjects = this.datapacket.subjects
                this.level = this.datapacket.level
                this.rate = this.datapacket.rates  
            });
        
        },
        submitBtn: function() {
            var id = this.$route.params.tutorid;
            firebaseApp.firestore().collection('users').doc(id)
                .collection('applicationsNew').add(
                    this.details
                )
        }, 
    },
    props: {
      tutorid: {
        type: String
      }
    },
    created () {
      this.fetchItems()    
    }
}
</script>

<style>
.oye-timepicker {
  display: flex;
  flex-direction: row;
}

.p-1 {
  padding: 10px;
}

.v-text-field{
    height: 100px;
}

h1 {
    margin-left: 30px;
}

</style>
