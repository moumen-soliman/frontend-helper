<template>
  <div id="app">
    <HighlightMsg></HighlightMsg>
    <Navigation></Navigation>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import HighlightMsg from './components/HighlightMsg'

export default {
  name: 'app',
  components: {
    'Navigation': Navigation,
    'HighlightMsg': HighlightMsg
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
