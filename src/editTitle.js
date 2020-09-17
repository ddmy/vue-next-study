import { ref } from 'vue'
/**
 * 我们已经讨论过了是否可以完全避免引入 ref 的概念而只使用响应性对象，但是：
 * 计算值的 getter 可以返回基础类型值，所以一个类似 ref 的容器是不可避免的。
 * 一些组合函数只接收或返回基础类型值，它们也需要被包裹成为一个对象才能够保持其响应性。
 * 如果框架不提供标准实现，那么用户最后会发明它们各自的 ref 模式 (从而造成生态的碎片化)。
 */
export default function () {
  let name = ref('hello, world')
  let userInput = ref('')
  function edit() {
    name.value = userInput.value
    userInput.value = ''
  }
  return {
    name,
    userInput,
    edit
  }
}