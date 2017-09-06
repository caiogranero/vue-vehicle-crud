<template>
  <md-layout md-flex="100" md-align="center" id="detail-area">
    <vehicle-modal :open="openModal" type="editar" :storedData="vehicleInfo" :onClose="getVehicleInfo"></vehicle-modal>

    <md-layout md-flex="100" md-align="start" md-vertical-align="top" v-if="vehicleId">
      <div id="detail-model">{{vehicleInfo.veiculo}}</div>
    </md-layout>
    
    <md-layout md-flex="100" md-align="start" md-vertical-align="top" v-if="vehicleId">
      <md-layout md-flex="50" md-align="start" md-vertical-align="top" class="detail-brand-year">
        <div id="detail-type">Marca</div>
        <div id="detail-value">{{vehicleInfo.marca}}</div>
      </md-layout>

      <md-layout md-flex="50" md-align="start" md-vertical-align="top" class="detail-brand-year">
        <div id="detail-type">Ano</div>
        <div id="detail-value">{{vehicleInfo.ano}}</div>
      </md-layout>
    </md-layout>

    <md-layout md-flex="100" md-align="start" md-vertical-align="top" v-if="vehicleId">
      <p>{{vehicleInfo.descricao}}</p>
    </md-layout>

    <md-layout md-flex="100" id="footer-vehicle-description" v-if="vehicleId">
      <md-layout md-flex="90" md-align="start">
        <md-button class="md-raised md-primary btn-action" @click="editVehicle()">
          <md-icon>mode_edit</md-icon> Editar
        </md-button>
      </md-layout>
      <md-layout md-flex="10" md-align="end">
        <md-icon id="tag-icon" class="custom-icon icon-pointer">local_offer</md-icon>
      </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
import VehicleModal from '@/components/VehicleModal'

export default {
  name: 'Details',
  components: { VehicleModal },
  data () {
    return {
      vehicleInfo: {},
      openModal: false
    }
  },
  watch: {
    vehicleId () {
      this.getVehicleInfo()
    }
  },
  computed: {
    vehicleId () {
      return this.$store.state.selectedVehicle
    }
  },
  methods: {
    editVehicle () {
      this.openModal = !this.openModal
    },

    getVehicleInfo () {
      this.$VehicleService.getById(this.vehicleId).then(res => {
        res.data.message[0].vendido = typeof res.data.message[0].vendido === 'boolean' ? res.data.message[0].vendido : JSON.parse(res.data.message[0].vendido)
        this.vehicleInfo = res.data.message[0]
      })
    }
  }
}
</script>

<style scoped lang="sass">
  #detail-area
    padding: 20px 20px 10px 20px
    background-color: rgb(241, 242, 240)
    height: 400px

  #detail-type
    font-weight: 500
    font-size: 16px
    color: rgb(42, 49, 56)

  #detail-model
    font-weight: 400
    font-size: 20px
    color: #1D7555

  #detail-value
    font-weight: 500
    font-size: 16px
    color: rgba(42, 49, 56, 0.5)

  .detail-brand-year
    display: block

  #footer-vehicle-description
    border-top: 1px solid rgba(0, 0, 0, 0.2)
    align-items: center
</style>
