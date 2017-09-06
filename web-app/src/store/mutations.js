const mutations = {
  setSelectedVehicle (state, selectedVehicle) {
    state.selectedVehicle = selectedVehicle
  },

  setSearchedVehicle (state, searchedVehicle) {
    state.searchedVehicle = searchedVehicle
  },

  setSearching (state, searching) {
    state.searching = searching
  }
}

export default mutations
