<template>
    <div class="m-main" id="main">
        <ol class="m-list" id="playList" v-if="playList">

            <li class="m-list-item m-play-item" v-waves.block 
                v-for="(item, index) in playList" 
                :data-index="(index >= 9 ? index + 1 : '0' + (index + 1))">

                <a class="container ratina-bd bd-b" @click="cutSong(index)">
                    <div class="ellipsis">{{item.name}}</div>
                    <div class="ellipsis sub">
                        {{item.singer}} - {{item.album||'未知专辑'}}
                    </div>
                    <span class="icon icon-more icon-lg" v-waves.circle @click.stop.prevent="contextMenu(item)"></span>
                </a>
            </li>

        </ol>
    </div>
</template>
<script>
export default {
    methods: {
        cutSong(index) {
            console.log('cutSongByIndex', index)
            this.$store.dispatch('cutSongByIndex', index)
        },
        contextMenu(item) {
            console.log('more')
        }
    },
    computed: {
        playList() {
            return this.$store.getters.playList
        }
    }
}
</script>
