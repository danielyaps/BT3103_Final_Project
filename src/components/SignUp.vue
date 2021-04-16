<template>
  <div class="signup">
    <Header></Header>
    <br />
    <br />
    <div class="image-upload">
      <br />
      <label for="file-input">
        <img :src="this.image" />
      </label>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        v-on:change="selectImage"
      />
      <br />
    </div>
    <br />
    <input type="radio" id="one" value="Student" v-model="type" />
    <label for="one">Student</label>
    <input type="radio" id="two" value="Tutor" v-model="type" />
    <label for="two">Tutor</label>
    <div v-if="this.type === 'Student'">
      <input
        type="text"
        id="user"
        v-model="username"
        placeholder="User Name"
        required
      />
      <br />
      <input
        type="text"
        id="fname"
        v-model="firstname"
        placeholder="First Name"
        required
      />
      &nbsp;
      <input
        type="text"
        id="lname"
        v-model="lastname"
        placeholder="Last Name"
        required
      />
      <br />
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="Email"
        required
      />
      <br />
      <input
        type="password"
        id="pw"
        v-model="password"
        placeholder="Password"
        required
      />
      <br />
      <input
        type="text"
        id="level"
        v-model="level"
        placeholder="Level/School"
        required
      />
      <br />
      <input
        type="text"
        id="subjects"
        v-model="subjects"
        placeholder="Subjects Interested"
        required
      />
      <br />
    </div>
    <div v-else-if="this.type === 'Tutor'">
      <input type="text" id="user" v-model="username" placeholder="User Name" />
      <br />
      <input
        type="text"
        id="fname"
        v-model="firstname"
        placeholder="First Name"
        required
      />
      &nbsp;
      <input
        type="text"
        id="lname"
        v-model="lastname"
        placeholder="Last Name"
        required
      />
      <br />
      <input type="email" id="email" v-model="email" placeholder="Email" />
      <br />
      <input
        type="password"
        id="pw"
        v-model="password"
        placeholder="Password"
      />
      <br />
      <input type="text" id="level" v-model="level" placeholder="Level" />
      <br />
      <input
        type="text"
        id="subjects"
        v-model="subjects"
        placeholder="Subjects Offered"
      />
      <br />
      <input
        type="text"
        id="rates"
        v-model="rates"
        placeholder="Rates per Hour (SGD)"
      />
      <br />
      <br />
      <textarea
        v-model="description"
        placeholder="Description"
        cols="37"
        rows="7"
      ></textarea>
      <br />
    </div>
    <br />
    <br />
    <button type="button" v-on:click="register">Create Account</button>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>



<script>
import firebaseApp from "../firebase.js";
import Header from "./Header.vue";
export default {
  props: {
    color: {
      type: String,
      default: "black",
    },
  },
  data() {
    return {
      uid: "",
      type: "Student",
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      subjects: "",
      level: "",
      rates: "",
      description: "",
      image:
        "https://firebasestorage.googleapis.com/v0/b/bt3103finalproject.appspot.com/o/images%2FScreenshot%202021-04-16%20at%2011.32.49%20PM.png?alt=media&token=260adacc-f879-4f07-a85c-a713a889b535",
      change: false,
    };
  },
  components: {
    Header: Header,
  },
  methods: {
    register: function () {
      if (this.change) {
        firebaseApp
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(
            (userCredential) => {
              var user = userCredential.user;
              this.uid = user.uid;
              if (this.type == "Student") {
                firebaseApp.firestore().collection("users").doc(user.uid).set({
                  type: this.type,
                  username: this.username,
                  firstName: this.firstname,
                  lastName: this.lastname,
                  email: this.email,
                  level: this.level,
                  subjects: this.subjects,
                });
              } else {
                firebaseApp.firestore().collection("users").doc(user.uid).set({
                  type: this.type,
                  username: this.username,
                  firstName: this.firstname,
                  lastName: this.lastname,
                  email: this.email,
                  level: this.level,
                  subjects: this.subjects,
                  rates: this.rates,
                  description: this.description,
                });
              }
              this.uploadMetadata(this.image);
              alert("Registration successful! Please login!");
              this.$router.push({ name: "login" });
            },
            (err) => {
              alert(err.message);
            }
          );
      } else {
        alert("Please upload a picture!");
      }
    },

    selectImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.image = e.target.result;
        this.change = true;
      };
    },

    uploadMetadata(message) {
      var storageRef = firebaseApp.storage().ref();
      storageRef.child("images/" + this.uid).putString(message, "data_url");
    },
  },
};
</script>

<style scoped>
.signup {
  position: fixed;
  overflow-y: scroll;
  background-color: #ffffff;
  text-align: center;
  color: #888888;
  font-family: Roboto;
  font-size: 14px;
  width: 100vw;
  height: 100vh;
}

Header {
  color: black;
}

.image-upload > input {
  display: none;
}

img {
  width: 250px;
  height: 250px;
}

input[type="radio"] {
  text-align: center;
  left: 10px;
  font-size: 14px;
}

input[type="text"],
input[type="password"] {
  background-color: #ffffff;
  border: none;
  border-bottom: 2px solid #888888;
  padding: 18px;
  height: 32px;
  font-family: Roboto;
  font-size: 14px;
  width: 300px;
  left: 0px;
}

#email {
  background-color: #ffffff;
  border: none;
  border-bottom: 2px solid #888888;
  padding: 18px;
  height: 32px;
  font-family: Roboto;
  font-size: 14px;
  width: 300px;
  left: 0px;
}

#fname,
#lname {
  background-color: #ffffff;
  border: none;
  border-bottom: 2px solid #888888;
  padding: 18px;
  height: 32px;
  font-family: Roboto;
  font-size: 14px;
  width: 145px;
}

textarea {
  background-color: #BADFE7;
  font-size: 14px;
  font-family: Roboto;
  border-radius: 5px;
  width: 300px;
}

button {
  background-color: #388087;
  color: white;
  border-radius: 4px;
  width: 130px;
  height: 30px;
  border: none;
  font-size: 14px;
}
</style>