<template>
<div>
<nav>
    <div v-if="this.loggedin">
    <ul>                
        <li><router-link :class='{"white": color === "white", "black": color === "black"}' :to="{name: this.homeLink, params:{uid : this.uid}}">Home</router-link></li> 
        <li><router-link :class='{"white": color === "white", "black": color === "black"}' to="/ContactUs" exact>Contact Us</router-link></li> 
        <li><router-link :class='{"white": color === "white", "black": color === "black"}' to="/FAQ" exact>FAQ</router-link></li>
    </ul> 
    <button id="logout" v-on:click="logout()">Logout</button> 
    </div>
    <div v-else>
    <ul>                
        <li><router-link :class='{"white": color === "white", "black": color === "black"}' to="/">Home</router-link></li> 
        <li><router-link :class='{"white": color === "white", "black": color === "black"}' to="/ContactUs" exact>Contact Us</router-link></li>
        <li><router-link :class='{"white": color === "white", "black": color === "black"}' to="/FAQ" exact>FAQ</router-link></li>
    </ul>   
    <button id="login" v-on:click="goLogin()">Login?</button> 
    </div>
    
    
</nav>

</div>
</template>

<script>
import firebaseApp from '../firebase.js'
export default {
    props: {
        color: {
            type: String,
            default: 'black',
        }
    },
    data() {
        return {
            uid:"",
            type:"",
            loggedin: false,
            homeLink:"",
        }
    },
    methods: {
        goLogin: function() {
            this.$router.push({path:'/login'})
        },

        logout: function() {
            firebaseApp.auth().signOut().then(() => {
                alert("Sign out successful!");
                this.$router.push({path:'/'});
            }).catch((error) => {
                alert(error);
            });

        },

        start: function() {
            var user = firebaseApp.auth().currentUser;
            if (user) {
                this.loggedin = true;
                this.uid = user.uid;
                firebaseApp.firestore().collection('users').doc(user.uid).get().then((doc)=>{
                this.type = doc.data().type;
                this.homeLink ='home'.concat(this.type);
                });
                
            } 
        }
    },
    created() {
        this.start();
    }
}
</script>

<style>
ul {
    display: flex; 
    list-style-type: none;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    font-size: 14px;
    width:50%;
    margin: 0 auto;
}
li {
  flex-grow: 1;
  text-align: center;
  padding: 10px;
}
#logout, #login {
    position: absolute;
    right: 10px;
    top: 14px;
    text-align: center;
    color: white;
    font-size: 14px;
    border-radius: 5px;
}
.black {
    display: block;
    color: black;
    padding: 10px;
    font-size: 14px;
}
.white {
    display: block;
    color: white;
    padding: 10px;
    font-size: 14px;
}
        
</style>


