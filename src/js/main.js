var Vue = require('Vue');
var VueRouter = require('vue-router');
var App = require('./App');

Vue.use(require('vue-resource'));
Vue.use(VueRouter);

var router = new VueRouter({
    transitionOnLoad: true
});
var Search = require('./components/SearchView');
var Main = require('./components/MainView');

router.map({
    '/': {
        component: Main
    },
    '/search': {
        component: Search
    }
});

router.start(App, '#app');


// new Vue({
//     el: 'app',
//     components: {
//         app: App
//     }
// });
