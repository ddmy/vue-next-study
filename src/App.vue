<template>
  <h1>{{ name }}</h1>
  <input type="text" v-model="userInput" @keyup.enter="edit">
  <Timer></Timer>
</template>

<script>
import editTitle from './editTitle'
import Timer from './components/timer.vue'
export default {
  name: 'App',
  components: {
    Timer
  },
  setup() {
    let { name, userInput, edit } = editTitle()
    return { name, userInput, edit }
  }
}
</script>
