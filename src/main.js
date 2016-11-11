import Vue from 'vue'
import Waves from 'vue-directive-waves'
import App from './App'
import router from './router'
import store from './store'

Vue.use(Waves)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
