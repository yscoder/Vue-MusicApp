<template>
    <transition name="fade-in-bottom">
        <div class="m-player ratina-bd bd-t" id="player" v-if="currentSong">
            <div class="">
                <div class="m-pic-s fl">
                    <img src="//placeholder.qiniudn.com/40x40/ccc/fff" v-waves.block>
                </div>
                <div class="m-act flex-row fr">
                    <button class="flex-col" @click="mode" v-waves.circle>
                        <i class="icon" :class="'icon-mode-' + modeIcon"></i>
                    </button>
                    <button class="flex-col" @click="play" v-waves.circle>
                        <i class="icon" :class="[playState ? 'icon-pause' : 'icon-play']"></i>
                    </button>
                    <button class="flex-col" @click="next" v-waves.circle>
                        <i class="icon icon-next"></i>
                    </button>
                </div>
                <div class="m-txt oh">
                    <div class="song ellipsis">{{currentSong ? currentSong.name : ''}}</div>
                    <div class="singer ellipsis">{{currentSong ? currentSong.singer : ''}}</div>
                </div>

                <audio autoplay 
                    v-if="currentSong" 
                    ref="music" 
                    :src="currentSong.url" 
                    @play="playStateChange" 
                    @pause="playStateChange" 
                    @ended="playEnded" 
                    @progress="progress" 
                    @timeupdate="timeupdate">
                    <source type="audio/mpeg" :src="currentSong.url">
                </audio>
            </div>
            <progress-line :running="running" :total="total"></progress-line>
        </div>
    </transition>
</template>
<script>
import ProgressLine from './ProgressLine'

export default {
    data() {
        return {
            playMode: 0,
            running: 0,
            total: 0,
            playState: false
        }
    },
    components: {
        ProgressLine
    },
    methods: {
        play() {
            // play or pause
            this.playState ? this.$refs.music.pause() : this.$refs.music.play()
        },
        next() {
            // next
            // 根据 playMode 切换下一首
            var $music = this.$refs.music

            $music.pause()
            $music.src = ''

            console.log('mode:' + this.playMode)

            this.$store.dispatch('nextSong', this.playMode)

            // src 已由数据响应触发更新，以下会造成多余请求
            // $music.src = this.currentSong.url
            // $music.play()
        },
        mode() {
            // playMode
            var cur = this.playMode

            this.playMode = cur + 1 === 3 ? 0 : cur + 1

            // playMode 为 1 设置循环播放
            this.$refs.music.loop = this.playMode === 1
        },
        playEnded() {
            // 播放结束直接调用下一首
            console.log('next')
            this.next()
        },
        playStateChange(e) {
            // 播放状态改变
            console.log(e.type)
            this.playState = e.type === 'play'
        },
        progress(event) {
            // 缓冲
            // buffered 已缓冲长度
            // duration 资源长度

            let $music = event.target
            let buffered = $music.buffered

            if (!buffered.length) return

            this.total = Math.round(buffered.end(buffered.length - 1) / $music.duration * 100)
        },
        timeupdate(event) {
            // 播放中
            // played 已播放长度

            let $music = event.target
            this.running = Math.round($music.currentTime / $music.duration * 100)
        }
    },
    computed: {
        modeIcon() {
            return ['loop', 'single', 'random'][this.playMode]
        },
        currentSong() {
            // console.log(this.$store.getters.currentSong)
            return this.$store.getters.currentSong
        }
    }
}
</script>
