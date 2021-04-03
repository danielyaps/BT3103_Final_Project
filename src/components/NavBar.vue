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

<style scoped>
#navUL {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

#navLI {
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 10px;
  border: none;
  text-decoration: none;
  margin: 10px;
  font-family: Roboto;
  border-right: 2px solid #888888;
}


</style>