<template>
    <div class="m-main" id="main">
        <ol class="m-list" id="playList" v-if="playList">
            <li class="m-list-item m-play-item" v-for="item in playList" data-index="{{$index + 1}}">
                <a href="javascript:;" class="container ratina-bd bd-b" @click="play($index)">
                    <div class="ellipsis">{{item.name}}</div>
                    <div class="ellipsis sub">
                        {{item.singer}} - {{item.album||'未知专辑'}}
                    </div>
                    <span class="icon icon-more icon-lg m-btn" @click.stop.prevent="contextMenu(item)"></span>
                </a>
            </li>
        </ol>
    </div>
</template>
<script>

module.exports = {
    props: {
        playList: Array
    },
    methods: {
        play: function (index) {
            this.$dispatch('cut-song', index);
        },
        contextMenu: function (item) {
            console.log('more')
        }
    }
};
</script>
