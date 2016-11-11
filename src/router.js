import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from './view/Search'
import Main from './view/Main'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', component: Main },
        { path: '/search', component: Search }
    ]
})
