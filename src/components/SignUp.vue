<template>
    <div>
        <form @submit.prevent="pressed">
            <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage">
            </div>
            <input type="file" accept="image/jpeg" v-on:change="selectImage">
            <br>
            <br>
            <input type = "text" v-model="username" placeholder="User Name">
            <br>
            <input type = "text" v-model="firstname" placeholder="First Name"> <input type = "text" v-model="lastname" placeholder="Last Name">
            <br>
            <input type = "email" v-model="email" placeholder="Email">
            <br>
            <input type="password" v-model="password" placeholder="Password">
            <br>
            <button type="submit" v-on:click="register">Register</button>
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
            uid: "",
            previewImage: null,
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
                    this.$router.replace({ name:'home' });
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
        uploadMetadata(file) {
            var storageRef = firebaseApp.storage().ref();
            var metadata = {
                contentType: 'image/jpeg',
            };
            var uploadTask = storageRef.child('images/' + this.uid).put(file, metadata);
            uploadTask.on(firebaseApp.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebaseApp.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebaseApp.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, 
            (error) => {
                alert(error.message);
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                });
            }
            )}
    }
}
</script>

<style scoped>
.imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}
</style>