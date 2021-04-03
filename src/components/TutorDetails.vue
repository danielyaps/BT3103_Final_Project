<template>
<div>
<Header></Header>
<v-container grid-list-md text-md-center fluid fill-height>
    <v-col md="4">
          <v-card dark tile flat color="error">
            <v-img
                  height="600"
                  width="500"
                  lazy-src="https://images.unsplash.com/photo-1544168190-79c17527004f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHRlYWNoZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                  position="center"
                ></v-img>
            <v-btn block>Chat</v-btn>
            <v-btn block>Apply Now!</v-btn>
          </v-card>
    </v-col>
    <v-col md="8">
          <v-card dark tile flat color="pink darken-4">
            <v-card-text>Subjects Offered:  Math/Science</v-card-text><v-divider></v-divider>
            <v-card-text>Level:</v-card-text><v-divider></v-divider>
            <v-card-text>Rate:</v-card-text>
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
        reviews: [],
      }
    },
}
</script>

<style>
</style>