<template>
    <div class = "signup"> 
        <br>
        <br>
        "INSERT NEW HEADER FOR POST LOGIN"
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
                Username: <input type="text" id="user" v-model="updatedDetails.username" :placeholder="this.details.username">
                <br>
                Name: <input type="text" id="fname" v-model="updatedDetails.firstname" :placeholder="this.details.firstName"> 
                &nbsp;
                <input type = "text" id="lname" v-model="updatedDetails.lastname" :placeholder="this.details.lastName">
                <br>
                Email: <input type="email" id="email" v-model="updatedDetails.email" :placeholder="this.details.email">
                <br>
                Current Password: <input type="password" id="cpw" v-model="initialPassword" placeholder="Current Password" required>
                <br>
                New Password: <input type="password" id="npw" v-model="newPassword" placeholder="New Password">
                <br>
                Level/School: <input type="text" id="level" v-model="updatedDetails.level" :placeholder="this.details.level">
                <br>
                Subjects Interested: <input type="text" id="subjects" v-model="updatedDetails.subjects" :placeholder="this.details.subjects">
                <br>
            </div>
            <div v-else-if="this.type === 'Teacher'">
                Username: <input type="text" id="user" v-model="updatedDetails.username" :placeholder="this.details.username">
                <br>
                Name: <input type="text" id="fname" v-model="updatedDetails.firstname" :placeholder="this.details.firstName"> 
                &nbsp;
                <input type = "text" id="lname" v-model="updatedDetails.lastname" :placeholder="this.details.lastName">
                <br>
                Email: <input type="email" id="email" v-model="updatedDetails.email" :placeholder="this.details.email">
                <br>
                Password: <input type="password" id="pw" v-model="password" placeholder="Password" required>
                <br>
                Level/School: <input type="text" id="level" v-model="updatedDetails.level" :placeholder="this.details.level">
                <br>
                Subjects Offered: <input type="text" id="subjects" v-model="updatedDetails.subjects" :placeholder="this.details.subjects">
                <br>
                Rates per Hour<input type="text" id="rates" v-model="updatedDetails.rates" :placeholder="this.details.rates">
                <br>
                <br>
                Description <textarea v-model="desc" :placeholder="this.description" cols="37" rows="7"></textarea>
                <br>
            </div>
            <br>
            <br>
            <button type="submit" v-on:click="save">Save</button>
        </form>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>



<script>
import firebaseApp from '../firebase.js'
export default {
    data() {
        return {
            uid: this.$route.params.uid,
            type: this.$route.params.type,
            image: null,
            changeImage: false,
            initialPassword:"",
            newPassword:"",
            details: null,
            updatedDetails: {},
        };
    },

    methods: {
        fetchItems:function(){
            firebaseApp.firestore().collection('users').doc(this.uid).get().then((doc)=>{
                this.details = doc.data();
            });
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

        updateImage(message) {
            var storageRef = firebaseApp.storage().ref();
            storageRef.child('images/' + this.uid).delete();
            storageRef.child('images/' + this.uid).putString(message, 'data_url');
        },

        save:function() {
            firebaseApp.auth().signInWithEmailAndPassword(this.details.email, this.initialPassword)
            .then((userCredential) => {
                var user = userCredential.user;
                if (Object.keys(this.updatedDetails).length > 0) {
                    Object.entries(this.updatedDetails).forEach(([key,value]) => {
                        this.details[key] = value;
                    })
                }

                firebaseApp.firestore().collection("users").doc(this.uid).set(this.details)
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
                if (this.newPassword != "") {
                    user.updatePassword(this.newPassword).then(function() {
                        console.log("Successful!")
                    }).catch(function(error) {
                        alert(error);
                    });
                }
                alert("Successfully saved!");
                var x = 'home'.concat(this.type);
                this.$router.push({name: x, params:{uid : this.uid}});

            }).catch(function() {
                alert("Password is invalid!");
            });
        },
    },

    created(){
      this.fetchItems();
    }
}

</script>

<style scoped>

.signup {
    position: fixed;
    overflow-y:scroll;
    background-color: #E8E8E8;
    text-align: center;
    color: #888888;
    font-family: Roboto;
    font-size: 14px;
    width: 100vw;
    height: 100vh;
}

Header {
    color: black;
}

.image-upload>input {
    display: none;
}

img {
    width: 250px;
    height: 250px;
}

input[type=radio] {
    text-align: center;
    left: 10px;
    font-size:14px;
}

input[type=text],input[type=password] {
    background-color: #E8E8E8;
    border: none;
    border-bottom: 2px solid #888888;
    padding:18px;
    height:32px;
    font-family: Roboto;
    font-size:14px;
    width:300px;
    left: 0px;
}

#email {
    background-color: #E8E8E8;
    border: none;
    border-bottom: 2px solid #888888;
    padding:18px;
    height:32px;
    font-family: Roboto;
    font-size:14px;
    width:300px;
    left: 0px;
}

#fname, #lname {
    background-color: #E8E8E8;
    border: none;
    border-bottom: 2px solid #888888;
    padding:18px;
    height:32px;
    font-family: Roboto;
    font-size:14px;
    width:145px;
}

textarea {
    background-color: white;
    font-size:14px;
    font-family: Roboto;
}

button{
    background-color: #60C1EA;
    color: white;
    border-radius: 4px;
    width: 130px;
    height: 30px;
    border: none;
    font-size: 14px;
    font-family: Roboto;
}
</style>