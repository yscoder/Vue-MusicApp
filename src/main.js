import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import Search from './components/SearchView'
import Main from './components/MainView'
import Waves from 'vue-directive-waves'
import VueResource from 'vue-resource'

Vue.use(Waves)
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: Main },
        { path: '/search', component: Search }
    ]
})

export default new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
