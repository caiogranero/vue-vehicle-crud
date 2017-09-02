<template>
  <div id="vehicle-modal">
    <md-dialog ref="dialog-vehicle"  @open="onOpen" @close="onClose">
      <md-dialog-title md-align="start" id="vehicle-dialog-title">Novo veículo</md-dialog-title>

      <md-dialog-content>
        <md-layout md-flex="100" class="input-row">
          <md-layout md-flex="40">
            <md-input-container>
              <label>Veículo</label>
              <md-input v-model="vehicle"></md-input>
            </md-input-container>
          </md-layout>
          <md-layout md-flex="40">
            <md-input-container>
              <label>Marca</label>
              <md-input v-model="brand"></md-input>
            </md-input-container>
          </md-layout>
        </md-layout>

        <md-layout md-flex="100" class="input-row">
          <md-layout md-flex="40">
            <md-input-container>
              <label>Ano</label>
              <md-input v-model="year"></md-input>
            </md-input-container>
          </md-layout>
          <md-layout md-flex="40">
            <md-switch v-model="sold" id="sold" name="sold">Vendido</md-switch>
          </md-layout>
        </md-layout>

        <md-layout md-flex="100">
          <md-input-container>
            <label>Descrição</label>
            <md-textarea v-model="description" maxlength="70"></md-textarea>
          </md-input-container>
        </md-layout>
      </md-dialog-content>

      <md-dialog-actions id="dialog-footer-vehicle">
        <md-button class="md-primary md-raised btn-action" @click="submitRequest()">ADD</md-button>
        <md-button class="md-primary md-raised btn-action" @click="closeDialog()">FECHAR</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: 'VehicleModal',
  data () {
    return {
      vehicle: '',
      brand: '',
      year: '',
      sold: false,
      description: ''
    }
  },
  watch: {
    openVehicleModal () {
      if (this.openVehicleModal) {
        this.$refs['dialog-vehicle'].open()
      }
    }
  },
  computed: {
    openVehicleModal () {
      return this.$store.state.openVehicleModal
    }
  },
  methods: {
    closeDialog (ref) {
      this.$refs['dialog-vehicle'].close()
    },
    onOpen () {
      console.log('Opened')
    },
    onClose (type) {
      this.$store.commit('setOpenVehicleModal', false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

#vehicle-dialog-title
  font-weight: 400
  letter-spacing: 0px
  font-size: 24px
  color: #2A3138

.md-dialog
  background-color: #E2E4E1 !important
  height: 500px
  width: 750px

.input-row
  justify-content: space-between

#dialog-footer-vehicle
  margin-bottom: 20px
  margin-right: 20px
</style>
