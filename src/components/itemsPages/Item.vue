<template>
  <div>
          {{currentPage}}

    <div v-for="post in filteredPage" :key="post.title">
      <b-img-lazy :src="post.img" width="100"/><br>
      {{post.title}}
      {{post}}
    </div>
  </div>
</template>

<script>
import items from '../../storedData/items.json'

export default {
  name: 'Item',
  data () {
    return {
      items: items,
      currentPage: this.$route.query.page
    }
  },
  computed: {
    filteredPage () {
      return this.items
        .filter(post => {
          var zaz = post.link.indexOf(this.currentPage.toLowerCase()) > -1
          return zaz
        })
    }
  }
}
</script>
