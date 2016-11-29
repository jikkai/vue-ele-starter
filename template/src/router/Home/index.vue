<template>
  <main>
    {{#if_eq theme 'element-ui'}}
    <el-button type="primary" @click.native="hello">primary</el-button>
    {{else}}
    <mt-button type="primary" @click.native="hello">primary</mt-button>
    {{/if_eq}}
    <hello></hello>
  </main>
</template>

<script>
  {{#if_eq theme 'element-ui'}}
  import { Button, Message } from 'element-ui'
  {{else}}
  import { Button, Toast } from 'mint-ui'
  {{/if_eq}}

  import Hello from 'components/Hello'

  export default {
    components: {
      {{#if_eq theme 'element-ui'}}
      ElButton: Button,
      {{else}}
      MtButton: Button,
      {{/if_eq}}
      Hello
    },
    methods: {
      hello () {
        {{#if_eq theme 'element-ui'}}
        Message('Hello Vue')
        {{else}}
        Toast({
          message: 'Hello Vue',
          iconClass: 'icon icon-success'
        })
        {{/if_eq}}
      }
    }
  }
</script>