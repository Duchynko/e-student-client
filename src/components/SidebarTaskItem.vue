<template>
  <v-list-item>
    <v-list-item-avatar class="mr-2" tile>
      <p class="my-auto body-2 grey--text" v-html="item.type"></p>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title v-html="item.title"></v-list-item-title>
      <v-list-item-subtitle
        class="font-weight-light caption"
        v-html="item.subtitle"
      ></v-list-item-subtitle>
    </v-list-item-content>
    <v-btn icon>
      <v-icon v-if="item.status === 'active'" color="primary"
        >mdi-chevron-right</v-icon
      >
      <v-icon v-else-if="item.status === 'done'" color="success"
        >mdi-check</v-icon
      >
      <v-icon v-else color="error">mdi-close</v-icon>
    </v-btn>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SidebarTaskItem",
  props: ["item"]
});
</script>
