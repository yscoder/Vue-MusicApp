export default {
    PUSHSONG(state, song) {
        !state.playList.some(item => item.id === song.id) && state.playList.push(song)
    },
    CUTSONG(state, index) {
        state.songIndex = index
    },
    SEARCHLIST(state, data) {
        state.searchList = data
    }
}
