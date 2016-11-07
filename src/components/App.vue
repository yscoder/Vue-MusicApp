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
import Player from './Player'
import store from '../store'

export default {
    components: {
        musicCtrl: Player
    },
    store
}

</script>
