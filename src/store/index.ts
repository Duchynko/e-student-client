import Vue from 'vue'
import Vuex from 'vuex'
import * as client from '../services/mock/index'
import Teacher from '@/models/Teacher'
import Student from '@/models/Student'
import School from '@/models/School'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {} as Teacher | Student,
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user
    },
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      const currentUser = await client.fetchCurrentUser()
      return commit('setCurrentUser', currentUser)
    },
  },
  modules: {},
})
