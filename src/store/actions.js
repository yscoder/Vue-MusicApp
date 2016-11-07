module.exports = {
    addPlayList: function(store, song) {
        store.commit('PUSHSONG', song);
    },
    cutSongByIndex: function(store, index) {
        store.commit('CUTSONG', index);
    },
    nextSong: function(store, mode) {
        var len = store.state.playList.length,
            index = store.state.songIndex;

        switch (mode) {
            case 0:
                // 顺序
                index = index + 1 === len ? 0 : index + 1;
                break;
            case 2:
                // 随机
                index = Math.floor((Math.random() * (len - 1)) + 1);
                break;
        }
        store.commit('CUTSONG', index);
    }
};