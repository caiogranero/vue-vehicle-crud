<template>
  <div id="vehicles">
    <md-layout md-align="center">
      <md-layout md-flex="90" md-align="start">
        <page-title name="veículo"></page-title>
      </md-layout>
    </md-layout>

    <md-layout md-align="center">
      <md-layout md-flex="45" md-align="start">
        <h3>Lista de veículos</h3>
        <tag></tag>
      </md-layout>
      <md-layout md-flex="45" md-align="start">
        <h3>Detalhes</h3>
        <detail></detail>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
import PageTitle from '@/components/structure/PageTitle'
import Tag from '@/components/vehicles/Tag'
import Detail from '@/components/vehicles/Detail'

export default {
  name: 'Vehicles',
  components: { PageTitle, Tag, Detail }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

  h3
    font-weight: 500
    letter-spacing: 0px
    font-size: 16px
    color: #2A3138

</style>
