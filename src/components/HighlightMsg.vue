<template>
  <div class="text-center">
    {{highlightMsg}}
    <a target="_blank" href="https://github.com/moumen-soliman/frontend-helper">Github Repo</a>
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
  padding: 5px 10px;
  font-size: 0.8em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 22;
  a {
    color: white;
    text-decoration: underline;
  }
}
</style>
