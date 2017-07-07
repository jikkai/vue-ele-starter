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
  import Hello from 'components/Hello'

  export default {
    components: {
      Hello
    },
    methods: {
      hello () {
        {{#if_eq theme 'element-ui'}}
        this.$message('Hello Vue')
        {{else}}
        this.$toast({
          message: 'Hello Vue',
          iconClass: 'icon icon-success'
        })
        {{/if_eq}}
      }
    }
  }
</script>
