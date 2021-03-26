<template>
<div id = "whole" class="float-container">
    <nav>
        <ul id="navUL">
            <li id="navLI"><router-link to="/" exact>Home</router-link></li>
            <li id="navLI"><router-link to="/Login" exact>Login</router-link></li>
        </ul>
    </nav>
    <div class="float-child left">   
        <h1>Welcome Back!</h1>
        <form @submit.prevent="pressed">
            <input type="email" id="email" placeholder="Email" v-model="email">
            <br><br>
            <input type="password" id="password" placeholder="Password" v-model="password">
        <br>
        <br> 
        <button type="submit">Login</button>
         </form>
    </div>

    <div class="float-child right">   
        <div>
            <h2>New Here?</h2>
            <p>Whether you’re a student looking for some help or a teacher who’s looking to share your passion, join our team today!</p>
            <button>Sign Up Now!</button>
        </div>
    </div>
</div>
</template>

<script>
import firebaseApp from '../firebase.js'

export default {
    components: {

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
            
        }
    }
}

</script>

<style>
    .float-container {
        border: 3px solid #fff;
        padding: 10px;
        background-color: #E0E0E0;
        overflow:hidden;
        height: 100vh;
    }
    .float-child.right {
        width: 38%;
        float: right;
        padding: 10px;
        text-align: center;
        vertical-align: middle;
        height:100%; 
        background-image: url(https://images.unsplash.com/photo-1532619187608-e5375cab36aa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHR1dG9yc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);
        background-size: 100% 100%;
        opacity: 0.5;

    }  
    .float-child.right > div {
        height: 200px;
        color: white;
        padding: 10px;
        background-color: rgba(10, 6, 0, 0.7);
    }
    .float-child.left {
        width: 55%;
        float: left;
        padding: 10px;
        margin-right: 20px;
        text-align: center;
        vertical-align: middle;
        height:100%;
    } 
    button {
        vertical-align: middle;
        horizontal-align: middle;
        align: center;
    }

</style>