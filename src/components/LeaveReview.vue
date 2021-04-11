<template>
  <div id="whole" class="float-container">
    <Header></Header>
    <MenuBarStudents></MenuBarStudents>

    <h1>Leave A Review</h1>
    <br />

    <form id="inputs">
      <span>Tutor Username: </span>
      <input type="text" v-model="tutorUsername" required>
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
          v-on:click.prevent="complete(tutorUsername, stars, review)"
          style="color: white"
        > Submit </button>
        <button id="cancelb" v-on:click="cancel()">Cancel</button>
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
      tutorUsername: "",
      stars: 0,
      review: "",
      uid: this.$route.params.uid
    }
  },

  methods: {
    onClick: function(value) {
      this.stars = value
    },

    complete: function(tutor, stars, review) {
      if (tutor == "" || stars == 0 || review == "") {
        alert("Incomplete Submission")
      } else {
        alert("Submitted")
        const rating = {Stars: stars, Review: review}
        firebaseApp.firestore().collection('users').where('username', '==', this.tutorUsername).get().then(snapshot => {
          snapshot.docs.forEach(doc => {
            var tutorId = doc.id
            var studentId = this.uid;
            var storageRef = firebaseApp.storage().ref();
            storageRef.child('images/' + studentId).getDownloadURL()
              .then((url) => {
                var photo = url
                return photo
              }).then((photo) => {
                rating.photo = photo
                firebaseApp.firestore().collection('users').doc(studentId).get().then((docRef) => {
                  rating.studentName = docRef.data().username
                  return rating
                }).then((rating) => {
                  console.log(rating)
                  firebaseApp.firestore().collection('users').doc(tutorId).collection('reviews').add(rating)
                }).then(setTimeout(function () {
                        location.reload()
                    }, 3000));
              })
          })
        })

      }
    },

    cancel: function () {
      this.$router.push({ path: "/" });
    },
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
  border: none;
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

#b {
  position: relative;
  left: 100px;
}

#cancelb {
  position: relative;
  left: 20px;
}
</style>