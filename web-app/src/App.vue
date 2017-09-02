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

.custom-background-color
  background-color: rgb(42, 49, 56) !important

.custom-icon
  color: rgb(42, 49, 56)

.custom-icon:hover
  color: rgb(24, 156, 108)

#app
  background-color: #E2E4E1
  height: 100%

.btn-action
  height: 50px
  width: 130px
  background-color: rgb(42, 49, 56) !important

body
  height: 100%

.md-input-focused:after
  background-color: rgb(42, 49, 56) !important

.md-input-focused label
  color: rgb(42, 49, 56) !important

.md-theme-default.md-switch.md-checked .md-switch-container
  background-color: rgba(42, 49, 56, 0.5) !important

.md-theme-default.md-switch.md-checked .md-switch-thumb
  background-color: rgb(42, 49, 56) !important
</style>
