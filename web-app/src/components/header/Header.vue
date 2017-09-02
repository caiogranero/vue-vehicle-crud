<template>
  <md-layout id="header" md-align="center">
    <md-layout md-flex="45" md-align="start" id="title-div">
      <img src="../../assets/drop.svg" class="icon-pointer" width="40" height="224" @click="$router.push({name: 'Vídeos em destaque'})">
      <h1 id="title">FULLSTACK</h1>
    </md-layout>
    <md-layout md-flex="50" md-align="end">
      <input type="text" placeholder="BUSCA por um veículo" id="search-input" @keyup="initKeyTimer()" v-model="qSearch">
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      qSearch: '',
      keyTimer: null
    }
  },
  methods: {
    // Timeout to check automatic when the user type a query
    initKeyTimer () {
      if (this.keyTimer) {
        clearTimeout(this.keyTimer)
      }
      this.keyTimer = setTimeout(() => {
        this.$store.commit('setQuery', this.qSearch)
      }, 600)
    }
  }
}
</script>

<style lang="sass">

#header
  min-height: 60px

#header
  background-color: #2A3138
  color: white
  justify-content: flex-end

#header h1
  font-size: 20px
  text-transform: uppercase
  font-weight: 400
  letter-spacing: 2px
  margin-left: 15px
  
#search-input
  border: 0px
  background: rgba(0, 0, 0, 0.3)
  text-align: start
  color: white
  padding: 10px 16px
  width: 100%

#search-input:focus
  outline: white

#title-div
  align-items: center

</style>