var Vue = require('vue');
var Vuex = require('vuex');

Vue.use(Vuex);

module.exports = new Vuex.Store({
    state: {
        songIndex: 0,
        playList: []
    },
    mutations: require('./mutations')
});
