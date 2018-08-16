<template>
  <div>
    <h1>Contributors</h1>
    <p>Thanks for helping in front-end community</p>
    {{info}}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Contributors', // this is the name of the component
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.github.com/repos/moumen-soliman/frontend-helper/stats/contributors')
      .then(response => (this.info = response))
  }
}
</script>
<style lang="scss" scoped>
</style>
