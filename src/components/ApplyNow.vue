<template>
<div>
    <Header></Header>
    <br>
    <H1>Apply for {{name}}'s class</H1>
    <v-app style="background: #6FB3B8">
    <v-container grid-list-md text-md-center fluid fill-height>
        <v-col fluid>
        <v-card background-color="#388087" elevation="2" fluid outlined tile >
            <v-card-text class="text-left" background-color="#388087">
            <h4>Subject:</h4>
            <v-text-field placeholder="Subject" v-model="subjectA" ></v-text-field>
            <h4>Day:</h4>
            <v-autocomplete ref="day" :items="days" v-model="dayA"
              label="Day" required solo-inverted></v-autocomplete>
            <h4>Time:</h4>
            <div class="oye-timepicker">
            
                <div class="p-1">
                    <v-text-field v-model="startHr" name="" id="" type="number"></v-text-field>
                </div>
                <div class="p-1">:</div>
                <div class="p-1">
                    <v-text-field name="" v-model="startMin" id="" type="number"></v-text-field>
                </div> 

                <div class="p-1">
                    <v-select :items="AP" label="Solo field" dense solo v-model="startP" autowidth></v-select>
                </div>
            </div>
            <h4>Duration:</h4>
            <v-text-field placeholder="Duration (hours) " v-model="durationA" type="number" suffix="hours"></v-text-field>
            
            <h4>Rate (S$/hr):</h4>
            <v-text-field placeholder="/hour" v-model="rateA" type="number" prefix="S$"></v-text-field>

            <h4>Location:</h4>
            <v-text-field placeholder="Location" v-model="locationA"></v-text-field>
            <v-alert v-if="this.error" dense border="left" type="warning">One or more fields missing</v-alert>

            </v-card-text>
            <v-card-actions>

                <v-btn to="" left>Cancel</v-btn>
                <v-btn v-on:click="submitBtn()" right position: absolute>Submit</v-btn>
                
            </v-card-actions>
        </v-card>
        </v-col>
        </v-container>
        </v-app>

</div>
</template>

<script>
import Header from "./Header.vue";
import firebaseApp from "../firebase.js";

export default {
  components: {
    Header: Header,
  },
  data() {
    return {
      uid: this.$route.params.uid,
      tutor_id: "",
      subjectA: null,
      dayA: null,
      locationA: null,
      durationA: null,
      AP: ["AM", "PM"],
      rateA: null, 
      datapacket: [],
      startP: "",
      startMin: "",
      startHr: "",
      name: "",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      formHasErrors: false,
      error: false,
    };
  },
  computed: {
    form() {
      return {
        subjectA: this.subjectA,
        dayA: this.dayA,
        locationA: this.locationA,
        startHr: this.startHr,
        startMin: this.startMin,
        startP: this.startP,
        durationA: this.durationA,
        rateA: this.rateA
      };
    },
  },
  methods: {
    fetchItems: function () {
      var id = this.$route.params.tutorid;
      this.tutor_id = id;
      firebaseApp
        .firestore()
        .collection("users")
        .doc(id)
        .get()
        .then((snapshot) => {
          this.datapacket = snapshot.data();
          this.name =
            this.datapacket.firstName + " " + this.datapacket.lastName;
          this.subjects = this.datapacket.subjects;
          this.level = this.datapacket.level;
          this.rate = this.datapacket.rates;
        });
    },
    submitBtn: function () {
      this.error = false;
      console.log(this.form);
      for (let value of Object.values(this.form)) {
        console.log(value);
        if (value == null) {
          this.error = true;
        }
      }

      if (this.error == false) {
        var id = this.$route.params.tutorid;
        console.log(this.uid)
        let docref = firebaseApp
          .firestore()
          .collection("users")
          .doc(id)
        docref.collection("applicationsNew")
          .doc(this.uid)
          .set(this.form);
        alert("Application Submitted");
        this.$router.push({ path: "/homeStudent/:uid" });
      }
    },
    resetBtn() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
  },
  props: {
    tutorid: {
      type: String,
    },
  },
  created() {
    this.fetchItems();
  },
};
</script> 

<style scoped>
.oye-timepicker {
  display: flex;
  flex-direction: row;
}
.v-btn {
  width: 100px;
}
.p-1 {
  padding: 10px;
}

.v-text-field {
  height: 100px;
}

h1 {
  margin-left: 30px;
  font-weight: 900;
  font-size: 40px;
  color: #388087;
}

.theme--light.v-btn.v-btn--has-bg {
    background-color: #388087;
}

.theme--light.v-btn {
    color: white;
}
</style>
