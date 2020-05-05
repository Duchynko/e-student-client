<template>
  <v-container class="fill-height align-start" fluid>
    <v-row justify="center">
      <v-col cols="6" class="text-left">
        <v-icon color="info" class="float-left mr-1">mdi-newspaper</v-icon>
        <p class="font-weight-light">UPDATES</p>
        <div v-if="postsLoading">
          <v-skeleton-loader
            v-for="index in 3"
            :key="index"
            transition="undefined"
            height="94"
            type="list-item-avatar-three-line"
          />
        </div>
        <FeedCard v-for="(post, i) in posts" :key="i" :post="post" />
      </v-col>

      <v-col cols="3" class="text-left">
        <v-row justify="center">
          <v-col class="pt-0">
            <v-icon color="secondary" class="float-left mr-1">mdi-check</v-icon>
            <p class="font-weight-light">TASKS</p>
            <v-card class="mx-auto" max-width="400" tile>
              <v-list>
                <v-list-item-group color="primary">
                  <div v-if="tasksLoading">
                    <v-skeleton-loader
                      v-for="index in 2"
                      :key="index"
                      transition="undefined"
                      height="94"
                      type="list-item-two-line"
                    />
                  </div>
                  <p
                    class="text-center font-weight-light black--text"
                    v-if="!this.tasksLoading && this.tasks.length === 0"
                  >
                    No tasks found
                  </p>
                  <SidebarTaskItem v-for="(task, i) in tasks" :key="i" :item="task" />
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-icon color="accent" class="float-left mr-1">mdi-calendar-range-outline</v-icon>
            <p class="font-weight-light">EVENTS</p>
            <v-card class="mx-auto" max-width="400" tile>
              <v-list>
                <v-list-item-group color="primary">
                  <div v-if="eventsLoading">
                    <v-skeleton-loader
                      v-for="index in 2"
                      :key="index"
                      transition="undefined"
                      height="94"
                      type="list-item-two-line"
                    />
                  </div>
                  <p
                    class="text-center font-weight-light black--text"
                    v-if="!this.eventsLoading && this.events.length === 0"
                  >
                    No events found
                  </p>
                  <SidebarCalendarItem v-for="(item, i) in events" :key="i" :item="item" />
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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
  components: {
    FeedCard,
    SidebarCalendarItem,
    SidebarTaskItem,
  },
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
