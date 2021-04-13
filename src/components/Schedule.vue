<template>
  <v-app>
    <v-main>
        <Header></Header>
        <MenuBarTutors></MenuBarTutors>
      <Calendar></Calendar>
      
    </v-main>
  </v-app>
</template>

<script>
import Calendar from './Calendar.vue';
import Header from './Header.vue'
import MenuBarTutors from './MenuBarTutors.vue';

export default {
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