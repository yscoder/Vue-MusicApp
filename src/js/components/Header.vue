<template>
    <header id="m-hd" class="m-hd">
        <div class="flex-row container">
            <div class="m-logo"><span class="icon icon-music icon-2x"></span></div>
            <div class="flex-col mr-both ellipsis">Just Music</div>
            <div>
                <span class="icon m-btn icon-search icon-2x" v-link="{ path: '/search' }"></span>
                <span class="icon m-btn icon-more icon-2x"></span>
            </div>
        </div>
    </header>
</template>

<script>
module.exports = {
    data: function () {
        return {
            key: '曾经的你'
        }
    },
    methods: {
        search: function () {

            if(!this.key.trim()) {
                return;
            }

            console.log(this.key);

            this.$http.get('/search/' + this.key + '/1').then(function(res){

                this.$dispatch('fetch-list', res.data.list);

            }, function (res) {
                console.error('error: ' + res.status);
            });
        }
    }
};
</script>
