<template>
  <div id="whole" >
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
    <div id="title">Chats</div>
    <div id="chatuser">
      <img
        id="userimg"
        src="https://netstorage-kami.akamaized.net/images/e63acbfea15ff5a2.jpg?imwidth=1200&impolicy=default-amp"
      />
      Mr Asher Goh
    </div>

    <div id="chatbox"></div>

    <div id="inputmsg">
      <textarea
        placeholder="Message"
        v-model.lazy.trim="inputmsg"
        name="inputmsg"
        rows="3"
        cols="100"
      ></textarea>
      <button type="submit">Send</button>
    </div>
  </div>
</template>

<script>

export default {
  

  data() {
    return {
      inputmsg: "",
    };
  },
};
</script>

<style>

#whole{
    border: 3px solid #fff;
        padding: 10px;
        background-color: #E0E0E0;
        overflow:hidden;
        height: 100vh;
}
#title {
  font-weight: 900;
  font-size: 70px;
  color: dimgrey;
  position: relative;
  left: 100px;
}

#userimg {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}

#chatuser {
  font-size: 30px;
  font-weight: bold;
  color: rgb(70, 69, 69);
}

#chatbox {
  height: 500px;
  border-radius: 35px;
  background-color: #555;
}

</style>