var Vue = require('vue');
var VueRouter = require('vue-router');
var App = require('./components/App');
var Search = require('./components/SearchView');
var Main = require('./components/MainView');

Vue.use(require('./lib/vue-directive-waves'));
Vue.use(require('vue-resource'));
Vue.use(VueRouter);

var router = new VueRouter({
    transitionOnLoad: true
});

router.map({
    '/': {
        component: Main
    },
    '/search': {
        component: Search
    }
});

router.start(App, '#app');
