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
      conf: conf,
      months: [{
        month: 'january',
      },
      {
        month: 'february',
      },
      {
        month: 'march',
      },
      {
        month: 'april',
      },
      {
        month: 'may',
      },
      {
        month: 'june',
      },
      {
        month: 'july',
      },
      {
        month: 'august',
      },
      {
        month: 'setember',
      },
      {
        month: 'june',
      },
      {
        month: 'october',
      },
      {
        month: 'november',
      },
      {
        month: 'december',
      }]
    }
  },
  computed: {
    filiteredMap() {
      return this.conf.map(post => post)
    }
  }
}
</script>
