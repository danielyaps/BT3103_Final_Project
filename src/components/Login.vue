<template>
<div id = "whole">
    <Header id="header"></Header>
    <div class="container">

        <div class="left">
            <h1>Welcome Back!</h1><br><br>
            <form @submit.prevent="pressed">
                <input id="email" placeholder="Email" v-model="email"><br><br>
                <input type="password" id="password" placeholder="Password" v-model="password"><br><br>
                <button id="loginBtn" type="submit">Login</button>
            </form>
        </div>

        <div class="right">
            <div id="pinkBox">
            <h2>New Here?</h2>
            <p>Whether you’re a student looking for some help or a teacher who’s looking to share your passion, join our team today!</p>
            <button v-on:click="goSignup()" id="gotoBtn">Sign Up Now!</button>
            </div> 
        </div>
        
    </div>
</div>
</template>

<script>
import firebaseApp from '../firebase.js'
import Header from './Header.vue'

export default {
    components: {
        'Header': Header
    },
    data() {
        return {
            myStyle: {
                backgroundColor:"#E0E0E0"
            },
            email: '',
            password: '',
        }
    },
    methods: {
        async pressed() {
            try {
                const val = await firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password);
                console.log(val)
                this.$router.replace({ name:'home' })
            } catch(err) {
                console.log(err)
            }
            
        },
        goSignup: function() {
            this.$router.push({path:'/signup'})
        }
    }
}

</script>

<style>
    #whole {
        background: #C1C0C0;
    }
    .container{
        display: flex;
        left: 0;
        height: 100vh;
        width: 100vh;
        align-items: center;
    }
    .left {
        flex: 2;
        align-items: center;
        text-align: center;
        width: 100vh;
    }
    #email, #password {
        width: 50%;
        padding: 12px 20px;
        border: none;
        border-bottom: 2px solid white;
        color: white;
    }
    .right {
        flex: 1;
        text-align: center;
        background-image: url("https://images.unsplash.com/photo-1581726690015-c9861fa5057f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODh8fHRlYWNoZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60");
        border-radius: 50px;
        height: 90vh;
        width: 80vh;
        background-position: center;
        top: 20px;
    }
    .right * {
        margin: 20px;
        top: 30px;
        text-align: center;
        color: white;  
    }
    h1, h2 {
        color: white;        
    }
    #loginBtn {
        position: "absolute";
        text-align: center;
        border-radius: 10px;
        background-color: #A3B8B6;
        color: white;
    }
    #gotoBtn {
        border-radius: 10px;
        border: 2px solid white;
    }
    #pinkBox {
        background-color: #D6C8CA;
        padding: 5px;
    }

</style>

