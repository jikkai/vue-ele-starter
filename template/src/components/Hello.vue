<template>
  <div>
    <span id="hello" v-html="message"></span>
  </div>
</template>

{{#if vcc}}
<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class Hello extends Vue {
    message = 'Hello World'
  }
</script>
{{else}}
<script>
  export default {
    data () {
      return {
        message: 'Hello World'
      }
    }
  }
</script>
{{/if}}