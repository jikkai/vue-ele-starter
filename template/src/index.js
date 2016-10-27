import Vue from 'vue'
import App from './App'

const app = new Vue({
  ...App
})

export {app}

app.$mount('#app')
