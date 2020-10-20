<template>
  <p v-for="(item, index) in list" :key="index" :ref="appendItem">{{ item }}</p>
</template>

<script>
import { onMounted, reactive } from 'vue'
export default {
  name: 'forRef',
  setup() {
    let itemDom = []
    const appendItem = (el) => {
      console.log('push  el', el)
      itemDom.push(el)
    }
    onMounted(() => {
      console.log('itemDom', itemDom)
    })
    return {
      list: ['张三', '李四', '王麻子'],
      appendItem
    }
  }
}
</script>