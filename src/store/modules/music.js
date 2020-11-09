const music = {
  state: {
    user: {},
    musiclistId:[],
    musicCount:0,
    nowmusic:'',
    nowmusicmenu:{},
    musicmenus:[],
    userPlayList:[],
    musicDuration: 0,
    isPlaying:true,
  },
  getters: {
    user: state => state.user,
    musiclistId: state => state.musiclistId,
    musicCount: state => state.musicCount,
    nowmusicmenu: state => state.nowmusicmenu,
    musicmenus: state => state.musicmenus,
    userPlayList: state => state.userPlayList,
    musicDuration: state => state.musicDuration,
    isPlaying: state => state.isPlaying,
  },
  mutations: {
    user: (state, value) => {
      state.user = value
    },
    set_musiclistId: (state, value) => {
      state.musiclistId = value
    },
    set_musicCount: (state, value) => {
      state.musicCount = value
    },
    set_nowmusicmenu: (state, value) => {
      state.nowmusicmenu = value
    },
    set_musicmenus: (state, value) => {
      state.musicmenus = value
    },
    set_userPlayList: (state, value) => {
      state.userPlayList = value
    },
    set_musicDuration: (state, value) => {
      state.musicDuration = value
    },
    set_isPlaying: (state, value) => {
      state.isPlaying = value
    },
  },
  actions: {

  }
}


export default music
