<template>
    <div class="m-main">
        <ul class="m-list" id="searchList" v-if="searchList">
            <li class="m-list-item" v-for="item in searchList" >
                <a href="javascript:;" class="container ratina-bd bd-b" @click="onItemClick(item)">
                    <div class="ellipsis">{{item.name}} - {{item.singer}}</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>

module.exports = {

    props: {
        searchList: Array
    },
    methods: {
        onItemClick: function (item) {
            this.$http.get('/song/' + item.id).then(function (res) {
                console.log('url:' + res.data);
                item.url = res.data;
                this.$dispatch('add-song', item);

            }, function (res) {
                console.error('error: ' + res.status);
            });

        }
    }
};
</script>
