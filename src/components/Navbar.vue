<template>
  <v-app-bar app color="white" light>
    <v-row>
      <v-col cols="2" class="d-flex align-center">
        <v-toolbar-title>E-Student</v-toolbar-title>
      </v-col>
      <v-col class="d-flex justify-center align-center">
        <v-btn active-class="active-nav-btn" to="/" icon class="mx-6">
          <v-icon large>mdi-home-outline</v-icon>
        </v-btn>
        <v-btn active-class="active-nav-btn" :to="{ name: 'About' }" icon class="mx-6">
          <v-icon large>mdi-calendar-month-outline</v-icon>
        </v-btn>
        <v-btn active-class="active-nav-btn" :to="{ name: 'Courses' }" icon class="mx-6">
          <v-icon large>mdi-school-outline</v-icon>
        </v-btn>
        <v-btn icon class="mx-6">
          <v-icon large>mdi-file-document-outline</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="2" class="d-flex justify-end">
        <v-list-item-title
          class="text-right subtitle-1"
          v-if="this.currentUser.firstName"
          v-text="`${this.currentUser.firstName} ${this.currentUser.lastName}`"
        />
        <v-list-item-avatar>
          <img :src="this.currentUser.avatar" alt="" />
        </v-list-item-avatar>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    currentUser() {
      return this.$store.state.currentUser
    },
  },
})
</script>

<style scoped>
.active-nav-btn {
  color: var(--v-primary-base) !important;
}
</style>
