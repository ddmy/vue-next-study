<template>
  <h1 v-test-directive:a.log>{{ name }}</h1>
  <input type="text" v-model="userInput" @keyup.enter="edit">
  <Timer></Timer>
  <input type="text" v-model="vModelName">
  <vModel v-model="vModelName"></vModel>
  <ButtonMessage></ButtonMessage>
  <br>
  <input type="text" v-model="xing">
  <input type="text" v-model="ming">
  <p>姓名是: {{ xingMing }}---{{ test }}---{{ test2 }}</p>
  <br>
  <button @click="asyncComHidden = false">切换展示异步组件</button>
  <asyncCom v-if="!asyncComHidden"></asyncCom>
</template>

<script>
import { ref, computed, reactive, toRefs, defineAsyncComponent, onMounted } from 'vue'
import editTitle from './editTitle'
import Timer from './components/timer.vue'
import vModel from './components/vModel.vue'
const asyncCom = defineAsyncComponent(() => import('./components/async.vue'))
export default {
  name: 'App',
  components: {
    Timer,
    vModel,
    asyncCom
  },
  mounted() {
      console.log('app 入口组件挂载完毕')
      console.log(this.axios)
  },
  setup() {
    let { name, userInput, edit } = editTitle()
    // let vModelName = ref('v-model')
    // let xing = ref('')
    // let ming = ref('')
    let data = reactive({
      vModelName: 'v-model',
      xing: '',
      ming: '',
      test: '干活啦！',
      test2: '搬砖吧！',
      asyncComHidden: true
    })
    let xingMing = computed(() => data.xing + data.ming)
    onMounted(() => {
      console.log('on--mounted')
    })
    return { name, userInput, edit, xingMing, ...toRefs(data) }
  }
}
</script>
