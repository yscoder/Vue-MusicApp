<style>
@import '../css/base.css';
</style>
<template>
    <div id="app">
        <m-header v-on:fetch-list="fetchList"></m-header>
        <m-list :list="list" v-on:click-item="clickItem"></m-list>
        <m-player :song="song"></m-player>
    </div>
</template>

<script>
var Header = require('./components/Header');
var Player = require('./components/Player');
var List = require('./components/List');

module.exports = {
    components: {
        'm-header': Header,
        'm-player': Player,
        'm-list': List
    },
    data: function () {
        return {
            list: [{
                id: 237910,
                name: '曾经的你',
                singer: '许巍',
                album: '未知'
            }],
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
        },
        clickItem: function (item) {
            this.song = item;
        }
    }

};

</script>
