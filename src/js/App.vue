<style lang="less">
@import '../less/style';
</style>
<template>
    <div id="app" class="index-view">
        <music-header v-on:fetch-list="fetchList"></music-header>
        <play-list :list="list" v-on:click-item="clickItem"></play-list>
        <music-ctrl :song="song"></music-ctrl>
    </div>

    <router-view></router-view>
</template>

<script>
var Header = require('./components/Header');
var Player = require('./components/Player');
var List = require('./components/PlayList');

module.exports = {
    components: {
        'music-header': Header,
        'music-ctrl': Player,
        'play-list': List
    },
    data: function () {
        return {
            list: [],
            song: {
                id: 237910,
                name: '曾经的你',
                singer: '许巍'
            }
        }
    },
    methods: {
        fetchList: function (data) {
            this.list = data;
        }
    }

};

</script>
