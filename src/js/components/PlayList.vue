<template>
    <div class="m-main" id="main">
        <ol class="m-list" id="playList" v-if="playList">
            <li class="m-list-item m-play-item" v-for="item in playList" data-index="{{$index + 1}}">
                <a href="javascript:;" class="container ratina-bd bd-b" @click="play(item)">
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
        play: function (item) {
            this.$http.get('/song/' + item.id).then(function (res) {
                console.log('url:' + res.data);
                item.url = res.data;
                this.$dispatch('click-item', item);

            }, function (res) {
                console.error('error: ' + res.status);
            });
        },
        contextMenu: function (item) {
            console.log('more')
        }
    }
};
</script>
