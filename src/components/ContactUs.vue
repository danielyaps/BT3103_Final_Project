<template>
  <div id="whole" class="float-container">
    <nav>
      <ul id="navUL">
        <li id="navLI"><router-link to="/" exact>Home</router-link></li>
        <li id="navLI"><router-link to="/Login" exact>Login</router-link></li>
        <li id="navLI"><router-link to="/SignUp" exact>SignUp</router-link></li>
        <li id="navLI">
          <router-link to="/ContactUs" exact>Contact Us</router-link>
        </li>
        <li id="navLI"><router-link to="/FAQ" exact>FAQ</router-link></li>
      </ul>
    </nav>

    <div id="title">Contact Us!</div>
    <br /><br /><br />
    <form id="inputs">
      <input
        placeholder="Name"
        type="text"
        v-model.lazy.trim="inputname"
        name="inputname"
      />

      <input
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
      <div id="b">
        <button
          type="submit"
          value="Submit"
          v-on:click="complete(inputname, inputemail, inputmsg)"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
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
      }
    },
  },
};
</script>

<style>
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

#msgbox {
  background-color: white;
  border: none;
  border-bottom: 2px solid #888888;
  height: 200px;
  font-family: Roboto;
  width: 400px;
}

button {
  background-color: dimgray;
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
</style>