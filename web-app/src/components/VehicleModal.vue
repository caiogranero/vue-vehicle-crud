<template>
  <div id="vehicle-modal">
    <snack-bar :open="openSnackBar" :msg="msgSnackBar"></snack-bar>
    <md-dialog ref="dialog-vehicle" @open="onOpen" @close="close">
      <md-dialog-title md-align="start" id="vehicle-dialog-title">Novo veículo</md-dialog-title>

      <md-dialog-content>
        <md-layout md-flex="100" class="input-row">
          <md-layout md-flex="40" md-flex-small="100" md-flex-xmall="100">
            <md-input-container>
              <label>Veículo</label>
              <md-input v-model="vehicleInfo.veiculo"></md-input>
            </md-input-container>
          </md-layout>
          <md-layout md-flex="40" md-flex-small="100" md-flex-xmall="100">
            <md-input-container>
              <label>Marca</label>
              <md-input v-model="vehicleInfo.marca"></md-input>
            </md-input-container>
          </md-layout>
        </md-layout>

        <md-layout md-flex="100" class="input-row">
          <md-layout md-flex="40" md-flex-small="100" md-flex-xmall="100">
            <md-input-container>
              <label>Ano</label>
              <md-input v-model="vehicleInfo.ano" type="number"></md-input>
            </md-input-container>
          </md-layout>
          <md-layout md-flex="40" md-flex-small="100" md-flex-xmall="100">
            <md-switch v-model="vehicleInfo.vendido" id="sold" name="sold">Vendido</md-switch>
          </md-layout>
        </md-layout>

        <md-layout md-flex="100">
          <md-input-container>
            <label>Descrição</label>
            <md-textarea v-model="vehicleInfo.descricao" maxlength="1000"></md-textarea>
          </md-input-container>
        </md-layout>
      </md-dialog-content>

      <md-dialog-actions id="dialog-footer-vehicle">
        <md-button class="md-primary md-raised btn-action" @click="submitRequest()">{{type}}</md-button>
        <md-button class="md-primary md-raised btn-action" @click="closeDialog()">FECHAR</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import SnackBar from '@/components/helpers/SnackBar'

export default {
  name: 'VehicleModal',
  data () {
    return {
      vehicleInfo: {
        veiculo: '',
        marca: '',
        ano: '',
        vendido: false,
        descricao: ''
      },
      openSnackBar: false,
      msgSnackBar: ''
    }
  },
  components: {SnackBar},
  props: {
    type: String,
    open: Boolean,
    storedData: Object,
    onClose: Function
  },
  watch: {
    open () {
      this.$refs['dialog-vehicle'].open()
    }
  },
  methods: {
    close () {
      this.onClose()
    },

    closeDialog () {
      this.$refs['dialog-vehicle'].close()
    },

    onOpen () {
      if (this.type === 'editar') {
        Object.keys(this.vehicleInfo).forEach((key) => {
          this.vehicleInfo[key] = this.storedData[key]
        })
      }
    },

    isInfoFilled () {
      let filled = true
      Object.keys(this.vehicleInfo).forEach((el, idx) => {
        if (this.vehicleInfo[el] === '') {
          filled = false
        }
      })

      return filled
    },

    submitRequest () {
      if (this.isInfoFilled()) {
        if (this.type === 'add') {
          this.$VehicleService.create(this.vehicleInfo).then(res => {
            this.msgSnackBar = 'Veículo inserido com sucesso!'
            this.openSnackBar = !this.openSnackBar
            this.closeDialog()
          }).catch(err => {
            console.error(err)
            this.msgSnackBar = 'Houve um erro ao inserir o veículo, tente novamente.'
            this.openSnackBar = !this.openSnackBar
          })
        } else if (this.type === 'editar') {
          this.$VehicleService.patch(this.storedData._id, this.vehicleInfo).then(res => {
            this.msgSnackBar = 'Veículo atualizado com sucesso!'
            this.openSnackBar = !this.openSnackBar
            this.closeDialog()
          }).catch(err => {
            console.error(err)
            this.msgSnackBar = 'Houve um erro ao atualizar o veículo, tente novamente.'
            this.openSnackBar = !this.openSnackBar
          })
        }
      } else {
        this.msgSnackBar = 'Prencha todos os campos e tente novamente.'
        this.openSnackBar = !this.openSnackBar
      }
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
