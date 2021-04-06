<template>
  <v-app>
    <v-content>
        <Header></Header>
      <Calendar></Calendar>
    </v-content>
  </v-app>
</template>

<script>
import Calendar from './Calendar.vue';
import Header from './Header.vue'

export default {
  name: 'App',

  components: {
    Calendar,Header
  },

  data: () => ({
    //
  }),
};
</script>