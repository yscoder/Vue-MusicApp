import { createVue, destroyVM } from '../util.js'
import SearchView from 'src/view/Search'
import SearchHeader from 'components/SearchHeader'
import SearchList from 'components/SearchList'

describe('SearchView.vue', () => {
    let vm

    afterEach(() => {
        destroyVM(vm)
    })

    it('Input is normal', () => {
        vm = createVue(SearchView, {
            SearchHeader,
            SearchList
        })

        vm.key = '曾经的你'

        vm.$nextTick(() => {
            expect(vm.$el.querySelector('.m-key').textContent).to.equal('曾经的你')
        })
    })
})
