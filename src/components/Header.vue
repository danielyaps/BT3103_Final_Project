<template>
<div>
<nav>
    <ul id="navUL">
        <li id="navLI"><router-link class="routerlink" to="/" exact>Home</router-link></li>
        <li id="navLI"><router-link class="routerlink" to="/ContactUs" exact>Contact Us</router-link></li>
        <li id="navLI"><router-link class="routerlink" to="/FAQ" exact>FAQ</router-link></li>
        <li id="navLI"><router-link class="routerlink" to="/TutorDetails" exact>Tutor Details</router-link></li>
        <button id="logInBtn" v-on:click="goLogin()">Log In?</button>
    </ul> 
    
</nav>

</div>
</template>

<script>
export default {
    components: {

    },
    methods: {
        goLogin: function() {
            this.$router.push({path:'/login'})
        }
    }
}
</script>

<style>
    #navUL {
        display: flex; 
        list-style-type: none;
        padding: 3px;
        display: flex;
        justify-content: center;

    }
    #navLI {
        text-align: center;
        margin: 0 20px 3px 0;
        color: white;
    }
    #logInBtn {
        position: absolute;
        right: 10px;
        top: 0px;
        text-align: center;
        color: white;
        font-size: 14px;
        border-radius: 5px;
    }
    .routerlink {
        display: block;
        color: white;
    }
        
</style>


