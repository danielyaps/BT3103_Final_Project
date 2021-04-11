<template>
<div>
    <Header></Header>
    <br>    
    <H1>Student Applications</H1>
    <v-card color="#6FB3B8" elevation="16" max-width="1200" class="mx-auto">
        <v-virtual-scroll
            :items="studentapps"
            :item-height="100"
            height="500"
            
          >
            <template v-slot="{ item }">
              <v-list-item>
                <v-list-item-avatar size="62">
                    <v-img
                    :src="item.stuImg"
                    ></v-img>
                </v-list-item-avatar>
                
                <v-list-item-content class="listContent">
                  <v-list-item-title > {{ item.stuName }}</v-list-item-title>
                  <v-list-item-subtitle class="leftDetails">Subject: {{ item.subjectA }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="leftDetails">Day: {{ item.dayA }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="rightDetails">Rate: {{ item.rateA }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="rightDetails">Location: {{ item.locationA }}</v-list-item-subtitle>
                </v-list-item-content>
                
                <v-list-item-action class = "actions">
                    <v-btn v-bind:stuid="item.id" v-on:click="confirmApp($event)">Confirm</v-btn>
                    <br>
                    <v-btn v-bind:stuid="item.id" v-on:click="goChat($event)">Chat</v-btn>
                </v-list-item-action>
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
        stuid: "",
        studentapps: [],
        currApp: [],

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
                    app.stuName = post.firstName + " " + post.lastName
                });
                firebaseApp.storage().ref().child('images/' + app.id).getDownloadURL().then((url) => {
                    app.stuImg = url;
                })
                console.log(this.studentapps);
                this.studentapps.push(app);
            });
        });
      },
      
      goChat: function(event) {
        this.stuid = event.target.getAttribute("id");
        this.$router.push({name:'chat', params: { uid: this.uid, otherid: this.stuid }, props: true})
      },

      confirmApp: function(event) {
        this.stuid = event.target.getAttribute("stuid");
        let docref = firebaseApp
                    .firestore()
                    .collection("users")
                    .doc(this.uid);
        
        let appDetails = [];
        for (let i=0; i < Object.values(this.studentapps).length; i++) {
           if (this.studentapps[i].id == this.stuid) {
               appDetails = this.studentapps[i];
           }
        }
        docref.collection("applicationsConfirmed")
          .doc(this.stuid)
          .set(appDetails);

        docref.collection('applicationsNew').doc(this.stuid)
            .delete().then(() => {location.reload()});
        
        alert("Application Confirmed");
      }
  },
  
  created() {
    this.fetchItems();
  },
}

</script>

<style scoped>
    .listContent {
        padding: 20px;
    }
    
    .actions {
        position: absolute;
        right: 10px;
    }

    .mx-auto {
        margin-left: auto;
        margin-right: auto;
    }



</style>
