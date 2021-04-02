<template>
<div>
    <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>
    <a href="#">My Profile</a>
    <a href="#">Chats</a>
    <a href="#">Schedule</a>
    <a href="#">Leave A Review</a>
    </div>
    <span style="font-size:30px; cursor:pointer; color: white" v-on:click="openNav">&#9776; Menu</span>
</div>
</template>

<script>
export default {
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

<style>
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
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