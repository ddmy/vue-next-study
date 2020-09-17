<template>
  <h1>{{ name }}</h1>
  <input type="text" v-model="userInput" @keyup.enter="edit">
</template>

<script>
import editTitle from './editTitle'
export default {
  name: 'App',
  setup() {
    let { name, userInput, edit } = editTitle()
    return { name, userInput, edit }
  }
}
</script>
