<template>
    <header id="search-hd" class="m-hd">
        <div class="flex-row">
            <router-link to="/">
                <div class="m-hd-icon" v-waves.circle>
                    <i class="icon icon-lg icon-prev"></i>
                </div>
            </router-link>
            <div class="flex-col m-key-wrap">
                <input type="text" class="m-key" placeholder="歌名 艺人 专辑" 
                    v-model="key" @keyup.enter="search">
                <a href="javascript:;" class="m-key-icon" @click="search" v-waves.circle>
                    <i class="icon icon-search icon-lg"></i>
                </a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            key: ''
        }
    },
    methods: {
        search() {
            if (!this.key.trim()) return

            console.log(this.key)

            this.$store.dispatch('search', this.key)
        }
    }
}
</script>