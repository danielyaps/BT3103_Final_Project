<template>
<div>
    <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>
    <router-link :to="{ name: 'profile', params: { uid: uid, type: 'Student' }}">My Profile</router-link>
    <router-link :to="{ name: 'viewChats', params: {uid: uid, type: 'Student' }}">Chats</router-link>
    </div>
    <span style="font-size:30px; cursor:pointer; color: #388087" v-on:click="openNav">&#9776; Menu</span>
</div>
</template>

<script>
export default {
    props:{
        uid:{
            type:String
        },
    },

    methods: {
        openNav: function() {
            document.getElementById("mySidenav").style.width = "250px";
        },
        closeNav: function() {
            document.getElementById("mySidenav").style.width = "0";
        }
    }
}
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #388087;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover{
  background-color:#6FB3B8 ;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
</style>