<template>
  <div>
    <Header></Header>
    <MenuBarTutors v-bind:uid="uid"></MenuBarTutors>
    <br />
    <H1>Student Applications</H1>
    <v-card color="#6FB3B8" elevation="16" max-width="1500" class="mx-auto">
      <v-list
        class="list"
        v-for="(item, i) in studentapps"
        :key="i"
        item-height="100"
        height="100%"
      >
        <v-list-item class="listItem">
          <h4 style="color: #388087">{{ item.stuName }}</h4>
          <br /><br />
          <v-img
            v-bind:src="item.stuImg"
            style="
              width: 80px;
              height: 80px;
              border-radius: 50%;
              position: relative;
              left: 10px;
            "
          ></v-img>

          <v-col cols="6">
            <v-list-item-subtitle
              class="leftDetails"
              font-size="20px"
              style="color: #388087; position: relative; left: 10px"
            >
              Subject: {{ item.subjectA }}</v-list-item-subtitle
            >
            <v-list-item-subtitle
              class="leftDetails"
              style="color: #388087; position: relative; left: 10px"
              >Current Grade: {{ item.currGradeA }}</v-list-item-subtitle
            >
            <v-list-item-subtitle
              class="leftDetails"
              style="color: #388087; position: relative; left: 10px"
              >Day: {{ item.dayA }}</v-list-item-subtitle
            ></v-col
          >
          <v-col cols="6">
            <v-list-item-subtitle class="rightDetails" style="color: #388087"
              >Rate: S${{ item.rateA }}</v-list-item-subtitle
            >
            <v-list-item-subtitle class="rightDetails" style="color: #388087"
              >Location: {{ item.locationA }}</v-list-item-subtitle
            ></v-col
          >
          <div class="actions">
            <v-btn
              id="confirmBtn"
              v-bind:stuid="item.id"
              v-on:click="confirmApp($event)"
              >Confirm</v-btn
            ><br /><br />
            <v-btn
              id="chatBtn"
              v-bind:stuid="item.id"
              v-on:click="goChat($event)"
              >Chat</v-btn
            >
          </div>
        </v-list-item>

        <v-divider></v-divider>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import Header from "./Header.vue";
import firebaseApp from "../firebase.js";
import MenuBarTutors from "./MenuBarTutors.vue";

export default {
  components: {
    Header,
    MenuBarTutors,
  },
  data() {
    return {
      uid: this.$route.params.uid,
      stuid: "",
      studentapps: [],
      currApp: [],
      startDate: "",
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  },

  methods: {
    fetchItems: function () {
      firebaseApp
        .firestore()
        .collection("users")
        .doc(this.uid)
        .collection("applicationsNew")
        .get()
        .then((snapshot) => {
          let app = {};
          snapshot.docs.forEach((doc) => {
            app = doc.data();
            app.id = doc.id;
            let post = {};
            firebaseApp
              .firestore()
              .collection("users")
              .doc(app.id)
              .get()
              .then((snapshot) => {
                post = snapshot.data();
                app.stuName = post.firstName + " " + post.lastName;
              })
              .then(() => {
                var storageRef = firebaseApp.storage().ref();
                storageRef
                  .child("images/" + app.id)
                  .getDownloadURL()
                  .then((url) => {
                    app.stuImg = url;
                    console.log(app.stuImg);
                  })
                  .then(() => {
                    this.studentapps.push(app);
                  });
              });
          });
        });
    },

    generateDate: function (dayA) {
<<<<<<< HEAD
      var currDate = new Date();

      while (this.days[currDate.getDay()] != dayA) {
        currDate.setDate(currDate.getDate() + 1);
      }
      this.startDate = currDate.toISOString().substr(0, 10);
      console.log(currDate.toISOString().substr(0, 10));
=======
        var currDate = new Date();
        console.log(this.days[currDate.getDay()])
        while (this.days[currDate.getDay()] != dayA) {
          currDate.setDate(currDate.getDate() + 1);
          console.log(currDate.getDay())
        }
        console.log(currDate)
        console.log(currDate.toISOString())
        this.startDate = currDate.toISOString().substr(0, 10);
        console.log(currDate.toISOString().substr(0, 10))
>>>>>>> 9b7c2a2... change student app
    },

    goChat: function (event) {
      console.log(event.currentTarget.getAttribute("stuid"));
      this.stuid = event.currentTarget.getAttribute("stuid");
      if (this.stuid != null) {
        this.$router.push({
          name: "chat",
          params: { uid: this.uid, otherid: this.stuid },
          props: true,
        });
      }
    },

    confirmApp: function (event) {
      console.log("wts");
      this.stuid = event.target.getAttribute("stuid");
      let docref = firebaseApp.firestore().collection("users").doc(this.uid);
      let appDetails = [];
      for (let i = 0; i < Object.values(this.studentapps).length; i++) {
        if (this.studentapps[i].id == this.stuid) {
          appDetails = this.studentapps[i];
<<<<<<< HEAD
          console.log("wts2");
        }
      }
      this.generateDate(appDetails.dayA);
      console.log("wts2");
      docref
        .collection("applicationsConfirmed")
        .doc(this.stuid)
        .set(appDetails)
        .then();

      docref.collection("calEvent").doc(this.stuid).set({
        color: "#1976D2",
        details: "test",
        end: this.startDate,
        name: appDetails.stuName,
        start: this.startDate,
      });
=======
        }
      }
      this.generateDate(appDetails.dayA)
      console.log("wts2")
      
      docref.collection("applicationsConfirmed")
        .doc(this.stuid)
        .set(appDetails);
      console.log("added to apps")

      docref.collection("calEvent")
        .doc(this.stuid)
        .set({
          color: "#1976D2",
          details: "test",
          end: this.startDate,
          name: appDetails.stuName,
          start: this.startDate,
        });

      console.log("added to cal")
>>>>>>> 9b7c2a2... change student app

      docref
        .collection("applicationsNew")
        .doc(this.stuid)
        .delete()
        .then(() => {
          location.reload();
        });
<<<<<<< HEAD

=======
        console.log("deleted from new apps")
      
>>>>>>> 9b7c2a2... change student app
      alert("Application Confirmed");
    },
  },

  created() {
    this.fetchItems();
  },
};
</script>

<style scoped>
.list {
  background-color: #388087;
}
p {
  font-size: 1.2rem;
  font-weight: medium;
  padding: 2px;
}
.leftDetails,
.rightDetails {
  font-size: 1rem !important;
  padding: 2px;
}
.font-weight-bold {
  font-size: 1.2rem !important;
  font-weight: bold;
  margin-left: 15px;
}

.actions {
  position: absolute;
  right: 30px;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
#confirmBtn,
#chatBtn {
  position: relative;
  text-align: center;
  border-radius: 10px;
  background-color: #388087;
  color: white;
}

H1 {
  font-weight: 900;
  color: #388087;
  text-align: left;
  margin-left: 20px;
}

.listItem:hover {
  background: #badfe7;
  padding: 20px;
}
.listItem {
  padding: 20px;
  border: 5px solid #388087;
  background: white;
}
</style>
