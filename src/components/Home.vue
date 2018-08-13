<template>
  <div>
    <div class="full-logos-items">
      <div class="item" v-for="post in posts" :key="post.title">
        <router-link class="nav-link" :to="`${post.link}`" exact>
          <div v-if="post.img != 'notfound'">
            <b-img-lazy :src="require(`../assets/images/items/${post.img}`)"/>
          </div>
          <div v-else>
            <b-img-lazy :src="`https://lightwidget.com/widgets/empty-photo.jpg`" width="100"/>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import item from '../storedData/items.json'

export default {
  name: 'Home', // this is the name of the component
  data () {
    return {
      posts: item
    }
  }
}
</script>

<style lang="scss" scoped>
.full-logos-items {
  padding: 50px 0;
  display: flex;
  justify-content: space-around;
  .item {
    margin: auto;
    img {
      width: 100px;
      -webkit-filter: grayscale(100%);
      &:hover {
        -webkit-filter: grayscale(0);
      }
    }
  }
}
</style>
