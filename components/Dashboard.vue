<template>
  <div>
    <div class="bg-blue-500 h-48">
      <div class="absolute w-full flex flex-row-reverse pt-2 px-4">
        <div
          class="flex rounded-full bg-white h-12 w-12 justify-center border-2 border-gray-600"
        >
          <div class="h-8 w-8 self-center"><man /></div>
        </div>
      </div>
      <div
        class="pt-8 h-full flex flex-col justify-center items-center text-white antialiased"
      >
        <div class="text-xs">Available Balance</div>
        <div class="text-5xl font-semibold">100.00</div>
      </div>
    </div>
    <div class="p-4 flex flex-col space-y-4 ">
      <random-quote />
    </div>
  </div>
</template>

<script>
import Man from './icons/man.vue'
import RandomQuote from './RandomQuote.vue'
export default {}
</script>

<style></style>

RandomQuote
