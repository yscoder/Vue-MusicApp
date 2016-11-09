<template>
    <header id="m-hd" class="m-hd">
        <div class="flex-row">
            <a href="//imys.net" target="_blank" class="m-hd-icon" v-waves>
                <i class="icon icon-music icon-lg"></i>
            </a>
            <div class="flex-col ellipsis title">Just Music</div>
            <router-link to="/search">
                <div class="m-hd-icon" v-waves.circle>
                    <i class="icon icon-search icon-lg"></i>
                </div>
            </router-link>
            <a href="javascript:;" class="m-hd-icon" v-waves.circle>
                <i class="icon icon-more icon-lg"></i>
            </a>
        </div>
    </header>
</template>

<script>
export default {}
</script>
