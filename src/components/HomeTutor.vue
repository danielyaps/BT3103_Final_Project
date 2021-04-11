<template>
<div>
    <Header></Header>
    <MenuBarTutors v-bind:uid="uid"></MenuBarTutors>
    <p style="font-size: 50px; text-align: center; color: #388087; font-weight: bold">CLASSY AND FABULOUS TUTORS</p>
    <div id="classImg" v-on:click="goApps()">
        
        <p class="imgTxt">View Student Applications</p>
    </div>
    <div id="scheduleContainer">
        <p class="imgTxtS">View Your Schedule</p>
    </div>
</div>
</template>

<script>
import MenuBarTutors from './MenuBarTutors.vue'
import Header from './Header.vue'

export default {
    data() {
        return {
            uid: this.$route.params.uid,
        }
    },
    components: {
        MenuBarTutors,
        Header
    },
    methods: {
        goApps: function() {
            this.$router.push({name:'studentApp', params: { uid: this.uid }, props: true})

        }
    }
}
</script>

<style scoped>

#classImg {
    background-image: url(https://lirp-cdn.multiscreensite.com/95bbc5a6/dms3rep/multi/opt/photo-1509062522246-3755977927d7-18db30ee-480w.jpg);
    opacity: 0.8;
    position: absolute;
    width: 400px;
    height: 500px;
    left: 300px;
    top: 250px;
    border-radius: 15px;
}

.imgTxt {
    width: 300px;
    left: 50px;
    font-size: 60px;
    position: relative;
    top: 100px;
    text-align: center;
    color: white;
}

.imgTxtS {
    width: 300px;
    left: 50px;
    font-size: 60px;
    position: relative;
    top: 100px;
    text-align: center;
    color: black;
}

#scheduleContainer {
    background-image: url(../assets/schedule.jpg);
    opacity: 0.7;
    position: absolute;
    width: 400px;
    height: 500px;
    left: 800px;
    top: 250px;
    border-radius: 15px;
}

</style>
