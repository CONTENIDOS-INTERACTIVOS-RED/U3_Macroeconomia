<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="''")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    




</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
