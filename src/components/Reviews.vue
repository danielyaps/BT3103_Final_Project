<template>
<div class="page">
    <MenuBarTutors v-bind:uid="uid"></MenuBarTutors>
    <div style="position: absolute; left: 70px; top: 70px">
        <h2 style="font-size: 40px; color: #388087; font-family: Playfair Display">Reviews</h2>
        <p style="text-align: right; font-size: 30px; color: #FF9900; font-weight: bold; font-family: roboto"> {{this.averageStars()}} OF 5.0 STARS </p>
        <ul id="box">
            <li v-for="review in reviews" v-bind:key=review.id>
                    <div class="review">
                        <img v-bind:src="review.image" style="width: 150px; height: 150px; position: relative; float: left; left: 20px">
                        <span style="position: relative; border-style: solid; height: 150px; width: 900px; left: 50px; padding: 20px">{{review.review}} <br>
                            <p style="position: absolute; bottom: 10px; right: 10px">- {{review.studentUserName}} </p>
                        </span>
                        
                    </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import MenuBarTutors from './MenuBarTutors.vue'
import firebaseApp from '../firebase.js'

export default {
    components: {
        MenuBarTutors
    },

    data() {
        return {
            uid: this.$route.params.uid,
            studentId: "",
            reviews: [],
            description: "",
            photo: null,
            numStars: 0,
            numReviews: 0
        }
    },

    methods: {
        fetchItems: function() {
            firebaseApp.firestore().collection('users').doc(this.uid).collection('reviews').onSnapshot((querySnapShot) => {
                let review={}
                querySnapShot.forEach(doc => {
                    review = doc.data()
                    this.reviews.push(review)
                    this.numStars += review.stars
                    this.numReviews += 1         
                })
                console.log(this.reviews)
            })
        },

        averageStars: function() {
            var average=this.numStars/this.numReviews
            return average.toFixed(1)
        }
    },

    created() {
        this.fetchItems();
    }
}

</script>

<style scoped>
.page {
    background-color: white;
    overflow-y: scroll;
    position: fixed;
    width: 100vw;
    height: 100vh;
}

#box {
    list-style-type: none;
}

.review{
    height: 200px;
    width: 1200px;
    background-color: #388087;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    margin-top: 50px;
    border-radius: 15px;
    font-size: 20px;
}
</style>