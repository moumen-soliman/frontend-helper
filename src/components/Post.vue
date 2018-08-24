<template>
  <div class="media media-left">
    <a :href="url" :title="title" target="_blank" class="thumbnail thumbnail-small">
      <img :src="'https://www.google.com/s2/favicons?domain_url='+item.url"></img>
    </a>
    <div class="media-body">
      <h5 class="entry-title">
        <a :href="url" :title="title" target="_blank">{{ item.title }}</a>
        <span class="title-domain" v-if="item.domain">({{item.domain}})</span>
      </h5>
      <div class="preview-image" v-if="item.previewImage">
        <img :src="item.previewImage" />
      </div>
      <div class="entry-meta">
        <span v-for="category in item.categories">
          <a class="category" :href="category.url" target="_blank">{{ category.title }}</a>
        </span>
        <span class="dot" v-if="item.categories">•</span>
        <span v-if="item.creator">
          by {{ item.creator }}
        </span>
        <span class="dot" v-if="item.creator">•</span>
        <a :href="item.comments_url" title="View comments" target="_blank" v-if="item.comments_url">{{ item.num_comments }} comments</a>
      </div>
    </div>
  </div>
</template>


<script>
import { unescapem } from './../filters'

export default {
    name: 'Post',
    props: ['item'],
    computed: {
      url() {
        return unescape(this.item.url);
      },
      title() {
        return unescape(this.item.title);
      }
    }
}
</script>

<style lang="scss" scoped>
.media {
  background:white;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #e5e5e5;
  &:hover {
    background: #e9e9e9;
  }
  h5 {
    color: #000;
    margin-left: 5px;
    a {
      @extend h5
    }
  }
  .entry-meta {
    span,
    a {
      color: rgba(0, 0, 0, 0.5) !important;
      margin-left: 5px;
    }
  }
}
</style>

