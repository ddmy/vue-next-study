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
</template>

<script>
import { ref, computed, reactive, toRefs } from 'vue'
import editTitle from './editTitle'
import Timer from './components/timer.vue'
import vModel from './components/vModel.vue'
export default {
  name: 'App',
  components: {
    Timer,
    vModel
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
      test2: '搬砖吧！'
    })
    let xingMing = computed(() => data.xing + data.ming)
    return { name, userInput, edit, xingMing, ...toRefs(data) }
  }
}
</script>
