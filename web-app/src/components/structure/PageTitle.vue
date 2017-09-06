<template>
  <md-layout md-flex="100" md-align="start" id="page-title">
    <md-layout md-flex="50" md-align="start">
      <h2>{{name}}</h2>
    </md-layout>
    <md-layout md-flex="50" md-align="end">
      <md-button class="md-icon-button md-raised custom-background-color" @click="newVehicle()">
        <md-icon id="add-vehicle">add</md-icon>
      </md-button>
    </md-layout>
    <vehicle-modal :open="openModal" type="add" :onClose="onInserted"></vehicle-modal>
  </md-layout>
</template>

<script>
import VehicleModal from '@/components/VehicleModal'

export default {
  name: 'PageTitle',
  components: { VehicleModal },
  props: {
    name: String,
    onInserted: Function
  },
  methods: {
    newVehicle () {
      this.openModal = !this.openModal
    }
  },
  data () {
    return {
      openModal: false
    }
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
    color: white
</style>
