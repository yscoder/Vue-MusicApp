<style lang="less">
    .m- {
        &player {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 10;
            width: 100%;
            height: 56px;
            background: #fff;
            border-top: 1px solid #ddd;
            .container {
                margin-top: 8px;
                margin-bottom: 8px;
            }
        }

        &pic-s {
            width: 40px;
            height: 40px;
            margin-right: 16px;
            border-radius: 50%;
            overflow: hidden;
            img {
                vertical-align: top
            }
        }

        &txt {
            font-size: .14em;
            .singer {
                color: #727272;
            }
        }

        &act {
            font-size: .14em;
            color: #727272;
            line-height: 40px;

        }
    }
</style>
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
                <span @click="play()">播放</span>
                <span @click="next()">下一首</span>
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
