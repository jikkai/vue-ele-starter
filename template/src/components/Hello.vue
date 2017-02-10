<template>
  <div>
    <span id="hello" v-html="message"></span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'Hello World'
      }
    }
  }
</script>
