<template>
  <div>
    <Header></Header>
    <MenuBarStudents></MenuBarStudents>
    <v-container grid-list-md text-md-center fluid fill-height>
      <v-col md="5">
        <v-card dark tile flat color="#388087">
          <h2>{{ name }}</h2>
          <v-img
            height="100%"
            width="100%"
            v-bind:src="imgSrc"
            position="center"
          ></v-img>
          <v-btn color="#388087" v-on:click="chatBtn()" block>Chat</v-btn>
          <v-btn color="#388087" v-on:click="applyBtn()" block
            >Apply Now!</v-btn
          >
        </v-card>
      </v-col>
      <v-col md="7">
        <v-card dark tile flat color="#388087">
          <v-card-text>Subjects Offered: {{ subjects }} </v-card-text
          ><v-divider></v-divider> <v-card-text>Level: {{ level }} </v-card-text
          ><v-divider></v-divider>
          <v-card-text>Rate: S${{ rate }}/hr </v-card-text>
        </v-card>
        <br />
        <v-card dark tile flat color="#388087">
          <v-card-text>Reviews:</v-card-text>
          <v-flex v-for="review in reviews" :key="review.num">
            <v-card color="gray" dark width="150px">
              <v-card-text>{{ review.num }}</v-card-text>
            </v-card>
          </v-flex>
        </v-card>
        <br><br>
        <button id="reviewBtn" v-on:click="reviewBtn()">Write A Review</button>
      </v-col>
    </v-container>
    <img
      src="https://pbs.twimg.com/media/EyqjfCLU8AIpFHi?format=png&name=360x360"
    />
  </div>
</template>

<script>
import Header from "./Header.vue";
import firebaseApp from "../firebase.js";
import MenuBarStudents from './MenuBarStudents.vue'

export default {
  components: {
    Header: Header,
    MenuBarStudents
  },
  data() {
    return {
      uid: this.$route.params.uid,
      name: "",
      reviews: [],
      tutor_id: "",
      subjects: "",
      level: "",
      rate: "",
      datapacket: [],
      imgSrc: "",
    };
  },
  methods: {
    fetchItems: function () {
      var id = this.$route.params.tutorid;
      this.tutor_id = id;
      console.log(id);
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
      firebaseApp
        .storage()
        .ref()
        .child("images/" + id)
        .getDownloadURL()
        .then((url) => {
          this.imgSrc = url;
        });
    },
    applyBtn: function () {
      console.log(this.tutor_id);
      this.$router.push({
        name: "applyNow",
        params: { tutorid: this.tutor_id, uid: this.uid },
        props: true,
      });
    },
    chatBtn: function () {
      this.$router.push({
        name: "chat",
        params: { uid: this.uid, otherid: this.tutor_id },
        props: true,
      });
    },
    reviewBtn: function() {
      this.$router.push({
        name: "leaveReview",
        params: { uid: this.uid, tutorId: this.tutor_id },
        props: true
      });
    }
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
.v-card__text {
  color: white;
}

img {
  position: absolute;
  right: 0px;
  bottom: 0px;
}

#reviewBtn {
  color: white;
  background-color: #388087;
  border-radius: 5px;
  height: 30px;
  padding: 10px;
}
</style>
