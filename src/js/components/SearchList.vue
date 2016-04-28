<template>
    <div class="m-main">
        <ul class="m-list" id="searchList" v-if="list">
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
