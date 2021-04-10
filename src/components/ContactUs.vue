<template>
  <div>
    <Header></Header>

    <h1>Contact Us!</h1>
    <br /><br /><br />
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
  </div>
</template>

<script>
import Header from "./Header.vue"

export default {
  components: {
    Header
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
div {
  text-align: left
}

h1 {
  font-weight: 900;
  font-size: 70px;
  color: #388087;
  position: relative;
  left: 70px;
  text-align: left
}

#inputboxname {
  background-color: #6FB3B8;
  border: none;
  border-bottom: 2px solid #888888;
  height: 20px;
  font-family: Roboto;
  width: 145px;
  padding: 5px;
}

#inputboxemail{
  background-color: #6FB3B8;
  border: none;
  border-bottom: 2px solid #888888;
  height: 20px;
  font-family: Roboto;
  width: 200px;
  padding: 5px;
  position: relative;
  left: 20px;
  color: white;
}

#msgbox {
  background-color: #6FB3B8;
  border: none;
  border-bottom: 2px solid #888888;
  height: 200px;
  font-family: Roboto;
  width: 400px;
  color: white;
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


</style>