<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="11">
        <v-icon color="info" class="float-left mr-1">mdi-school-outline</v-icon>
        <p class="font-weight-light">COURSES</p>
        <v-card class="mx-auto" tile>
          <v-list rounded>
            <v-list-item-group v-model="item" color="primary">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="{ name: 'Course.Overview', params: { course: item.name, item: item } }"
              >
                <v-list-item-icon>
                  <v-icon>mdi-school</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon @click="stared(item)">
                  <v-icon v-if="item.stared" color="secondary">mdi-star</v-icon>
                  <v-icon v-else>mdi-star-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content class="text-center">
                  <v-list-item-subtitle v-text="item.code"></v-list-item-subtitle>
                  <v-list-item-action-text>2019/2020</v-list-item-action-text>
                </v-list-item-content>

                <v-badge :value="item.notifications" overlap color="secondary" dot>
                  <v-icon>mdi-bell</v-icon>
                </v-badge>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Courses',
  data: () => {
    return {
      item: undefined,
      items: [
        {
          name: 'Physics',
          code: '5A-PHY-19',
          events: ['e1', 'e2'],
          tasks: ['t1, t2'],
          stared: true,
          notifications: false,
        },
        {
          name: 'Mathematics',
          code: '5A-MAT-19',
          events: ['e1', 'e2'],
          tasks: ['t1, t2'],
          stared: false,
          notifications: true,
        },
        {
          name: 'Biology',
          code: '5A-BIO-19',
          events: ['e1', 'e2'],
          tasks: ['t1, t2'],
          stared: false,
          notifications: false,
        },
        {
          name: 'Arts',
          code: '5A-ART-19',
          events: ['e1', 'e2'],
          tasks: ['t1, t2'],
          stared: true,
          notifications: false,
        },
      ],
    }
  },
  methods: {
    stared(item: any) {
      item.stared = !item.stared
    },
  },
})
</script>
