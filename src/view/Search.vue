<style>
    .search-view {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: 100%;
        z-index: 12;
    }
</style>
<template>
    <transition name="fade-in-left" mode="out-in">
        <div class="search-view" id="search-view">
            <search-header></search-header>
            <search-list></search-list>
        </div>
    </transition>
</template>

<script>
import SearchHeader from 'components/SearchHeader'
import SearchList from 'components/SearchList'

export default {
    components: {
        SearchHeader,
        SearchList
    }
}
</script>
