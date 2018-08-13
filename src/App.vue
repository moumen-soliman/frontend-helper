<template>
  <div id="app">
    <!--highlight message -->
    <HighlightMsg></HighlightMsg>
    <!-- Main navbar -->
    <Navigation></Navigation>
    <!-- Web container for all content -->
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
    Navigation,
    HighlightMsg
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

body {
  background: #f7f8f9 !important;
  font-family: 'Ubuntu', sans-serif;
}
#app {
  color: #1e90ff;
}
</style>
