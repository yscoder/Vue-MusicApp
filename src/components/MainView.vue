<template>
    <div class="main-view" id="main-view" transition="fade-out-left" transition-mode="in-out">
        <music-header></music-header>
        <play-list></play-list>
    </div>

</template>

<script>
var Header = require('./Header');
var List = require('./PlayList');

module.exports = {
    components: {
        'music-header': Header,
        'play-list': List
    }
};

</script>
