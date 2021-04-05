<template>
  <div id="whole" >
    <Header></Header>
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
      id="chatmsg"
        placeholder="Message"
        v-model.lazy.trim="inputmsg"
        name="inputmsg"
        rows="3"
        cols="100"
      ></textarea>
      <button id="submitb" type="submit">Send</button>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue"
export default {
  components:{
      Header
  },

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

#chatmsg{
    background-color: white;
}

#submitb{
    background-color: dimgrey;
    color: white;
}

</style>