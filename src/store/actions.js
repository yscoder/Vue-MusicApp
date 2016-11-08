import Music from '../api/music'

export default {
    addPlayList(store, song) {
        Music.getSong(song.id).then(data => {
            song.url = data
            store.commit('PUSHSONG', song)
        })
    },
    cutSongByIndex(store, index) {
        store.commit('CUTSONG', index)
    },
    nextSong(store, mode) {
        let len = store.state.playList.length
        let index = store.state.songIndex

        switch (mode) {
            case 0:
                // 顺序
                index = index + 1 === len ? 0 : index + 1
                break
            case 2:
                // 随机
                index = Math.floor((Math.random() * (len - 1)) + 1)
                break
        }

        store.commit('CUTSONG', index)
    },
    search(store, key) {
        Music.search(key).then(data => {
            store.commit('SEARCHLIST', data.list)
        })
    }
}
