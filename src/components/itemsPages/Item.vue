<template>
  <div>
    <div v-for="post in filiteredMap">
      <ul>
        <li>{{post.title}}</li>
        <ul>
          <div v-for="(key,index,value) in post.link">
            <div v-for="(key, index, value) in key">
              <li><a :href="key" target="_blank">{{index}}</a><br></li>
            </div>
        </div>
        </ul>
      </ul>
    </div>
 </div>
</template>

<script>
import items from '../../storedData/items.json';
import components from '../../storedData/components.json';

export default {
  name: 'Item',
  data () {
    return {
      items: items,
      components: components,
      currentPage: this.$route.query.page,
      info : null
    }
  },
  computed: {
    filteredPage () {
      return this.items
        .filter(post => {
          var includedLink = post.link.indexOf(this.currentPage.toLowerCase()) > -1
          return includedLink
        });
    },
    filiteredMap () {
      return this.components
        .filter(post => {
          var includedLink = post.related.indexOf(this.currentPage.toLowerCase()) > -1
          return includedLink;
        });
      }
    }
  }
</script>
