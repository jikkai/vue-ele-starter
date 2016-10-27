import Vue from 'vue'
import App from './App'
import router from './router'

const app = new Vue({
  router,
  ...App
})

app.$mount('#app')

export { app }
