<template>
  <div id="whole" class="float-container">
    <Header></Header>

    <div id="title">Leave A Review</div>
    <br /><br /><br />

    <form id="inputs">
      <select id="selectt" v-model="tutor" required>
        <option value="" disabled selected>Select something...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
      </select>
      <br /><br />
        
      <Rating required></Rating>
      <br /><br />
      <textarea
        id="reviewbox"
        placeholder="Leave a short review"
        v-model.lazy.trim="review"
        name="review"
        rows="5"
        cols="40"
      ></textarea
      ><br /><br />
      <div id="b">
        <button
          type="submit"
          value="Submit"
          v-on:click="complete(tutor, review)"
        >
          Submit
        </button>
        <button id="cancelb" v-on:click="cancel()">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Rating from "./Rating.vue"

export default {
  components: {
    Header, Rating
  },
  data() {
    return {
      tutor: "",
      stars: "",
      review: "",

    }
  },

  methods: {
    complete: function (value1, value2) {
      if (value1 == "" || value2 == "") {
        alert("Incomplete submission, please fill in all fields");
      } else {
        alert("Your response has been submitted");
      }
    },

    cancel: function () {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
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

#cancelb {
  position: relative;
  left: 20px;
}
</style>