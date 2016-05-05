<template>
    <div class="m-player ratina-bd bd-t" id="player" v-if="currentSong" transition="fade-in-bottom">
        <div class="">
            <div class="m-pic-s fl">
                <img src="http://placeholder.qiniudn.com/56x56/ccc/fff" v-waves.block>
            </div>
            <div class="m-act flex-row fr">
                <button class="flex-col" @click="mode" v-waves.circle>
                    <i class="icon icon-lg" :class="'icon-mode-' + modeIcon"></i>
                </button>
                <button class="flex-col" @click="play" v-waves.circle>
                    <i class="icon icon-lg" :class="[playState ? 'icon-pause' : 'icon-play']"></i>
                </button>
                <button class="flex-col" @click="next" v-waves.circle>
                    <i class="icon icon-lg icon-next "></i>
                </button>
            </div>
            <div class="m-txt oh">
                <div class="song ellipsis">{{currentSong ? currentSong.name : ''}}</div>
                <div class="singer ellipsis">{{currentSong ? currentSong.singer : ''}}</div>
            </div>

            <audio autoplay v-el:music  @play="playStateChange" @pause="playStateChange" @ended="playEnded"  @progress="progress" @timeupdate="timeupdate">
              <source type="audio/mpeg" :src="currentSong.url" v-if="currentSong">
            </audio>
        </div>
        <progress-line :running="running" :total="total"></progress-line>
    </div>
</template>
<script>
var ProgressLine = require('./ProgressLine');
var NextSong = require('../store/actions').NextSong;

module.exports = {
    data: function(){
        return {
            playMode: 0,
            running: 0,
            total: 0,
            playState: false
        }
    },
    components: {
        'progress-line': ProgressLine
    },
    vuex: {
        getters: {
            currentSong: function (state) {
                // console.log()
                return state.playList[state.songIndex];
            }
        },
        actions: {
            nextSong: NextSong
        }
    },
    methods: {
        play: function () {
            // play or pause
            this.playState ? this.$els.music.pause() : this.$els.music.play();
        },
        next: function () {
            // next
            // 根据 playMode 切换下一首
            var $music = this.$els.music;

            $music.pause();
            $music.src = '';

            console.log('mode:' + this.playMode);
            this.nextSong(this.playMode);

            $music.src = this.currentSong.url;
            $music.play();
        },
        mode: function () {
            // playMode
            var cur = this.playMode;

            this.playMode = cur + 1 === 3 ? 0 : cur + 1;

            // playMode 为 1 设置循环播放
            this.$els.music.loop = this.playMode === 1;
        },
        playEnded: function () {
            // 播放结束直接调用下一首
            console.log('next');
            this.next();
        },
        playStateChange: function (e) {
            // 播放状态改变
            console.log(e.type);
            this.playState = e.type === 'play';
        },
        progress: function () {
            // 缓冲
            // buffered 已缓冲长度
            // duration 资源长度
            var $music = this.$els.music,
                buffered = $music.buffered;

            if(!buffered.length) return;

            this.total = Math.round(buffered.end(buffered.length - 1) / $music.duration * 100);

        },
        timeupdate: function () {
            // 播放中
            // played 已播放长度
            var $music = this.$els.music;
            this.running = Math.round($music.currentTime / $music.duration * 100);
        }
    },
    computed: {

        modeIcon: function () {
            return ['loop', 'single', 'random'][this.playMode];
        }
    }
};
</script>
