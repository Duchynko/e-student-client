<template>
  <v-container class="fill-height align-start pt-0" fluid>
    <v-row>
      <v-col cols="12" class="pt-0 px-0">
        <v-card>
          <v-row justify="center">
            <v-col cols="9" class="justify-center pb-0">
              <v-list-item class="grow">
                <v-list-item-icon>
                  <v-icon large>mdi-school</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="headline" v-text="item.name" />
                  <v-list-item-subtitle class="caption font-weight-light" v-text="item.code" />
                </v-list-item-content>
                <v-list-item-avatar size="32" color="grey darken-3">
                  <v-img class="elevation-6" :src="posts[0].author.avatar" />
                </v-list-item-avatar>
                <p class="subtitle-1 ml-2 mb-0" v-text="`Dr. Elon Musk`"></p>
              </v-list-item>

              <v-card-actions class="justify-center pb-0">
                <v-btn-toggle borderless mandatory color="primary">
                  <v-btn
                    text
                    :ripple="false"
                    :to="{ name: 'Course.Overview', params: { course: item.name, item: item } }"
                    >Overview</v-btn
                  >
                  <v-btn
                    text
                    :ripple="false"
                    :to="{ name: 'Course.Resources', params: { course: item.name, item: item } }"
                    >Resources</v-btn
                  >
                </v-btn-toggle>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <router-view></router-view>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import FeedCard from '@/components/FeedCard.vue'
import SidebarCalendarItem from '@/components/SidebarCalendarItem.vue'
import SidebarTaskItem from '@/components/SidebarTaskItem.vue'
import { getSchoolPosts, getEvents, getTasks } from '../services/mock'
export default Vue.extend({
  name: 'Home',
  props: ['item'],
  components: {},
  data: () => ({
    postsLoading: false,
    eventsLoading: false,
    tasksLoading: false,
    posts: {},
    events: {},
    tasks: {},
  }),
  created() {
    this.$store.dispatch('fetchCurrentUser')

    this.postsLoading = true
    this.eventsLoading = true
    this.tasksLoading = true

    getSchoolPosts().then(res => {
      this.posts = res
      this.postsLoading = false
    })
    getEvents().then(res => {
      this.events = res
      this.eventsLoading = false
    })
    getTasks().then(res => {
      this.tasks = res
      this.tasksLoading = false
    })
  },
})
</script>

<style scoped>
.v-item--active {
  color: var(--v-primary-base);
}

.v-btn::before {
  background-color: transparent;
}
</style>
