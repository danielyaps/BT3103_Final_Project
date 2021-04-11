<template>
<div>
    <Header></Header>
    <br>    
    <H1>Student Applications</H1>
    <v-card color="#6FB3B8">
        <v-virtual-scroll
            :items="studentapps"
            :item-height="100"
            height="500"
          >
            <template v-slot="{ item }">
              <v-list-item>
                <v-list-item-avatar>
                    <v-img
                    :alt="`${item.title} avatar`"
                    :src="item.avatar"
                    ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title id="stuName"> {{item.student.firstName}}</v-list-item-title>
                  <v-list-item-subtitle >Subject: {{ item.subjectA }}</v-list-item-subtitle>
                  <v-list-item-subtitle >Day: {{ item.dayA }}</v-list-item-subtitle>
                  <v-list-item-subtitle >Rate: {{ item.rateA }}</v-list-item-subtitle>
                  <v-list-item-subtitle >Location: {{ item.locationA }}</v-list-item-subtitle>

                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
            </template>
          </v-virtual-scroll>
    </v-card>
</div>
</template>

<script>
import Header from "./Header.vue";
import firebaseApp from "../firebase.js";

export default {
  components: {
    Header: Header,
  },
  data() {
    return {
        uid: this.$route.params.uid,
        studentapps: [],
    }
  },
  methods: {
      fetchItems: function () {
        firebaseApp.firestore().collection('users').doc(this.uid).collection('applicationsNew').get().then(snapshot => {
            let app={}
            snapshot.docs.forEach(doc => {
                app=doc.data();
                app.id=doc.id;
                let post = {};
                firebaseApp.firestore().collection('users').doc(app.id).get()
                .then(snapshot => {
                    post = snapshot.data()
                });
                app.student = post;
                this.studentapps.push(app);
                console.log(post)
            });
        });
      }
  },
  
  created() {
    this.fetchItems();
  },
}

</script>

<style>
</style>
