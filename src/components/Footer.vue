<template>
  <footer>
    <p>{{message}}</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      message: 'Made with ❤ for Front-end Developers'
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding-top: 15px;
  padding-bottom: 10px;
  border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
  color: #000;
  p {
    text-align: center;
  }
}
</style>
