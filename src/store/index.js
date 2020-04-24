import Vue from 'vue'
import Vuex from 'vuex'
import gamesModule from './games'
import authModule from './auth'
import VuexPersist from "vuex-persist"

Vue.use(Vuex)

const vuexStorage = new VuexPersist({
  key: 'gamesStorage',
  storage: window.localStorage,
  modules: ['auth']
})

export default new Vuex.Store({
  plugins: [vuexStorage.plugin],
  modules: {
    games: gamesModule,
    auth: authModule
  }
})