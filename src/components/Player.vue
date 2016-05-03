<template>
    <div class="m-player ratina-bd bd-t" id="player" v-if="currentSong" transition="fade-in-bottom">
        <div class="container">
            <div class="m-pic-s mr-both fl">
                <img src="http://placeholder.qiniudn.com/40x40/ccc/fff">
            </div>
            <div class="m-act fr">
                <span @click="mode" class="icon icon-lg m-btn" :class="'icon-mode-' + playMode.list[playMode.index]"></span>
                <span @click="play" class="icon icon-lg m-btn" :class="[playState ? 'icon-pause' : 'icon-play']"></span>
                <span @click="next" class="icon icon-lg m-btn icon-next "></span>
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

module.exports = {
    data: function(){
        return {
            playState: false,
            playMode: {
                index: 0,
                list: ['loop', 'single', 'random']
            },
            running: 0,
            total: 0
        }
    },
    components: {
        'progress-line': ProgressLine
    },
    props: {
        songIndex: Number,
        playList: Array
    },
    methods: {
        play: function () {
            // play or pause
            this.playState = !this.playState;
            (this.playList[this.songIndex] && this.playState) ? this.$els.music.play() : this.$els.music.pause();
        },
        next: function () {
            // next
            // 根据 playMode 切换下一首
            var len = this.playList.length,
                index = this.songIndex;

            // 取消循环播放
            this.$els.music.loop = false;

            switch(this.playMode.index) {
                case 0:
                    // 顺序
                    index = this.songIndex + 1 === len ? 0 : this.songIndex + 1;
                    break;
                case 2:
                    // 随机
                    index = Math.floor((Math.random() * (len - 1)) + 1);
                    break;
                default:
                    // 单曲循环
                    this.$els.music.loop = true;
                    break;
            }
            console.log('playIndex:' + index)
            this.playByIndex(index);
            
        },
        mode: function () {
            // playMode
            var cur = this.playMode.index,
                len = this.playMode.list.length;
            this.playMode.index = cur + 1 === len ? 0 : cur + 1;
        },
        playEnded: function () {
            // 播放结束直接调用下一首
            console.log('next');
            this.next();
        },
        playStateChange: function () {
            // 播放状态改变
            this.playState = !this.$els.music.paused;
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
        },
        playByIndex: function(index) {
            this.songIndex = index;
            this.$els.music.src = this.playList[this.songIndex].url;
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
        },
        currentSong: function() {
            return this.playList[this.songIndex];
        }
    },
    events: {
        'cut-play': function(index) {
            this.playIndex !== index && this.playByIndex(index);
        }
    }
};
</script>
