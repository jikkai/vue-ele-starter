import Vue from 'vue'
{{#if_eq theme 'element-ui'}}
import { Button, Message } from 'element-ui'
{{/if_eq}}
{{#if_eq theme 'mint-ui'}}
import { Button, Toast } from 'mint-ui'
{{/if_eq}}
import App from './App'
import router from './router'
import './style/main.css'

{{#unless_eq theme 'none'}}
const UIComponents = [
  Button
]
for (let i = 0, len = UIComponents.length; i < len; i++) {
  Vue.component(UIComponents[i].name, UIComponents[i])
}{{/unless_eq}}
{{#if_eq theme 'element-ui'}}
Vue.prototype.$message = Message
{{/if_eq}}
{{#if_eq theme 'mint-ui'}}
Vue.prototype.$toast = Toast
{{/if_eq}}

const app = new Vue({
  router,
  ...App
})

app.$mount('#app')
