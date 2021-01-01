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
      <div class="flex flex-col justify-center" @click="goToCalculator">
        <div class="h-6 w-6 self-center"><calculator-icon /></div>
        <div class="text-xs">Calculator</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToCalculator() {
      const isIos = () => {
        return (
          [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod',
          ].includes(navigator.platform) ||
          // iPad on iOS 13 detection
          (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
        )
      }
      if (isIos()) {
        window.location.href =
          'https://apps.apple.com/us/app/calculator/id487127942'
      } else if (/(android)/i.test(navigator.userAgent)) {
        window.location.href =
          'https://play.google.com/store/apps/details?id=com.google.android.calculator&hl=en&gl=US'
      }
      console.log(isIos())
    },
  },
}
</script>

<style></style>
