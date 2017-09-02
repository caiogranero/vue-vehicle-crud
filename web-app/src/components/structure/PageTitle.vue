<template>
  <md-layout md-flex="100" md-align="start" id="page-title">
    <md-layout md-flex="50" md-align="start">
      <h2>{{name}}</h2>
    </md-layout>
    <md-layout md-flex="50" md-align="end" >
      <md-icon class="md-size-1x" id="add-vehicle">add_circle</md-icon>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  h2
    text-transform: uppercase
    font-weight: 400
    letter-spacing: 0px
    font-size: 20px
    color: #2A3138

  #page-title
    margin-top: 60px
    border-bottom: 1px solid rgba(0, 0, 0, 0.2)
    margin-bottom: 30px

  #add-vehicle
    font-size: 34px

  .md-icon
    margin: auto 0px
    margin-right: 30px
</style>
