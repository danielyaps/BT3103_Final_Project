<template>
<div>
<Header></Header>
<v-container grid-list-md text-md-center fluid fill-height>
    <v-col md="4">
          <v-card dark tile flat color="error">
          <h2>{{name}}</h2>
           <v-img
                  height="600"
                  width="500"
                  v-bind:src="imgSrc"
                  position="center"
                ></v-img>
            <v-btn v-on:click="chatBtn()" block>Chat</v-btn>
            <v-btn v-on:click="applyBtn()" block>Apply Now!</v-btn>
          </v-card>
    </v-col>
    <v-col md="8">
          <v-card dark tile flat color="pink darken-4">
            <v-card-text>Subjects Offered: {{subjects}} </v-card-text><v-divider></v-divider> 
            <v-card-text>Level: {{level}} </v-card-text><v-divider></v-divider>
            <v-card-text>Rate: S${{rate}}/hr </v-card-text>
          </v-card>
          
          <v-card dark tile flat color="pink darken-4">
            <v-card-text>Reviews:</v-card-text>
            <v-flex v-for="review in reviews" :key="review.num">
              <v-card color="gray" dark width="150px">
                <v-card-text>{{ review.num }}</v-card-text>
              </v-card>
            </v-flex>
          </v-card>
    </v-col>
</v-container>
</div>
</template>

<script>
import Header from './Header.vue'
import firebaseApp from '../firebase.js'

export default {
    components: {
      'Header': Header
    },
    data () {
      return {
        uid: this.$route.params.uid,
        name: "",
        reviews: [],
        tutor_id: "",
        subjects: "",
        level: "",
        rate: "",
        datapacket: [],
        imgSrc:"",
      }
    },
    methods: {
      fetchItems: function() {
        var id = this.$route.params.tutorid;
        this.tutor_id = id
        console.log(id)
        firebaseApp.firestore().collection('users').doc(id).get().then(snapshot => {
          this.datapacket = snapshot.data()
          this.name = this.datapacket.firstName + " " + this.datapacket.lastName
          this.subjects = this.datapacket.subjects
          this.level = this.datapacket.level
          this.rate = this.datapacket.rates  
        });
        firebaseApp.storage().ref().child('images/' + id).getDownloadURL()
                            .then((url) => {
                                this.imgSrc = url; 
                            })
      },
      applyBtn: function() {
        console.log(this.tutor_id)
        this.$router.push({name:'applyNow', params: {tutorid: this.tutor_id, uid : this.uid}, props: true})
      },
      chatBtn: function() {
        this.$router.push({name: 'chat', params: {uid: this.uid, otherId: this.tutor_id}, props: true})
      }
    },
    props: {
      tutorid: {
        type: String
      }
    },
    created () {
      this.fetchItems()    
    }
}
</script>

<style>
</style>
