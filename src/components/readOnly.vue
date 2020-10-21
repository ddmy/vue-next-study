<template>
  <div>
    readOnly 测试
    <p>readOnlyState ---> {{ readOnlyState }}</p>
    <p>isReadonlyState ----> {{ isReadonlyState }}</p>
    <p>state----> {{ state }}</p>
  </div>
</template>

<script>
import { readonly, isReadonly, reactive, onMounted } from 'vue'
export default {
  name: 'readOnly',
  setup() {
    const state = reactive({a: 1})
    const readOnlyState = readonly(state)
    onMounted(() => {
      setTimeout(() => {
        state.a = 2
        readOnlyState.a = 10
      }, 2000)
    })
    return {
      readOnlyState,
      isReadonlyState: isReadonly(readOnlyState),
      state
    }
  }
}
</script>