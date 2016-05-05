<style lang="less">
@import '../less/style';
</style>
<template>
    <div id="app">
        <router-view></router-view>
        <music-ctrl></music-ctrl>
    </div>
</template>

<script>
var Player = require('./Player');
var store = require('../store');

module.exports = {
    components: {
        'music-ctrl': Player
    },
    store: store
};

</script>
