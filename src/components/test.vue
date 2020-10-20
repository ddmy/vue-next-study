<template>
  <!-- <div v-for="(item, index) in list" :key="index" :ref="el => setItemRef(el, index)"></div> -->
  <div v-for="(item, index) in list" :key="index" :ref="el => setItemRef(el, index)"></div>
  <!-- <div v-for="(item, index) in list" :key="index" :ref="el => { if (el) itemRefs[i] = el }"></div> -->
  <h3>{{ itemRefs }}</h3>
</template>

<script>
import { reactive, onMounted, ref } from 'vue'
export default {
  name: 'testCom',
  setup() {
    const itemRefs = reactive([])
    const setItemRef = (el, index) => {
      itemRefs[index] = el
    }
    onMounted(() => {
      console.log('test--->  itemRefs', itemRefs)
    })
    return {
      list: ['张三', '李四', '王麻子'],
      setItemRef,
      itemRefs
    }
  }
}
</script>