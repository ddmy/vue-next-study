<template>
  <h3>这是一个全局的组件</h3>
  <button @click="message">这是一个菜单按钮</button>
</template>

<script>
export default {
  setup() {
    const message = () => {
      alert('hello, 彩蛋！')
    }
    return {
      message
    }
  }
}
</script>
