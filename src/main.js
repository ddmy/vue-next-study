import { createApp } from 'vue'
import App from './App.vue'
import ButtonMessage from './components/button.vue'
import './index.css'

const app = createApp(App)
app.component('ButtonMessage', ButtonMessage)
app.directive('test-directive', {
  // 指令具有一组生命周期钩子
  // 在绑定元素的父组件挂载之前调用
  beforeMount(el, binding, vnode) {},
  // 绑定元素的父组件挂载时调用
  mounted(el, binding, vnode) {
    console.log('mounted', el, binding, vnode)
  },
  // 在包含组件的VNode更新之前调用
  beforeUpdate(el, binding, vnode, prevNode) {},
  // 在包含组件的VNode及其子组件的VNode之后调用 // 有更新
  updated(el, binding, vnode, prevNode) {},
  // 在绑定元素的父组件卸载之前调用
  beforeUnmount(el, binding, vnode) {},
  // 卸载绑定元素的父组件时调用
  unmounted(el, binding, vnode) {}
})
app.mount('#app')
