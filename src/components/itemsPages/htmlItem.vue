<template>
  <div>
    <div v-for="post in baba" :key="post.title">
      <b-img-lazy :src="post.img" width="100"/><br>
      {{post.title}}
    </div>
  </div>
</template>

<script>
import items from '../../storedData/items.json'

export default {
  name: 'htmlItem',
  data () {
    return {
      baba: items
    }
  }
}
</script>
