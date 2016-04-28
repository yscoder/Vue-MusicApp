<template>
    <div class="m-player" id="player">
        <div class="container flex-row">
            <div class="m-pic-s">
                <img src="http://placeholder.qiniudn.com/40x40/ccc/fff">
            </div>
            <div class="flex-col m-txt">
                <p class="song">{{song.name}}</p>
                <p class="singer">{{song.singer}}</p>
            </div>
            <div class="m-act">
                <span @click="mode()" class="icon icon-lg m-btn icon-mode-random"></span>
                <span @click="play()" class="icon icon-lg m-btn icon-play "></span>
                <span @click="next()" class="icon icon-lg m-btn icon-next "></span>
            </div>
            <audio autoplay v-el="music">
              <source type="audio/mpeg" :src="song.url" v-if="song.url">
            </audio>
        </div>
    </div>
</template>
<script>
module.exports = {
    props: {
        song: Object
    },
    methods: {
        play: function () {
            // console.log('')
        },
        next: function () {
            // next
        },
        mode: function () {
            // body...
        }
    },
    computed: {
        songUrl: {
            get: function () {
                return this.song.url;
            },
            set: function (song) {
                this.song = song;
            }
        }
    }
};
</script>
