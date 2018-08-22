<template>
  <div>
    <div v-for="post in filiteredMap">
      {{post}}
    </div>
  </div>
</template>
<script>

import conf from '../storedData/conference.json';

export default {
  name: 'Conferences',
  data () {
    return {
      conf: conf
    }
  },
  computed: {
    filiteredMap() {
      return this.conf.map(post => post)
    }
  }
}
</script>
