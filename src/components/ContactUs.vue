<template>
  <div>
    <Header></Header>

    <h1>Contact Us!</h1>
    <br />
    <form id="inputs">
      <input
        id="inputboxname"
        placeholder="Name"
        type="text"
        v-model.lazy.trim="inputname"
        name="inputname"
      />

      <input
        id="inputboxemail"
        placeholder="Email"
        type="email"
        v-model.lazy.trim="inputemail"
        name="inputemail"
      /><br /><br />
      <textarea
        id="msgbox"
        placeholder="Message"
        v-model.lazy.trim="inputmsg"
        name="inputmsg"
        rows="5"
        cols="40"
      ></textarea
      ><br /><br />
      <button
        id="submitbtn"
        type="submit"
        value="Submit"
        v-on:click="complete(inputname, inputemail, inputmsg)"
      >
        Submit
      </button>
    </form>
    <img
      src="https://pbs.twimg.com/media/EyqjfCLU8AIpFHi?format=png&name=360x360"
    />
  </div>
</template>

<script>
import Header from "./Header.vue";
import firebaseApp from '../firebase.js'

export default {
  components: {
    Header,
  },
  data() {
    return {
      inputname: "",
      inputemail: "",
      inputmsg: "",
    };
  },

  methods: {
    complete: function (value1, value2, value3) {
      if (value1 == "" || value2 == "" || value3 == "") {
        alert("Incomplete submission, please fill in all fields");
      } else {
        alert("Your response has been submitted");
        firebaseApp.firestore().collection('questions').add({name: value1, email: value2, message: value3});
      }
    },
  }
}
</script>

<style scoped>
#inputs {
  position: relative;
  left: 100px;
}
div {
  text-align: left;
}

h1 {
  font-weight: 900;
  font-size: 50px;
  color: #388087;
  position: relative;
  left: 90px;
  text-align: left;
}

#inputboxname {
  background-color: #6fb3b8;
  border: none;
  border-bottom: 2px solid #888888;
  font-family: Roboto;
  width: 145px;
  padding: 5px;
  border-radius: 5px;
  height: 30px;
}

#inputboxemail {
  background-color: #6fb3b8;
  border: none;
  border-bottom: 2px solid #888888;
  font-family: Roboto;
  width: 200px;
  padding: 5px;
  position: relative;
  left: 20px;
  color: white;
  border-radius: 5px;
  height: 30px;
}

#msgbox {
  background-color: #6fb3b8;
  border: none;
  border-bottom: 2px solid #888888;
  height: 200px;
  font-family: Roboto;
  width: 400px;
  color: white;
  border-radius: 5px;
}

#submitbtn {
  background-color: #388087;
  color: white;
  border-radius: 4px;
  width: 130px;
  height: 30px;
  border: none;
  font-size: 14px;
  font-family: Roboto;
}

img {
  position: absolute;
  right: 0px;
  bottom: 0px;
}
</style>