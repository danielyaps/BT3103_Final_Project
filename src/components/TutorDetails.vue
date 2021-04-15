<template>
  <div>
    <Header></Header>
    <MenuBarStudents v-bind:uid="uid"></MenuBarStudents>
    <v-container grid-list-md text-md-center fluid fill-height>
      <v-col md="5">
        <v-card dark tile flat color="#388087" height="500" >
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
        <v-card dark tile flat color="#388087" >
          <v-card-text>Subjects Offered: {{ subjects }} </v-card-text
          ><v-divider></v-divider> <v-card-text>Level: {{ level }} </v-card-text
          ><v-divider></v-divider>
          <v-card-text>Rate: S${{ rate }}/hr </v-card-text>
        </v-card>
        <br />
        
        <v-card dark tile flat color="#388087" height="250" class="justify-center" >
          <v-card-text>Reviews:
          <v-list id="listItem" v-for="(item,i) in reviews" :key="i" class ="overflow-y:auto d-flex flex-column" >
            <v-list-item id="item" width="85%" height="100" class="justify-center mt-auto">
              
              <v-row id="listRow" align="center" light>
              <v-col cols="2">
                <v-img v-bind:src="item.image" style="width: 80px; height: 80px; position: relative; float: left; left: 20px; border-radius: 50%"></v-img>
              </v-col>

              <v-col class="text" cols="10" >
                {{ item.review }}
                <p class="text" style="position: absolute; bottom: 10px; right: 10px">- {{item.studentUserName}} </p>
              </v-col>
              </v-row>
            </v-list-item>
          </v-list>
          </v-card-text>
        </v-card>
        <br><br>
        <button id="reviewBtn" v-on:click="reviewBtn()">Write A Review</button>
      </v-col>
    </v-container>

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
          console.log("got details");
        });

      firebaseApp.firestore().collection('users').doc(id).collection('reviews').onSnapshot((querySnapShot) => {
                let review={}
                querySnapShot.forEach(doc => {
                    review = doc.data()
                    this.reviews.push(review)       
                })
                console.log(this.reviews)
            })
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
.text{
  color: black;
}

.v-card {
  display: flex !important;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1;
  overflow: auto;
}

#listItem {
  background-color:white;
  display: flex;
  color: #FFFFFF;
  width: 90%;
  padding: 10px;
  margin-right:auto;
  margin-left:auto;
  outline: 5px solid #388087;
}
#item {
  padding: 10px;
  
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
  text-align: center;
}

#reviewBtn:hover{
  background: #6FB3B8;
}

</style>
