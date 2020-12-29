<template>
  <div class="relative bg-gray-200 h-screen">
    <div class="pb-12">
      <Nuxt />
    </div>
    <div class="fixed inset-x-0 bottom-0">
      <navigation />
    </div>
  </div>
</template>

<script>
import HeaderBar from '~/components/HeaderBar.vue'
import Navigation from '~/components/Navigation.vue'
export default {
  components: { Navigation, HeaderBar },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
html {
  font-family: 'Montserrat', Arial;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
