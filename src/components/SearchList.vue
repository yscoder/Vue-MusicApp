<template>
    <div class="m-main">
        <ul class="m-list" id="searchList" v-if="searchList">
            <li class="m-list-item" v-waves.block v-for="item in searchList" >
                <a href="javascript:;" class="container ratina-bd bd-b" @click="onItemClick(item)">
                    <div class="ellipsis">{{item.name}} - {{item.singer}}</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    methods: {
        onItemClick(item) {
            this.$store.dispatch('addPlayList', item)
        }
    },
    computed: {
        searchList() {
            return this.$store.getters.searchList
        }
    }
}
</script>
