<template>
  <v-list-item>
    <v-list-item-icon>
      <v-icon v-if="!item.recurring">mdi-calendar</v-icon>
      <v-icon v-else>mdi-calendar-sync</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title v-html="item.title"></v-list-item-title>
      <v-list-item-subtitle
        class="font-weight-light caption"
        v-html="item.subtitle"
      ></v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SidebarCalendarItem",
  props: ["item"]
});
</script>
