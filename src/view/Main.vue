<template>
    <transition name="fade-out-left" mode="in-out">
        <div class="main-view" id="main-view">
            <m-header></m-header>
            <play-list></play-list>
        </div>
    </transition>
</template>

<script>
import Header from 'components/Header'
import List from 'components/PlayList'

export default {
    components: {
        mHeader: Header,
        playList: List
    }
}
</script>
