import { createApp } from 'vue'
import App from './App.vue'
import ButtonMessage from './components/button.vue'
import './index.css'
console.log('ButtonMessage--->', ButtonMessage)

const app = createApp(App)
app.component('ButtonMessage', ButtonMessage)
app.mount('#app')
