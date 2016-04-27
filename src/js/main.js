var Vue = require('Vue');

Vue.use(require('vue-resource'));

new Vue({
    el: 'body',
    components: {
        'app': require('./App')
    }
});
