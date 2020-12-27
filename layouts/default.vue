<template>
  <div class="relative">
    <div class="mb-12">
      <Nuxt />
    </div>
    <div class="fixed inset-x-0 bottom-0">
      <navigation />
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
export default {
  components: { Navigation },
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
