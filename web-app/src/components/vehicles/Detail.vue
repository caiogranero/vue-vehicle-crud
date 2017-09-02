<template>
  <md-layout md-flex="100" md-align="center" id="detail-area">
    <md-layout md-flex="100" md-align="start" md-vertical-align="top">
      <div id="detail-model">Palio G5 1.6 Flex</div>
    </md-layout>
    
    <md-layout md-flex="100" md-align="start" md-vertical-align="top">
      <md-layout md-flex="50" md-align="start" md-vertical-align="top" class="detail-brand-year">
        <div id="detail-type">Marca</div>
        <div id="detail-value">FIAT</div>
      </md-layout>

      <md-layout md-flex="50" md-align="start" md-vertical-align="top" class="detail-brand-year">
        <div id="detail-type">Ano</div>
        <div id="detail-value">2016</div>
      </md-layout>
    </md-layout>

    <md-layout md-flex="100" md-align="start" md-vertical-align="top">
      <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e
      vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de 
      tipos e os embaralhou para fazer um livro de modelos de tipos. </p>
      
      <p>Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração 
        eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando 
        a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando 
        passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'Details'
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
</style>
