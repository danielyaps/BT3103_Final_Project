<template>
  <v-app>
    <v-main>
        <Header></Header>
        <MenuBarTutors v-bind:uid="uid"></MenuBarTutors>
      <Calendar></Calendar>
      
    </v-main>
  </v-app>
</template>

<script>
import Calendar from './Calendar.vue';
import Header from './Header.vue'
import MenuBarTutors from './MenuBarTutors.vue';

export default {
  name: 'App',

  components: {
    Calendar,Header,
    MenuBarTutors
  },

  data() {
        return {
            uid: this.$route.params.uid,
        }
    },
};
</script>