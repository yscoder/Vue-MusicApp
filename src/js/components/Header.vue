<style lang="less">
.m- {
    &hd {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 56px;
        background: #4CAF50;
        font-size: .16em;

        .container {
            margin-top: 8px;
            margin-bottom: 8px;
        }

        ::-webkit-input-placeholder {
            color: #73BB6E;
        }
    }
    &key {
        border: none;
        display: block;
        width: 100%;
        height: 40px;
        padding: 0 10px 0 28px;
        background: #388E3C;
        border-radius: 16px;
        color: #fff;
        transition: width .3s;


    }
    &so {
        border: none;
        color: #C8E6C9;
        white-space: nowrap;
        margin-left: 10px;
        padding: 0 10px;
        line-height: 40px;
        background: none;
        border-radius: .3em;

        &:active {
            background: #388E3C;
        }
    }
}
</style>
<template>
    <header id="m-hd" class="m-hd">
        <div class="flex-row container">
            <div class="flex-col">
                <input type="text" class="m-key" v-model="key" placeholder="歌名 艺人 专辑">
            </div>
            <button type="button" class="m-so" @click="search">搜索</button>
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
