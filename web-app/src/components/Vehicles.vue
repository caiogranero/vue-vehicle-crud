<template>
  <div id="vehicles">
    <md-layout md-align="center">
      <md-layout md-flex="90" md-align="start">
        <page-title name="veículo" :onInserted="getVehicles"></page-title>
      </md-layout>
    </md-layout>

    <md-layout md-align="space-around" id="vehicle-content" v-if="!searching" md-flex="100">
      <md-layout md-flex-small="90" md-flex-xsmall="90" md-flex="40" md-align="start" id="vehicle-tags-div">
        <h3>Lista de veículos</h3>
        <md-layout md-flex="100" md-align="start" id="tags-content" v-if="vehicles.length > 0">
          <tag v-for="vehicle in vehicles" :key="vehicle._id" :data="vehicle"></tag>
        </md-layout>
        <md-layout md-flex="100" md-align="start" id="tags-content" v-else>
          <label>Nenhum veículo encontrado</label>
        </md-layout>
      </md-layout>

      <md-layout md-flex-small="90" md-flex-xsmall="90" md-flex="40" md-align="start">
        <h3>Detalhes</h3>
        <md-layout md-flex="100" md-align="start" id="tags-content" v-if="vehicles.length > 0">
          <detail></detail>
        </md-layout>
      </md-layout>
    </md-layout>
    <md-layout md-align="space-around" id="vehicle-content" v-else>
      <spinner></spinner>
    </md-layout>
  </div>
</template>

<script>
import PageTitle from '@/components/structure/PageTitle'
import Tag from '@/components/vehicles/Tag'
import Spinner from '@/components/helpers/Spinner'
import Detail from '@/components/vehicles/Detail'

export default {
  name: 'Vehicles',
  components: { PageTitle, Tag, Detail, Spinner },
  data () {
    return {
      vehicles: []
    }
  },
  created () {
    this.getVehicles()
  },
  watch: {
    searchedVehicle () {
      this.vehicles = this.searchedVehicle
    }
  },
  computed: {
    searchedVehicle () {
      return this.$store.state.searchedVehicle
    },
    searching () {
      return this.$store.state.searching
    }
  },
  methods: {
    getVehicles () {
      this.$VehicleService.getAll().then(res => {
        this.vehicles = res.data.message
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

  h3
    font-weight: 500
    letter-spacing: 0px
    font-size: 16px
    color: #2A3138

  #vehicle-tags-div
    align-content: flex-start

  #vehicle-content
    justify-content: space-around

  #tags-content
    height: 400px
    overflow-y: auto
    align-content: flex-start
</style>
