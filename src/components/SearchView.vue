<style>
    .search-view {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: 100%;
        background: #fff;
        z-index: 12;
    }
</style>
<template>
    <transition name="fade-in-left" mode="out-in">
        <div class="search-view" id="search-view">
            <header id="search-hd" class="m-hd">
                <div class="flex-row">
                    <router-link to="/">
                        <div class="m-hd-icon" v-waves.circle>
                            <i class="icon icon-lg icon-prev"></i>
                        </div>
                    </router-link>
                    <div class="flex-col m-key-wrap">
                        <input type="text" class="m-key" placeholder="歌名 艺人 专辑" 
                            v-model="key" @keyup.enter="search">
                        <a href="javascript:;" class="m-key-icon" @click="search" v-waves.circle>
                            <i class="icon icon-search icon-lg"></i>
                        </a>
                    </div>
                </div>
            </header>
            <search-list :search-list="searchList"></search-list>
        </div>
    </transition>
</template>

<script>
import List from './SearchList'

export default {
    data() {
        return {
            key: '曾经的你'
        }
    },
    components: {
        searchList: List
    },
    methods: {
        search() {
            if (!this.key.trim()) return

            console.log(this.key)

            this.$store.dispatch('search', this.key)
        }
    },
    computed: {
        searchList() {
            return this.$store.getters.searchList
        }
    }
}
</script>
