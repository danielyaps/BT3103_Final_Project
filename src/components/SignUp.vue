<template>
    <div class = "signup"> 
        <form @submit.prevent="pressed">
            <br><br>
            <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage">
            </div>
                <input type="file" accept="image/*" src="previewImage" v-on:change="selectImage">
                <br>
                <br>
                <input type = "text" id="user" v-model="username" placeholder="User Name">
                <br>
                <br>
                <input type = "text" id="fname" v-model="firstname" placeholder="First Name"> <input type = "text" id="lname" v-model="lastname" placeholder="Last Name">
                <br>
                <br>
                <input type = "email" id="em" v-model="email" placeholder="Email">
                <br>
                <br>
                <input type="password" id="pw" v-model="password" placeholder="Password">
                <br>
                <br>
                <input type="radio" id="one" value="Student" v-model="type">
                <label for="one">Student</label>
                <input type="radio" id="two" value="Teacher" v-model="type">
                <label for="two">Teacher</label>
                <br>
                <br>
                <button type="submit" v-on:click="register">Create Account</button>
        </form>
    </div>
</template>



<script>
import firebaseApp from '../firebase.js'
export default {
    data() {
        return {
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            type: "",
            uid: "",
            previewImage: "https://firebasestorage.googleapis.com/v0/b/bt3103finalproject.appspot.com/o/images%2FScreenshot%202021-03-27%20at%201.38.35%20PM.png?alt=media&token=ae751660-76cc-47c5-a305-543d2f06a1ae",
        };
    },
    components: {
    },
    methods: {
        register: function(e) {
            firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((userCredential) => {
                    var user = userCredential.user;
                    this.uid = user.uid;
                    firebaseApp.firestore().collection('users').doc(user.uid).set({
                        username: this.username,
                        firstName: this.firstname,
                        lastName: this.lastname,
                        email: this.email,
                    });
                    this.uploadMetadata(this.previewImage);
                    this.$router.replace({name:'home'});
                },
                err => {
                    alert(err.message);
                });
                e.preventDefault();
        },
        selectImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                };
        },
        uploadMetadata(message) {
            var storageRef = firebaseApp.storage().ref();
            storageRef.child('images/' + this.uid).putString(message, 'data_url');
        }
    }
}
</script>

<style scoped>
.signup {
    width: 100vw;
    height: 100vh;
    background-color: #E8E8E8;
    text-align: center;
    color: #888888;
    font-family: Roboto;
}
.imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}
input[type=text] {
    background-color: #E8E8E8;
    border: none;
    border-bottom: 2px solid #888888;
    height: 20px;
    font-family: Roboto;
    width:145px;
}
input#user {
    width: 300px;
} 
input#em{
    background-color: #E8E8E8;
    width: 300px;
    border: none;
    border-bottom: 2px solid #888888;
    height: 20px;
    font-family: Roboto;
} 
input#pw{
    background-color: #E8E8E8;
    width: 300px;
    border: none;
    border-bottom: 2px solid #888888;    
    height: 20px;
    color: #888888;
    font-family: Roboto;
} 
input[type=radio] {
    text-align: center;
    margin-left:10px;
}
button{
    background-color: #BEBEBE;
    color: white;
    border-radius: 4px;
    width: 130px;
    height: 30px;
    border: none;
    font-size: 14px;
    font-family: Roboto;
}


</style>