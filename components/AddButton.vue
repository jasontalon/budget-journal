<template>
  <div class="fixed mb-16 mr-4 bottom-0 right-0">
    <div v-on:click="go()"
      class="text-white h-16 w-16 bg-green-400 rounded-full shadow-lg flex justify-center"
    >
      <div class="w-10 h-10 self-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: { type: Object, required: true },
  },
  methods: {
    go() {
      this.$router.push(this.link)
    },
  },
}
</script>

<style></style>
