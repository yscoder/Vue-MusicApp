<template>
    <div class="m-main" id="main">
        <ol class="m-list" id="playList" v-if="playList">
            <li class="m-list-item m-play-item" v-waves.block v-for="(item, index) in playList" :data-index="index + 1">
                <a href="javascript:;" class="container ratina-bd bd-b" @click="cutSong(index)">
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
import {cutSongByIndex} from '../store/actions'

export default {
    vuex: {
        getters: {
            playList (state) {
                return state.playList;
            }
        },
        actions: {
            cutSong: cutSongByIndex
        }
    },
    data() {
        return {
            playList: []
        }
    },
    methods: {
        contextMenu (item) {
            console.log('more')
        }
    }
}
</script>
