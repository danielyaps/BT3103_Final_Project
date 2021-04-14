<template>
  <div id="whole" class="float-container">
    <Header></Header>
    <MenuBarStudents v-bind:uid="uid"></MenuBarStudents>

    <h1>Leave A Review</h1>
    <br />

    <form id="inputs">
      <span>Grade Improvement (e.g. -2 for A1 to B3): </span>
      <input v-model.number="gradeImprovement" type="number" style="border-style: solid; width: 100px; text-align:center" required> 
      <br /><br>
      
      Rating:<br />
        
      <Rating @clicked="onClick" required></Rating>
      <br /><br />

      Review: <br><br>
      <textarea
        id="reviewbox"
        placeholder="Leave a short review"
        v-model.lazy.trim="review"
        name="review"
        rows="5"
        cols="40"
        required
      ></textarea
      ><br /><br />
      <div id="b">
        <button
          type="submit"
          v-on:click.prevent="submitReview"
          style="color: white"
        > Submit </button>
      </div>
    </form>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Rating from "./Rating.vue";
import firebaseApp from '../firebase.js';
import MenuBarStudents from "./MenuBarStudents.vue";

export default {
  components: {
    Header, Rating, MenuBarStudents
  },
  data() {
    return {
      finalGrade: "",
      stars: 0,
      review: "",
      uid: this.$route.params.uid,
      tutorId: this.$route.params.tutorId,
      gradeImprovement: null
    }
  },

  methods: {
    onClick: function(value) {
      this.stars = value
    },

    submitReview: function() {
      if (this.gradeImprovement == null || this.stars == 0 || this.review == "") {
        alert("Incomplete Submission")
      } else {
        alert("Submitted")
        let rating = { stars: this.stars, review: this.review, gradeImprovement: this.gradeImprovement}
        var storageRef = firebaseApp.storage().ref();
        storageRef
          .child("images/" + this.uid)
          .getDownloadURL()
          .then((url) => {
            rating.image = url
          }).then(() => {
            firebaseApp.firestore().collection('users').doc(this.uid).get().then((docRef) => {
              rating.studentUserName = docRef.data().username
            }).then(() => {
              firebaseApp.firestore().collection('users').doc(this.tutorId).collection('reviews').doc(this.uid).set(rating)
            }).then(setTimeout(function() {
                location.reload()
              }, 3000));
          })
      }
    }
  },
};
</script>

<style scoped>
h1 {
  font-weight: 900;
  font-size: 50px;
  color: #388087;
  position: relative;
  left: 90px;
  text-align: left;
}

#selectt{
    background-color: white;
    border-radius: 5px;
    width: 200px;
    height: 30px;
}

select:required:invalid {
  color: gray;

}
option[value=""][disabled] {
  display: none;
}
option {
  color: black;
}
#inputs {
  position: relative;
  left: 100px;
}

#title {
  font-weight: 900;
  font-size: 70px;
  color: dimgrey;
  position: relative;
  left: 100px;
}

input[type="text"] {
  background-color: white;
  border: none;
  border-bottom: 2px solid #888888;
  height: 20px;
  font-family: Roboto;
  width: 145px;
  padding: 5px;
}

input[type="email"] {
  background-color: white;
  border: none;
  border-bottom: 2px solid #888888;
  height: 20px;
  font-family: Roboto;
  width: 200px;
  padding: 5px;
  position: relative;
  left: 20px;
}

#reviewbox {
  background-color: white;
  border-style: solid;
  border-bottom: 2px solid #888888;
  height: 200px;
  font-family: Roboto;
  width: 400px;
}

button {
  background-color: #388087;
  color: white;
  border-radius: 4px;
  width: 130px;
  height: 30px;
  border: none;
  font-size: 14px;
  font-family: Roboto;
}

</style>