<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from '@/components/header/Header'

export default {
  name: 'app',
  components: { HeaderComponent }
}
</script>

<style lang="sass">
.icon-pointer
  cursor: pointer

#app
  background-color: #E2E4E1
  height: 100%

body
  height: 100%
</style>
