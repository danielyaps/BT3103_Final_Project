<template>
  <div>
    <nav>
      <div v-if="this.loggedin">
        <ul>
          <li>
            <router-link
              :to="{ name: this.homeLink, params: { uid: this.uid } }"
              >Home</router-link
            >
          </li>
          <li>
            <router-link to="/ContactUs" exact>Contact Us</router-link>
          </li>
          <li>
            <router-link to="/FAQ" exact>FAQ</router-link>
          </li>
        </ul>
        <v-btn id="logout" v-on:click="logout()">Logout</v-btn>
      </div>
      <div v-else>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/ContactUs" exact>Contact Us</router-link>
          </li>
          <li>
            <router-link to="/FAQ" exact>FAQ</router-link>
          </li>
        </ul>
        <v-btn id="login" v-if="!this.loginPage" v-on:click="goLogin()">Login?</v-btn>
      </div>
    </nav>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
export default {
  props: {
    color: {
      type: String,
      default: "black",
    },
    loginPage: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      uid: "",
      type: "",
      loggedin: false,
      homeLink: "",
    };
  },
  methods: {
    goLogin: function () {
      this.$router.push({ path: "/login" });
    },

    logout: function () {
      firebaseApp
        .auth()
        .signOut()
        .then(() => {
          alert("Sign out successful!");
          this.$router.push({ path: "/" });
        })
        .catch((error) => {
          alert(error);
        });
    },

    start: function () {
      var user = firebaseApp.auth().currentUser;
      if (user) {
        this.loggedin = true;
        this.uid = user.uid;
        firebaseApp
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            this.type = doc.data().type;
            this.homeLink = "home".concat(this.type);
          });
      }
    },
  },
  created() {
    this.start();
  },
};
</script>

<style scoped>
.v-application a {
  color: #767676;
}
ul {
  display: flex;
  list-style-type: none;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  font-size: 14px;
  width: 50%;
  margin: 0 auto;
}
li {
  flex-grow: 1;
  text-align: center;
  padding: 10px;
}

li:hover{
  border: none;
  border-bottom: 2px solid #888888;

}

#logout,
#login {
  position: absolute;
  right: 10px;
  top: 14px;
  text-align: center;
  background-color: #388087;
  color: white;
  font-size: 14px;
  border-radius: 5px;
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
}

a {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-decoration: none;
  color: #767676;
}
</style>


