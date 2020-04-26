<template>
  <v-container class="fill-height align-start" fluid>
    <v-row justify="center">
      <v-col cols="6" class="text-left">
        <v-icon color="info" class="float-left mr-1">mdi-newspaper</v-icon>
        <p class="font-weight-light">UPDATES</p>
        <v-skeleton-loader v-if="feedLoading" transition="undefined" height="94" type="list-item-avatar-three-line" />
        <FeedCard v-for="(post, i) in feed" :key="i" :feed="post" />
      </v-col>

      <v-col cols="3" class="text-left">
        <v-row justify="center">
          <v-col class="pt-0">
            <v-icon color="secondary" class="float-left mr-1">mdi-check</v-icon>
            <p class="font-weight-light">TASKS</p>
            <v-card class="mx-auto" max-width="400" tile>
              <v-list>
                <v-list-item-group color="primary">
                  <v-skeleton-loader v-if="tasksLoading" transition="undefined" height="94" type="list-item-two-line" />
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
                  <v-skeleton-loader
                    v-if="eventsLoading"
                    transition="undefined"
                    height="94"
                    type="list-item-two-line"
                  />
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
export default Vue.extend({
  name: 'Home',
  components: {
    FeedCard,
    SidebarCalendarItem,
    SidebarTaskItem,
  },
  data: () => ({
    feedLoading: false,
    eventsLoading: false,
    tasksLoading: false,
  }),
  computed: {
    feed() {
      return this.$store.state.feed
    },
    events() {
      return this.$store.state.events
    },
    tasks() {
      return this.$store.state.tasks
    },
  },
  created() {
    this.feedLoading = true
    this.eventsLoading = true
    this.tasksLoading = true
    this.$store.dispatch('fetchFeed').then(() => (this.feedLoading = false))
    this.$store.dispatch('fetchEvents').then(() => (this.eventsLoading = false))
    this.$store.dispatch('fetchTasks').then(() => (this.tasksLoading = false))
  },
})
</script>
