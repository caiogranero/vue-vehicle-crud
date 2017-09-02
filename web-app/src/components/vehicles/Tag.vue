<template>
  <md-layout md-flex="100" md-align="center" id="tag-area">
    <md-layout md-flex="90" md-align="start" md-vertical-align="center" id="tag-info">
      <div id="tag-brand">FIAT</div>
      <div id="tag-model">Palio G5 1.6 Flex</div>
      <div id="tag-year">2016</div>
    </md-layout>
    <md-layout md-flex="10" md-align="end" md-vertical-align="center">
      <md-icon class="icon-pointer custom-icon">local_offer</md-icon>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'Tag'
}
</script>

<style scoped lang="sass">
  #tag-area
    padding: 10px 20px 10px 20px
    background-color: white
    height: 100px

  #tag-area:hover
    background-color: rgb(241, 242, 240)

  #tag-info
    display: grid

  #tag-brand
    font-weight: 500
    font-size: 16px
    color: rgb(42, 49, 56)

  #tag-model
    font-weight: 500
    font-size: 16px
    color: #1D7555

  #tag-year
    font-weight: 500
    font-size: 16px
    color: rgba(42, 49, 56, 0.5)
</style>
