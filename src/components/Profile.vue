<template>
  <div class="page">
    <Header></Header>
    <div class="nav" v-if="this.type === 'Student'">
      <MenuBarStudents v-bind:uid="uid"></MenuBarStudents>
    </div>

    <div class="nav" v-else>
      <MenuBarTutors v-bind:uid="uid"></MenuBarTutors>
    </div>
    <br />
    <br />
    <div class="image-upload">
      <br />
      <label class="image" for="file-input">
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
    <div class="inputs" v-if="this.type === 'Student'">
      <label> Username:</label>
      <input
        type="text"
        id="user"
        v-model="updatedDetails.username"
        :placeholder="this.details.username"
      />
      <br />
      <label>Name: </label>
      <input
        type="text"
        id="fname"
        v-model="updatedDetails.firstName"
        :placeholder="this.details.firstName"
      />
      &nbsp;
      <input
        type="text"
        id="lname"
        v-model="updatedDetails.lastName"
        :placeholder="this.details.lastName"
      />
      <br />
    
      <label>Current Password: </label>
      <input
        type="password"
        id="cpw"
        v-model="initialPassword"
        placeholder="*******"
        required
      />
      <br />
      <label>New Password: </label>
      <input
        type="password"
        id="npw"
        v-model="newPassword"
        placeholder="If Required"
      />
      <br />
      <label>Level/School: </label>
      <input
        type="text"
        id="level"
        v-model="updatedDetails.level"
        :placeholder="this.details.level"
      />
      <br />
      <label>Subjects Interested: </label>
      <input
        type="text"
        id="subjects"
        v-model="updatedDetails.subjects"
        :placeholder="this.details.subjects"
      />
      <br />
    </div>
    <div class="inputs" v-else>
      <label> Username: </label>
      <input
        type="text"
        id="user"
        v-model="updatedDetails.username"
        :placeholder="this.details.username"
      />
      <br />
      <label> Name: </label>
      <input
        type="text"
        id="fname"
        v-model="updatedDetails.firstName"
        :placeholder="this.details.firstName"
      />
      &nbsp;
      <input
        type="text"
        id="lname"
        v-model="updatedDetails.lastName"
        :placeholder="this.details.lastName"
      />
      <br />
      <label>Current Password: </label>
      <input
        type="password"
        id="cpw"
        v-model="initialPassword"
        placeholder="******"
        required
      />
      <br />
      <label>New Password: </label>
      <input
        type="password"
        id="npw"
        v-model="newPassword"
        placeholder="If you want to change!"
      />
      <br />
      <label>Level/School: </label>
      <input
        type="text"
        id="level"
        v-model="updatedDetails.level"
        :placeholder="this.details.level"
      />
      <br />
      <label>Subjects Offered:</label>
      <input
        type="text"
        id="subjects"
        v-model="updatedDetails.subjects"
        :placeholder="this.details.subjects"
      />
      <br />
      <label>Rates per Hour:</label>
      <input
        type="text"
        id="rates"
        v-model="updatedDetails.rates"
        :placeholder="this.details.rates"
      />
      <br />
      <br />
      <label>Description:</label>
      <textarea
        v-model="updatedDetails.description"
        :placeholder="this.details.description"
        cols="37"
        rows="7"
      ></textarea>
      <br />
    </div>
    <br />
    <br />
    <button type="button" v-on:click="save">Save</button>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>



<script>
import firebaseApp from "../firebase.js";
import Header from "./Header.vue";
import MenuBarStudents from "./MenuBarStudents.vue";
import MenuBarTutors from "./MenuBarTutors.vue";

export default {
  data() {
    return {
      uid: this.$route.params.uid,
      type: this.$route.params.type,
      image: null,
      changeImage: false,
      initialPassword: "",
      newPassword: "",
      details: {},
      updatedDetails: {},
    };
  },

  methods: {
    fetchItems: function () {
      firebaseApp
        .firestore()
        .collection("users")
        .doc(this.uid)
        .get()
        .then((doc) => {
          this.details = doc.data();
        });
      var storageRef = firebaseApp.storage().ref();
      storageRef
        .child("images/" + this.uid)
        .getDownloadURL()
        .then((url) => {
          this.image = url;
        });
    },

    selectImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.image = e.target.result;
        this.changeImage = true;
      };
    },

    updateImage(message) {
      var storageRef = firebaseApp.storage().ref();
      storageRef.child("images/" + this.uid).delete();
      storageRef.child("images/" + this.uid).putString(message, "data_url");
    },

    save: function () {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.details.email, this.initialPassword)
        .then((userCredential) => {
          var user = userCredential.user;
          if (Object.keys(this.updatedDetails).length > 0) {
            Object.entries(this.updatedDetails).forEach(([key, value]) => {
              this.details[key] = value;
            });
          }
          if (this.changeImage) {
            this.updateImage(this.image);
          }
          firebaseApp
            .firestore()
            .collection("users")
            .doc(this.uid)
            .set(this.details)
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
          if (this.newPassword != "") {
            user
              .updatePassword(this.newPassword)
              .then(function () {
                console.log("Success!");
              })
              .catch(function (error) {
                alert(error);
              });
          }
          alert("Successfully saved!");
          var x = "home".concat(this.type);
          this.$router.push({ name: x, params: { uid: this.uid } });
        })
        .catch(function () {
          alert("Require Current Password!");
        });
    },
  },

  created() {
    this.fetchItems();
  },

  components: {
    Header: Header,
    MenuBarStudents,
    MenuBarTutors,
  },
};
</script>

<style scoped>
.page {
  position: fixed;
  overflow-y: scroll;
  background-color: white;
  text-align: center;
  color: #888888;
  font-family: Roboto;
  font-size: 14px;
  width: 100vw;
  height: 100vh;
}

.image-upload > input {
  display: none;
}

img {
  width: 250px;
  height: 250px;
}

.image {
  margin-right: -50px;
}

label,
input,
textarea {
  display: inline-block;
}

label {
  margin-left: -8%;
  width: 10%;
  text-align: right;
}

input[type="radio"] {
  text-align: center;
  left: 10px;
  font-size: 14px;
}

input[type="text"],
input[type="password"] {
  background-color: white;
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
  background-color: white;
  border: none;
  border-bottom: 2px solid #888888;
  padding: 18px;
  height: 32px;
  font-family: Roboto;
  font-size: 14px;
  width: 145px;
}

textarea {
  background-color: #6fb3b8;
  font-size: 14px;
  font-family: Roboto;
  border-radius: 15px;
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

.nav{
    font-family: 'Times New Roman', Times, serif;
    position: absolute;
    left: 0;
}
</style>