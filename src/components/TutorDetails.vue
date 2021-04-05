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
                  lazy-src="https://images.unsplash.com/photo-1544168190-79c17527004f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHRlYWNoZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                  position="center"
                ></v-img>
            <v-btn block>Chat</v-btn>
            <v-btn v-on:click="applyBtn(this.tutor_id)" block>Apply Now!</v-btn>
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

export default {
    components: {
      'Header': Header
    },
    data () {
      return {
        name: "",
        reviews: [],
<<<<<<< HEAD
      }
    },
    methods: {
      applyBtn: function() {
        this.$router.push({path:'/applynow'})
=======
        tutor_id: "",
        subjects: "",
        level: "",
        rate: "",
        datapacket: [],
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
        
      },
      applyBtn: function(tutor_id) {
        this.$router.push({path:'/applynow', params: {tutorid: tutor_id}, props: true})
>>>>>>> angele
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