<template>
  <v-card class="mx-auto my-3" color="white" light>
    <v-list-item class="grow">
      <v-list-item-avatar color="grey darken-3">
        <v-img class="elevation-6" :src="post.author.avatar" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="mb-0" v-text="`${post.author.firstName} ${post.author.lastName}`" />
        <v-list-item-subtitle class="caption font-weight-light" v-text="post.author.title" />
      </v-list-item-content>
      <p class="overline" v-text="post.date"></p>
    </v-list-item>

    <v-card-text class="body-1 pt-2" v-text="post.content"> </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FeedCard',
  props: ['post'],
})
</script>
