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
    <div class="search-view" id="search-view" transition="fade-in-left" transition-mode="out-in">
        <header id="search-hd" class="m-hd">
            <div class="flex-row container">
                <span class="m-btn icon icon-2x icon-prev" v-link="{ path: '/' }"></span>
                <div class="flex-col mr-both m-key-wrap">

                    <input type="text" class="m-key" v-model="key" placeholder="歌名 艺人 专辑">
                    <span class="icon icon-search icon-2x m-key-icon" @click="search"></span>
                </div>
                <!-- <button type="button" class="m-btn" @click="search">搜索</button> -->
            </div>
        </header>
        <search-list :search-list="searchList"></search-list>
    </div>

</template>

<script>
var List = require('./SearchList');

module.exports = {
    data: function () {
        return {
            key: '曾经的你',
            searchList: []
        }
    },
    components: {
        'search-list': List
    },
    methods: {
        search: function () {

            if(!this.key.trim()) {
                return;
            }

            console.log(this.key);

            this.$http.get('/search/' + this.key + '/1').then(function(res){

                this.searchList = res.data.list;

            }, function (res) {
                console.error('error: ' + res.status);
            });
        }
    }
};
</script>
