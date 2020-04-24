<template>
  <v-container class="fill-height grey lighten-4" fluid>
    <v-row align="start" justify="center">
      <v-col cols="6" class="text-left">
        <v-icon color="info" class="float-left mr-1">mdi-newspaper</v-icon>
        <p class="font-weight-light">UPDATES</p>
        <FeedCard v-for="(feed, i) in feeds" :key="i" v-bind:feed="feed" />
      </v-col>

      <v-col cols="3" class="text-left">
        <v-row align="start" justify="center">
          <v-col class="pt-0">
            <v-icon color="secondary" class="float-left mr-1">mdi-check</v-icon>
            <p class="font-weight-light">TASKS</p>
            <v-card class="mx-auto" max-width="400" tile>
              <v-list>
                <v-list-item-group color="primary">
                  <SidebarTaskItem
                    v-for="(task, i) in tasks"
                    :key="i"
                    v-bind:item="task"
                  />
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-icon color="accent" class="float-left mr-1"
              >mdi-calendar-range-outline</v-icon
            >
            <p class="font-weight-light">EVENTS</p>
            <v-card class="mx-auto" max-width="400" tile>
              <v-list>
                <v-list-item-group color="primary">
                  <SidebarCalendarItem
                    v-for="(item, i) in events"
                    :key="i"
                    v-bind:item="item"
                  />
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
import Vue from "vue";
import FeedCard from "@/components/FeedCard.vue";
import SidebarCalendarItem from "@/components/SidebarCalendarItem.vue";
import SidebarTaskItem from "@/components/SidebarTaskItem.vue";
export default Vue.extend({
  name: "Home",
  components: {
    FeedCard,
    SidebarCalendarItem,
    SidebarTaskItem
  },
  data: () => ({
    feeds: [
      {
        author: "Elon Musk",
        title: "Physics teacher",
        avatar: "https://api.adorable.io/avatars/285/elon@musk.com.png",
        text:
          "It’s OK to have your eggs in one basket as long as you control what happens to that basket",
        due: "yesterday"
      },
      {
        author: "Bill Gates",
        title: "Informatics teacher",
        avatar: "https://api.adorable.io/avatars/285/bill@gates.com.png",
        text:
          "If all my bridge coach ever told me was that I was ‘satisfactory,’ I would have no hope of ever getting better. How would I know who was the best? How would I know what I was doing differently?",
        due: "2 days ago"
      },
      {
        author: "Steve Jobs",
        title: "Arts teacher",
        avatar: "https://api.adorable.io/avatars/285/steve@jobs.com.png",
        text:
          "Design is not just what it looks like and feels like. Design is how it works.",
        due: "a week ago"
      }
    ],
    events: [
      {
        title: "Christmas dinner",
        subtitle: "20.12.2020",
        recurring: false
      },
      {
        title: "Bachelor party",
        subtitle: "01.02.2021",
        recurring: false
      },
      {
        title: "Cleaning the beach",
        subtitle: "05.02.2021",
        recurring: true
      }
    ],
    tasks: [
      {
        title: "Logarithms",
        subtitle: "due 11.11.2020",
        status: "active",
        type: "HW"
      },
      {
        title: "Hamlet",
        subtitle: "handed 14.11.2020",
        status: "done",
        type: "EX"
      },
      {
        title: "Chapter 3",
        subtitle: "handed 15.11.2020",
        status: "done",
        type: "HW"
      },
      {
        title: "Mammals",
        subtitle: "due 15.11.2020",
        status: "expired",
        type: "PR"
      }
    ]
  })
});
</script>
