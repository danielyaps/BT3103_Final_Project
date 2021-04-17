<template>
  <div id="page">
    <Header></Header>
    <MenuBarTutors v-bind:uid="uid"></MenuBarTutors>
    <p
      style="
        font-size: 50px;
        text-align: center;
        color: #388087;
        font-weight: bold;
      "
    >
      TUITION CONNECT
    </p>
    <div class="float-container">
      <div id="left">
        <div id="classImg" v-on:click="goApps()">
          <p class="imgTxt">View Student Applications</p>
        </div>
      </div>

      <div id="right">
        <div id="scheduleContainer" v-on:click="goSchedule()">
          <p class="imgTxtS">View Your Schedule</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBarTutors from "./MenuBarTutors.vue";
import Header from "./Header.vue";

export default {
  data() {
    return {
      uid: this.$route.params.uid,
    };
  },
  components: {
    MenuBarTutors,
    Header,
  },
  methods: {
    goApps: function () {
      this.$router.push({
        name: "studentApp",
        params: { uid: this.uid },
        props: true,
      });
    },

    goSchedule: function () {
      this.$router.push({ name: "schedule", params: { uid: this.uid } });
    },
  },
};
</script>

<style scoped>
#classImg {
  background-image: url(https://lirp-cdn.multiscreensite.com/95bbc5a6/dms3rep/multi/opt/photo-1509062522246-3755977927d7-18db30ee-480w.jpg);
  opacity: 0.8;
  width: 450px;
  height: 450px;
  border-radius: 15px;
  margin:0 auto
}

#left {
  float: left;
  position: relative;
  top: 50px;
  width: 50%;
  padding: 20px;
  height: 100%;
}
#scheduleContainer {
  background-image: url(https://image.freepik.com/free-vector/hand-with-pen-mark-calendar_1325-126.jpg);
  opacity: 0.7;

  width: 450px;
  height: 450px;
  border-radius: 15px;
  margin:0 auto
}

#right {
  position: relative;
  float: right;
  top: 50px;
  width: 50%;
  padding: 20px;
  height: 100%;
}

.float-container {
  border: 3px solid #fff;
  padding: 10px;
  background-color: #ffffff;
  overflow: hidden;
  height: 100vh;
}

.imgTxt {
  width: 300px;
  left: 70px;
  font-size: 60px;
  position: relative;
  top: 120px;
  text-align: center;
  color: white;
}
.imgTxtS {
  width: 300px;
  left: 80px;
  font-size: 60px;
  position: relative;
  top: 170px;
  text-align: center;
  color: black;
}
</style>
