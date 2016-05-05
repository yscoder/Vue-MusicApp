module.exports = {
    PUSHSONG: function(state, song) {
        !state.playList.some(function(item, i) {
            return item.id === song.id;
        }) && state.playList.push(song);
    },
    CUTSONG: function(state, index) {
        state.songIndex = index;
    }
}
