import { createVue, destroyVM } from '../util.js'
import Header from 'components/Header'

describe('Header.vue', () => {
    let vm

    afterEach(() => {
        destroyVM(vm)
    })

    it('Header is displayed', () => {
        vm = createVue(Header)
        expect(vm.$el.querySelector('.title').textContent).to.equal('Just Music')
    })
})

