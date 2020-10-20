<template>
  <p v-for="(item, index) in list" :key="index" :ref="appendItem">{{ item }}</p>
  <p>a: {{ a }}</p>
  <p>b: {{ b }}</p>
  <p>c: {{ c }}</p>
  <p>d: {{ d }}</p>
  <p>e: {{ e }}</p>
  <p>f: {{ f }}</p>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
export default {
  name: 'forRef',
  setup() {
    const a = reactive(0)
    const b = reactive([])
    const c = reactive({a: 1})
    const d = ref(1)
    const e = ref(['a', 'b'])
    const f = ref({b: 1})
    let itemDom = []
    const appendItem = (el) => {
      console.log('push  el', el)
      itemDom.push(el)
    }
    onMounted(() => {
      e.value.push('c')
      b.push(3)
      console.log('itemDom', itemDom)
      console.log('itemDom', b)
    })
    return {
      list: ['张三', '李四', '王麻子'],
      appendItem,
      a, b, c, d, e, f
    }
  }
}
</script>