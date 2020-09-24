<template>
  <h1>{{ name }}</h1>
  <input type="text" v-model="userInput" @keyup.enter="edit">
  <Timer></Timer>
  <input type="text" v-model="vModelName">
  <vModel v-model="vModelName"></vModel>
  <ButtonMessage></ButtonMessage>
</template>

<script>
import { ref } from 'vue'
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
    let vModelName = ref('v-model')
    return { name, userInput, edit, vModelName }
  }
}
</script>
