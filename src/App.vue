<template>
  <div>
    <the-header></the-header>
    <the-footer></the-footer>
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
}
</script>

<style>
</style>