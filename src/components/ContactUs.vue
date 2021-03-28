<template>
  <div id="whole">
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
    <form id="inputs">
      <input
        placeholder="Name"
        v-model.lazy.trim="inputname"
        name="inputname"
      />
      <input
        placeholder="Email"
        v-model.lazy.trim="inputemail"
        name="inputemail"
      /><br />
      <textarea
        id="msgbox"
        placeholder="Message"
        v-model.lazy.trim="inputmsg"
        name="inputmsg"
        rows="5"
        cols="40"
      ></textarea
      ><br />
      <button
        type="submit"
        value="Submit"
        v-on:click="complete(inputname, inputemail, inputmsg)"
      >
        Submit
      </button>
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


#navUL {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  max-width: 70%;
  padding: 0;
}
#navLI {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  max-width: 29%;
  margin: 10px;
}

#title {
  font-weight: 900;
  font-size: 70px;
}

#msgbox::placeholder {
  font-family: Arial, Helvetica, sans-serif;
}
</style>