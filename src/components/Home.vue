<template>
  <b-container>
    <input class="form-control" placeholder="Search" type="text" v-model="filter"/>
    <b-row class="full-logos-items text-center" align-v="center">
      <b-col class="item" xs="12" sm="6" md="3" lg="2" v-for="post in filteredPosts" :key="post.title">
        <router-link class="nav-link" :to="`/frontend-helper/item?page=${post.link[0]}`" exact>
          <div v-if="post.img != 'notfound'">
            <b-img-lazy :src="require(`../assets/images/items/${post.img}`)" :offset="150" />
          </div>
          <div v-else>
            <b-img-lazy :src="`https://lightwidget.com/widgets/empty-photo.jpg`" width="100" :offset="150" />
          </div>
        </router-link>
      </b-col>
      <div class="not-found" v-if="filteredPosts.length < 1">
        <h4>Not Found :( <br>If you need it you can add it on <a href="https://github.com/moumen-soliman/frontend-helper" target="_blank">Github Repo</a></h4>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import item from '@data/items.json'

export default {
  name: 'Home', // this is the name of the component
  data () {
    return {
      filter: '',
      posts: item
    }
  },
  computed: {
    filteredPosts () {
      const { filter, posts } = this
      return posts
        .filter(post => post.title.toLowerCase().includes(filter.toLowerCase()))
    }
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  h4 {
    margin: 28vh auto;
    a {
      text-decoration: underline;
    }
  }
}
.full-logos-items {
  padding: 30px 0;
  .item {
    margin: auto;
    padding: 15px;
    // display: inline-block;
    img {
      width: auto;
      max-width: 100px;
      height: auto;
      max-height: 100px;
      -webkit-filter: grayscale(97%);
      &:hover {
        -webkit-filter: grayscale(0);
      }
    }
  }
}
</style>
