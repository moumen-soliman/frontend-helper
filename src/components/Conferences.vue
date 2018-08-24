<template>
  <div>
    <b-row>
      <b-col class="conference-item" cols="4" v-for="post in filiteredMap">
        <a :href="post.link">
          <div>
            <h6>{{post.conference}}</h6>
            <p>{{post.location}}</p>
            <span>{{post.date}}</span>
          </div>
        </a>
      </b-col>
    </b-row>
  </div>
</template>
<script>

import conf from '../storedData/conference.json';

export default {
  name: 'Conferences',
  data () {
    return {
      conf: conf,
      months: [
      {
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
      }
      ]
    }
  },
  computed: {
    filiteredMap() {
      return this.conf.map(post => post)
    }
  }
}
</script>

<style lang="scss" scoped>
.conference-item {
  a {
    text-decoration: none;
    color: #000;
    div{
      background: white;
      border-radius: 5px;
      margin-bottom: 15px;
      padding: 15px;
      &:hover {
        background: #e9e9e9;
      }
      p {
        margin-bottom: 0;
        color: rgba(0, 0, 0, 0.5);
        font-size: 13px;
      }
      span {
        @extend p;
      }
    }
  }
}
</style>
