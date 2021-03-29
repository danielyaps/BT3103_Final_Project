<template>
<div>
<nav>
    <ul id="navUL">
        <li id="navLI"><router-link to="/" exact>Home</router-link></li>
        <li id="navLI"><router-link to="/Login" exact>Login</router-link></li>
        <li id="navLI"><router-link to="/SignUp" exact>SignUp</router-link></li>
        <li id="navLI"><router-link to="/ContactUs" exact>Contact Us</router-link></li>
        <li id="navLI"><router-link to="/FAQ" exact>FAQ</router-link></li>
    </ul>
</nav>
</div>
</template>

<script>
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
</style>