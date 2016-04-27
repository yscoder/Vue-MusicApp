<style lang="less">
    .m- {
        &main {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            height: 100%;
            max-height: 100%;
            padding: 56px 0;
            overflow-y: auto;
        }

        &list-item {
            line-height: 1.8;
            font-size: .16em;
            .container {
                display: block;
                padding: 8px 0;
                border-bottom: 1px solid #ddd;
            }
            &:active {
                background: #ccc
            }
            .sub {
                font-size: .14rem;
                color: #727272;
            }
        }
    }
</style>
<template>
    <div class="m-main" id="main">
        <ul class="m-list" id="list">
            <li class="m-list-item" v-for="item in list">
                <a href="javascript:;" class="container" @click="onItemClick(item)">
                    <div class="ellipsis">{{item.name}}</div>
                    <div class="ellipsis tr sub">
                        {{item.singer}} - {{item.album||'未知专辑'}}
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>

module.exports = {
    props: {
        list: Array
    },
    methods: {
        onItemClick: function (item) {
            this.$http.get('/song/' + item.id).then(function (res) {
                console.log('url:' + res.data);
                item.url = res.data;
                this.$dispatch('click-item', item);

            }, function (res) {
                console.error('error: ' + res.status);
            });

        }
    }
};
</script>
