<template>
  <v-app id="inspire">
    <Navbar />

    <v-content>
      <router-view />
    </v-content>

    <v-footer color="primary" app>
      <span class="white--text">&copy; 2020 Eskere</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
});
</script>
