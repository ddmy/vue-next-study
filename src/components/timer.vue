<template>
  <div>
    现在是北京时间: {{ year }}年{{ month }}月{{ days}}日{{ hours }}时{{ minute }}分{{ second }}秒
  </div>
</template>

<script>
import timer from '../js/timer.js'
export default {
  setup() {
    const { year, month, days, hours, minute, second } = timer()
    return {
      year, month, days, hours, minute, second
    }
  }
}
</script>