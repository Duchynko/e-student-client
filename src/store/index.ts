import Vue from 'vue'
import Vuex from 'vuex'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const client = require('api-client')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feed: [],
    events: [],
    tasks: [],
  },
  mutations: {
    setFeed(state, feed) {
      state.feed = feed
    },
    setEvents(state, events) {
      state.events = events
    },
    setTasks(state, tasks) {
      state.tasks = tasks
    },
  },
  actions: {
    fetchFeed({ commit }) {
      return client.fetchFeed().then((feed: any) => commit('setFeed', feed))
    },
    fetchEvents({ commit }) {
      return client.fetchEvents().then((events: any) => commit('setEvents', events))
    },
    fetchTasks({ commit }) {
      return client.fetchTasks().then((tasks: any) => commit('setTasks', tasks))
    },
  },
  modules: {},
})
