import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state = {
  // music
  playmenus: [],
  playList: [],
  isplaying: false,
  palyDetail: {}
  //
}

const getters = {
  playmenus: state => state.palymenus,
  playList: state => state.playList,
  isplaying: state => state.isplaying,
  palyDetail: state => state.palyDetail,
}

const mutations = {
  set_playmenus: (state, value) => {
    state.playmenus = value
  },
  set_playList: (state, value) => {
    state.playList = value
  },
  set_isplaying: (state, value) => {
    state.isplaying = value
  },
  set_palyDetail: (state, value) => {
    state.palyDetail = value
  },
}

const actions = {

}


const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
