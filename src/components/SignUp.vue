<template>
    <div>
        <form @submit.prevent="pressed">
            <input type = "email" v-model="email" placeholder="email">
            <br>
            <input type="password" v-model="password" placeholder="password">
            <br>
            <button type="submit" v-on:click="pressed">Register</button>
        </form>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js'
import "firebase/auth"
export default {
    data() {
        return {
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            picture: null,
        };
    },
    components: {
    },
    methods: {
        pressed: function(e) {
            firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    firebaseApp.firestore().collection('users').doc(user.user.uid).set({
                        firstName: this.firstname,
                        lastName: this.lastname
                    });
                    console.log("User registered")
                    this.$router.replace({ name:'home' })
                },
                err => {
                    alert(err.message);
                });
                e.preventDefault();
        }
    }
}
</script>

<style scoped>

</style>