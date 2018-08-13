<template>
  <div>
    <b-container fluid>
      <b-navbar class="navbar" cols="12" type="dark" variant="blue" toggleable>
        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_dropdown_collapse">
            <b-navbar-brand href="/"><span>&lt;</span><b>Frontend</b>Helper<span>/&gt;</span></b-navbar-brand>
            <!-- Navbar dropdowns -->
            <b-navbar-nav class="ml-auto">
              <router-link class="nav-link"  v-for="routes in links"
              v-bind:key="routes.id"
              :to="`${routes.page}`" exact>{{routes.text}}</router-link>
            </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      links: [
        {
          id: 1,
          text: 'Home',
          page: '/'
        },
        {
          id: 2,
          text: 'About',
          page: '/About'
        },
        {
          id: 3,
          text: 'Contact',
          page: '/Contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  padding: 0;
  .navbar {
    background: white;
    .nav-link {
      color: rgba(0,0,0,.5) !important;
    }
    .router-link-active {
      color: rgb(0,0,0) !important;
      font-weight: 600;
    }
    .navbar-brand {
      color: rgba(0, 0, 0, 0.8);
      &:hover {
        color: black;
      }
      span {
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
}


</style>
