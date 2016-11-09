import Vue from 'vue'
import Header from 'src/components/Header'
import SearchView from 'src/components/SearchView'

describe('Header.vue', () => {
    it('Header is displayed', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render: (h) => h(Header)
        })
        expect(vm.$el.querySelector('.title').textContent).to.equal('Just Music')
    })
})

describe('SearchView.vue', () => {
    it('Input is normal ', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render: (h) => h(SearchView)
        })

        vm.key = '曾经的你'

        vm.$nextTick(() => {
            expect(vm.$el.querySelector('.m-key').textContent).to.equal('曾经的你')
        })
    })
})
