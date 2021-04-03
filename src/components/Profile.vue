<template>
    <div class = "signup"> 
        <br>
        <br>
        <Header></Header>
        <br>
        <br>
        <form @submit.prevent="pressed">
            <div class="image-upload">
                <br>
                <label for="file-input">
                    <img :src="this.image">
                </label>
                <input id="file-input" type="file" accept="image/*" v-on:change="selectImage">
                <br>
            </div>
            <br>
            <div v-if="this.type === 'Student'">
                <input type="text" id="user" v-model="username" placeholder="User Name" required>
                <br>
                <input type="text" id="fname" v-model="firstname" placeholder="First Name" required> 
                &nbsp;
                <input type = "text" id="lname" v-model="lastname" placeholder="Last Name" required>
                <br>
                <input type="email" id="email" v-model="email" placeholder="Email" required>
                <br>
                <input type="password" id="pw" v-model="password" placeholder="Password" required>
                <br>
                <input type="text" id="level" v-model="level" placeholder="Level/School" required>
                <br>
                <input type="text" id="subjects" v-model="subjects" placeholder="Subjects Interested" required>
                <br>
            </div>
            <div v-else-if="this.type === 'Teacher'">
                <input type="text" id="user" v-model="username" placeholder="User Name">
                <br>
                <input type="text" id="fname" v-model="firstname" placeholder="First Name"> <input type = "text" id="lname" v-model="lastname" placeholder="Last Name">
                <br>
                <input type="email" id="email" v-model="email" placeholder="Email">
                <br>
                <input type="password" id="pw" v-model="password" placeholder="Password">
                <br>
                <input type="text" id="levels" v-model="levels" placeholder="Level">
                <br>
                <input type="text" id="subjects" v-model="subjects" placeholder="Subjects Offered">
                <br>
                <input type="text" id="rates" v-model="rates" placeholder="Rates per Hour (SGD)">
                <br>
                <br>
                <textarea v-model="desc" placeholder="Description" cols="37" rows="7"></textarea>
                <br>
            </div>
            <br>
            <br>
            <button type="submit" v-on:click="register">Create Account</button>
        </form>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>



<script>
import firebaseApp from '../firebase.js'
import Header from './Header.vue'
export default {
    data() {
        return {
            uid: this.$route.params.uID,
            type: this.$route.params.type,
            details: [],
            image: "",
            change: false,
        };
    },
    components: {
        'Header': Header
    },
    methods: {
        fetchItems:function(){
            firebaseApp.firestore().collection('users').doc(this.uid).get().then((doc)=>{
                this.details.push(doc.data())
            });
            console.log(this.details);
            var storageRef = firebaseApp.storage().ref();
            storageRef.child('images/' + this.uid).getDownloadURL().then((url) => {
                this.image = url;
            })
        },

        selectImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.image = e.target.result;
                    this.change = true;
                };
        },

        uploadMetadata(message) {
            var storageRef = firebaseApp.storage().ref();
            storageRef.child('images/' + this.uid).putString(message, 'data_url');
        }
    },
    created(){
      this.fetchItems();
    }
}
</script>

<style scoped>
</style>