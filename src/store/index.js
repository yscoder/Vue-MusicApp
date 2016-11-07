import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

module.exports = new Vuex.Store({
    state: {
        songIndex: 0,
        playList: []
    },
    mutations,
    actions,
    getters: {
        currentSong(state) {
            return state.playList[state.songIndex]
        }
    }
})