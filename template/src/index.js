import Vue from 'vue'
{{#if_eq theme 'element-ui'}}
import { Button, Message } from 'element-ui'
{{else}}
import { Button, Toast } from 'mint-ui'
{{/if_eq}}
import App from './App'
import router from './router'
import './style/main.css'

const UIComponents = [
  Button
]
for (let i = 0, len = UIComponents.length; i < len; i++) {
  Vue.component(UIComponents[i].name, UIComponents[i])
}
{{#if_eq theme 'element-ui'}}
Vue.prototype.$message = Message
{{else}}
Vue.prototype.$toast = Toast
{{/if_eq}}

const app = new Vue({
  router,
  ...App
})

app.$mount('#app')
