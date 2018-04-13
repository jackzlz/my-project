<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view/>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/Header'
import FooterComponent from './components/Footer'

export default {
  name: 'app',

  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>

</style>
