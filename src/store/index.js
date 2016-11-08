import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        songIndex: 0,
        playList: [],
        searchList: []
    },
    mutations,
    actions,
    getters: {
        currentSong(state) {
            return state.playList[state.songIndex]
        },
        playList(state) {
            return state.playList
        },
        searchList(state) {
            return state.searchList
        }
    }
})
