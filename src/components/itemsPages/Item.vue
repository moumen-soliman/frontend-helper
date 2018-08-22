<template>
  <b-container>
    <router-link class="backHome-arrow" :to="`/`" exact>⮪</router-link>
    <b-row>
      <div class="item-container" v-for="post in filiteredPage">
        <b-col>
          <b-img-lazy class="pull-right" :src="require(`../../assets/images/items/${post.img}`)"/>
        </b-col>
        <b-col class="item-details">
          <h2>{{post.title}}</h2>
          <p>{{post.overview}}</p>
          <a :href="'https://github.com/topics/'+post.link" target="_blank">Github Topic</a> -
          <a :href="post.url" target="_blank">Website</a>
        </b-col>
      </div>
    </b-row>
    <hr>
    <div class="item-collection">
      <h3>Related Links</h3><br>
      <b-row>
        <b-col cols="4" v-for="post in filiteredMap">
          <ul class="main-ul">
            <li><h5>{{post.title}}</h5></li>
            <ul>
              <div v-for="(key,index,value) in post.link">
                <div v-for="(key, index, value) in key">
                  <li><a :href="key" target="_blank">{{index}}</a><br></li>
                </div>
              </div>
            </ul>
          </ul>
        </b-col>
      </b-row>
      <hr>
      <h3>Books</h3><br>
      <b-row>
        <b-col cols="6" v-for="post in filiteredBooks">
          <li><a :href="post.link" target="_blank">{{post.title}}</a><br></li>
        </b-col>
      </b-row>
      <hr>
      <h3>Tutorials</h3><br>
      <b-row>
        <b-col cols="6" v-for="post in filiteredTutorials">
          <li><a :href="post.link" target="_blank">{{post.title}}</a><br></li>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import items from '../../storedData/items.json';
import components from '../../storedData/components.json';
import books from '../../storedData/books.json';
import tutorials from '../../storedData/tutorials.json';

export default {
  name: 'Item',
  data () {
    return {
      items: items,
      components: components,
      books: books,
      tutorials: tutorials,
      currentPage: this.$route.query.page,
      info : null
    }
  },
  computed: {
      filiteredPage () {
        return this.items
          .filter(post => {
            var includedLink = post.link.indexOf(this.currentPage.toLowerCase()) > -1
            return includedLink
          });
      },
      filiteredMap () {
        return this.components
          .filter(post => {
            var includedLink = post.related.toString().indexOf(this.currentPage.toLowerCase()) > -1
            return includedLink;
          });
      },
      filiteredBooks () {
        return this.books
          .filter(post => {
            var includedLink = post.related.toString().indexOf(this.currentPage.toLowerCase()) > -1
            return includedLink;
          });
      },
      filiteredTutorials () {
        return this.tutorials
          .filter(post => {
            var includedLink = post.related.toString().indexOf(this.currentPage.toLowerCase()) > -1
            return includedLink;
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
.fa-arrow-left:before {
  content:"\f060"
}
.backHome-arrow {
  width: 39px;
  height: 40px;
  background: #dedfe0;
  border-radius: 5px;
  padding: 0px 7px;
  font-size: 26px;
  border: 1px solid #e3e3e3;
  color: #373757;
  text-decoration: none;
  &:hover {
    border: 1px solid #1e90ff;
  }
}
h3 {
  color: #373757;
}
.item-container {
  width: 100%;
  img {
    width: 65px;
    margin: auto;
    float: right;
  }
  .item-details {
    color: #373757;
  }
}

.main-ul {
  list-style: none;
  background: white;
  border-radius: 5px;
  padding: 15px 20px;
  border: 1px solid #e3e3e3;
  box-shadow: 5px 5px 5px rgba(209, 214, 219, 0.3);
  height: 30vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.3em;
  }
  &::-webkit-scrollbar-track {
    border-left: 1px solid #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
  }
  h5 {
    border-bottom: 1px solid #dfe0e1;
    padding-bottom: 9px;
    color: #373757;
  }
  ul {
    list-style: circle;
    li {
      margin: 5px auto;
    }
  }
}
.item-collection {
  li {
    padding: 0;
    margin: 15px 0;
  }
}
</style>
