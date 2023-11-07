<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
    <the-footer v-show="$route.meta.show"></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
  mounted() {
    this.$store.dispatch('getCategoryList')
  },
}
</script>

<style>
</style>