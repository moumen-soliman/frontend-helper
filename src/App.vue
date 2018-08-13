<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

body {
  background: #f7f8f9,
}
#app {
  font-family: 'Ubuntu', sans-serif;
  color: #1e90ff;
}
</style>
