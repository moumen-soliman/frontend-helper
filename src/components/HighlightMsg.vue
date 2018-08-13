<template>
  <div class="text-center">
    {{highlightMsg}}
    <a href="https://github.com/moumen-soliman/frontend-helper">Github Repo</a>
  </div>
</template>

<script>
export default {
  name: 'HighlightMsg',
  data () {
    return {
      highlightMsg: 'This project is free and open source for developers, so please feel free to contribute'
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  background: #1e90ff;
  color: white;
  padding: 5px 0;
  font-size: 12px;
  a {
    color: white;
    text-decoration: underline;
  }
}
</style>
