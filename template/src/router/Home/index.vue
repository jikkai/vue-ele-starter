<template>
  <main>
    {{#if_eq theme 'element-ui'}}
    <el-button type="primary" @click.native="hello">primary</el-button>
    {{/if_eq}}
    {{#if_eq theme 'mint-ui'}}
    <mt-button type="primary" @click.native="hello">primary</mt-button>
    {{/if_eq}}
    <hello></hello>
  </main>
</template>

{{#if vcc}}
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Hello from '~components/Hello'

  @Component({
    components: {
      Hello
    }
  })
  export default class HomeRoute extends Vue {
    hello () {
      {{#if_eq theme 'element-ui'}}
      this.$message('Hello Vue')
      {{/if_eq}}
      {{#if_eq theme 'mint-ui'}}
      this.$toast({
        message: 'Hello Vue',
        iconClass: 'icon icon-success'
      })
      {{/if_eq}}
    }
  }
</script>
{{else}}
<script>
  import Hello from '~components/Hello'

  export default {
    components: {
      Hello
    },
    methods: {
      hello () {
        {{#if_eq theme 'element-ui'}}
        this.$message('Hello Vue')
        {{/if_eq}}
        {{#if_eq theme 'mint-ui'}}
        this.$toast({
          message: 'Hello Vue',
          iconClass: 'icon icon-success'
        })
        {{/if_eq}}
      }
    }
  }
</script>
{{/if}}
