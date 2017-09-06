import axios from 'axios'
const querystring = require('querystring')

const Vehicle = axios.create({
  baseURL: '/api/veiculos',
  timeout: 30000
})

export default {
  install (Vue) {
    const VehicleService = {
      name: 'VehicleService',

      get (params = {}) {
        return Vehicle.get('/find', params)
      },

      getAll () {
        return Vehicle.get('')
      },

      getById (id) {
        return Vehicle.get(`/${id}`)
      },

      create (params) {
        return Vehicle.post('', params)
      },

      put (id, params) {
        return Vehicle.put(`/${id}`, params)
      },

      patch (id, params) {
        return Vehicle.patch(`/${id}`, params)
      },

      query (params) {
        return Vehicle.get(`/find?${querystring.stringify(params)}`)
      }
    }

    Vue.$VehicleService = VehicleService
    Vue.prototype.$VehicleService = VehicleService
  }
}
