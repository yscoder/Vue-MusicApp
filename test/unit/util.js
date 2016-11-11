import Vue from 'vue'
import router from 'src/router'

let id = 0

// 创建DOM节点
const createElm = () => {
    const elm = document.createElement('div')

    elm.id = 'app' + ++id
    document.body.appendChild(elm)

    return elm
}

// 创建测试实例
exports.createVue = (comp, deps) => {
    // 关联依赖
    comp.components = deps || {}

    return new Vue({
        el: createElm(),
        router,
        render: (h) => h(comp)
    })
}

// 销毁实例
exports.destroyVM = (vm) => {
    vm.$el &&
    vm.$el.parentNode &&
    vm.$el.parentNode.removeChild(vm.$el)
}

// 触发事件
exports.triggerEvent = (elm, name, ...opts) => {
    let eventName

    if (/^mouse|click/.test(name)) {
        eventName = 'MouseEvents'
    } else if (/^key/.test(name)) {
        eventName = 'KeyboardEvent'
    } else {
        eventName = 'HTMLEvents'
    }
    const evt = document.createEvent(eventName)

    evt.initEvent(name, ...opts)
    elm.dispatchEvent
        ? elm.dispatchEvent(evt)
        : elm.fireEvent('on' + name, evt)

    return elm
}
