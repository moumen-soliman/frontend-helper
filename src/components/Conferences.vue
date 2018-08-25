<template>
  <div>
    <b-row>
      <b-col class="select-form" cols="12">
        <b-form-select v-model="selected">
            <option v-for="post in months" :value="post">{{ post.month }}</option>
        </b-form-select>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col class="conference-item" cols="4" v-for="post in filiteredMap">
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

import conf from '../storedData/conference.json';

export default {
  name: 'Conferences',
  data () {
    return {
      conf: conf,
      selected: {
        month: 'all'
      },
      months: [
        {
          month: 'all',
        },
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
    filiteredMap: function() {
      const { conf, selected } = this;
      return conf.filter(function(post) {
        if( selected.month == post.month) {
          return post
        } else if (selected.month == 'all'){
          return post
        }
      });
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
