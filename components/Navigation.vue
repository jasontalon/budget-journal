<template>
  <div class="h-12 bg-blue-500 text-white">
    <div class="h-full flex flex-row justify-evenly">
      <div
        class="flex flex-col justify-center"
        v-on:click="() => this.$router.push({ path: '/' })"
      >
        <div class="h-6 w-6 self-center"><home-icon /></div>
        <div class="text-xs text-center">Overview</div>
      </div>
      <div
        class="flex flex-col justify-center"
        v-on:click="() => this.$router.push({ path: '/budgets' })"
      >
        <div class="h-6 w-6 self-center">
          <budget-icon />
        </div>
        <div class="text-xs">Budget</div>
      </div>
      <div
        class="flex flex-col justify-center"
        @click="() => this.$router.push({ path: '/transactions' })"
      >
        <div class="h-6 w-6 self-center"><transaction-icon /></div>
        <div class="text-xs">Transaction</div>
      </div>
      <div class="flex flex-col justify-center">
        <div class="h-6 w-6 self-center"><calculator-icon /></div>
        <div class="text-xs">Calculator</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
