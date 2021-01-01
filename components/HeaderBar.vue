<template>
  <div
    class="w-full h-12 flex justify-between bg-blue-500 items-center px-2 text-white"
  >
    <div class="flex-grow-0">
      <div
        class="h-8 w-8"
        v-if="this.canGoBack"
        @click="() => this.$router.back()"
      >
        <back-icon />
      </div>
    </div>
    <div class="flex-grow text-center w-full"><slot>Header</slot></div>
    <div class="flex-grow-0">
      <div class="h-8 w-8" v-if="this.canSave" @click="() => $emit('save')">
        <check-icon />
      </div>
    </div>
  </div>
</template>

<script>
import CheckIcon from './icons/CheckIcon.vue'
import BackIcon from './icons/BackIcon.vue'
export default {
  components: { CheckIcon, BackIcon },
  props: {
    canSave: Boolean,
    canGoBack: Boolean,
  },
}
</script>

<style></style>
