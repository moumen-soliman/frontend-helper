<template>
  <div>
    <b-row>
      <b-col cols="8">
          <input class="form-control" placeholder="Search" type="text" v-model="filter"/>
      </b-col>
      <b-col class="select-form" cols="4">
        <b-form-select v-model="selected">
            <option v-for="(post, index) in months" :value="post" :key="index">{{ post.month }}</option>
        </b-form-select>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col class="conference-item" xs="12" sm="6" lg="4" v-for="(post, index) in filiteredMap" :key="index">
        <a :href="post.link" target="_blank">
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

import conf from '../storedData/conference.json'
import months from '../storedData/helpers/months.json'

export default {
  name: 'Conferences',
  data () {
    return {
      conf: conf,
      filter: '',
      selected: {
        month: 'all'
      },
      months: [{ month: 'all' }].concat(months.map(m => { return { month: m } }))
    }
  },
  computed: {
    filiteredMap () {
      const { conf, selected, filter } = this
      return conf
        .filter(post => {
          if (selected.month === post.month) {
            return post
          } else if (selected.month === 'all') {
            return post
          }
        })
        .filter(post => post.conference.toLowerCase().includes(filter.toLowerCase()))
    }

  }
}
</script>

<style lang="scss" scoped>
.select-form {
  float: right;
  select {
    text-transform: capitalize;
  }
}
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
        @extend p
      }
    }
  }
}
</style>
