import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    num: 1
  },
  mutations: {
    setValue (state, newV) {
      state.num = newV
    }
  }
})

export default store
