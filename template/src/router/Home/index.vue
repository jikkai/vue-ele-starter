<template>
  <main>
    {{#isEnabled theme 'element-ui'}}
    <el-button type="primary" @click.native="hello">primary</el-button>
    {{else}}
    <mt-button type="primary" @click.native="hello">primary</mt-button>
    {{/isEnabled}}
    <hello></hello>
  </main>
</template>

<script>
  {{#isEnabled theme 'element-ui'}}
  import { Button, Message } from 'element-ui'
  {{else}}
  import { Button, Toast } from 'mint-ui'
  {{/isEnabled}}

  import Hello from 'components/Hello'

  export default {
    components: {
      {{#isEnabled theme 'element-ui'}}
      ElButton: Button,
      {{else}}
      MtButton: Button,
      {{/isEnabled}}
      Hello
    },
    methods: {
      hello () {
        {{#isEnabled theme 'element-ui'}}
        Message('Hello Vue')
        {{else}}
        Toast({
          message: 'Hello Vue',
          iconClass: 'icon icon-success'
        })
        {{/isEnabled}}
      }
    }
  }
</script>