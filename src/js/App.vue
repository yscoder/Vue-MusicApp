<style lang="less">
@import '../less/style';
</style>
<template>
    <div id="app">
        <router-view :play-list="playList"></router-view>
        <music-ctrl :song-index="songIndex" :play-list="playList"></music-ctrl>
    </div>
</template>

<script>
var Player = require('./components/Player');

module.exports = {
    components: {
        'music-ctrl': Player
    },
    data: function () {
        return {
            playList: [],
            songIndex: 0
        }
    },
    methods: {
        pushSong: function (song) {
            // 过滤：不添加已存在的项
            var index = 0;
            !this.playList.some(function (item, i) {
                index = i;
                return item.id === song.id;
            }) && (this.playList.push(song), this.songIndex = index);
        }
    },
    events: {
        'add-song': function (song) {
            this.pushSong(song);
            console.log(this.playList)
        },
        'cut-song': function(index) {
            console.log('cut:' + index);
            // this.songIndex = index;
            this.$broadcast('cut-play', index);
        }
    }

};

</script>
