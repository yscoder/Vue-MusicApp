<style lang="less">
@import './less/style';
</style>
<template>
    <div id="app">
        <router-view></router-view>
        <player></player>
    </div>
</template>

<script>
import Player from './components/Player'

export default {
    components: {
        Player
    }
}
</script>
