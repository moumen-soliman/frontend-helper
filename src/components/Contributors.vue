<template>
  <b-container>
    <div class="text-center">
      <h1>Contributors</h1>
      <p>Thanks for helping in front-end community</p>
    </div>
    <br>
    <div>
      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this getDatarmation at the moment, please try back later</p>
      </section>

      <section v-else>
        <div v-if="loading">Loading...</div>
        <div v-else>
          <b-row>
            <b-col class="contribute-item" cols="4" v-for="(key, index) in info" :key="index">
                <div class="main-object">
                <b-media>
                  <b-img slot="aside" :src="key.author.avatar_url" width="64" height="64" alt="placeholder" />
                  <h6 class="mt-0">@{{key.author.login}}</h6>
                  <p>{{key.total}} commits</p>
                  <a :href="key.author.html_url" target="_blank">
                    <button type="button" class="btn btn-primary btn-sm">
                      Profile
                    </button>
                  </a>
                </b-media>
                </div>
            </b-col>
          </b-row>
        </div>
      </section>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Contributors', // this is the name of the component
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    this.$http
      .get('https://api.github.com/repos/moumen-soliman/frontend-helper/stats/contributors')
      .then(response => (this.info = response.data.reverse()))
      .catch(error => console.log(error.response))
      .finally(() => this.loading = false)
  }
}
</script>
<style lang="scss" scoped>
.container {
  height: 80vh;
}
.text-center {
  h1,
  p {
    color: #000
  }
}
.main-object {
  background: white;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 5px 5px 5px #e5e5e5;
  h6 {
    color: rgba(0, 0, 0, 0.5);
  }
  p {
    margin-bottom: 0;
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
    display: initial;
  }
  span {
    @extend p;
  }
  .btn {
    float: right;
  }
  .media {
    display: flex;
    align-items: flex-start;
  }
  .media-body {
    flex: 1;
  }
}
</style>
