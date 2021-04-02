<template>
  <div id="whole" class="float-container">
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
    <div id="title">Frequently Asked Questions</div>
    <div id="questions">
      <h3 id="q">How does this platform work?</h3>
      <p id="a">
        Classy Tutors serves as a platform for Tutors and Students to connect
        easily, allowing for easy communication between both parties. Students
        can scroll through the profiles of Tutors and find the best suited tutor
        for them. Our site also allows students to review the tutors, allowing
        future students to find tutors better suited for them.
      </p>
      <h3 id="q">Do we make payment for lessons through this site?</h3>
      <p id="a">
        At the moment, Classy Tutors are not accepting any payment through this
        site. In the future, we are looking into offering more functions for our
        users.
      </p>
    </div>

    <div class="float-child right">
      <div>
        <p>Other burning questions unanswered?</p>
        <router-link id="contactlink" to="/ContactUs" exact
          >Click here to contact us now!</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>

.float-container {
  border: 3px solid #fff;
  padding: 10px;
  background-color: #e0e0e0;
  overflow: hidden;
  height: 100vh;
}
.float-child.right {
  width: 35%;
  float: right;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
  height: 100%;
}

#questions {
  width: 55%;
  float: left;
  padding: 10px;
  margin-right: 20px;
  text-align: center;
  vertical-align: middle;
  height: 100%;
  background-color:grey;
  border-radius: 25px;

}

#contactlink:hover {
  color: lightskyblue;
}

#contactlink {
  text-decoration: none;
  color: white;
}
</style>