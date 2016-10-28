<template>
  <main>
    {{#if mint}}
    <mt-button type="primary" @click.native="hello">primary</mt-button>
    {{/if}}
    {{#if element}}
    <el-button type="primary" @click.native="hello">primary</el-button>
    {{/if}}
  </main>
</template>

<script>
  {{#if mint}}
  import { Button, Toast } from 'mint-ui'
  {{/if}}
  {{#if element}}
  import { Button, Message } from 'element-ui'
  {{/if}}

  export default {
    components: {
      {{#if mint}}
      MtButton: Button
      {{/if}}
      {{#if element}}
      ElButton: Button
      {{/if}}
    },
    methods: {
      hello() {
        {{#if mint}}
        Toast({
          message: 'Hello Vue',
          iconClass: 'icon icon-success'
        })
        {{/if}}
        {{#if element}}
        Message('Hello Vue')
        {{/if}}
      }
    }
  }
</script>

<style {{#if sass}}lang="sass"{{/if}} scoped>

</style>