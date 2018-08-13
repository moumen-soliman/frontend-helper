<template>
  <div>
    <div v-for="post in baba" :key="post.title">
      {{post.title}}
      {{post.img}}
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
