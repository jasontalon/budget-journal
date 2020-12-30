<template>
  <div class="relative">
    <header-bar>Budgets</header-bar>
    <div class="flex flex-col space-y-4 m-4">
      <div
        class="rounded-md bg-white p-3"
        v-for="budget in this.$store.state.budget.budgets"
        :key="budget.id"
      >
        <div class="font-semibold text-gray-600 text-sm uppercase">
          {{ budget.name }}
        </div>
        <div class="bg-green-200 py-4 px-2 rounded-md">
          <div class="flex flex-row justify-between">
            <div class="w-full text-left">
              <div>0</div>
              <div>Spent</div>
            </div>
            <div class="w-full text-right">
              <div>{{ budget.amount }}</div>
              <div>Goal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <add-button :link='{path: "/budgets/new"}' />
  </div>
</template>

<script>
import AddButton from '~/components/AddButton.vue'
import HeaderBar from '~/components/HeaderBar.vue'
export default {
  components: { HeaderBar, AddButton },
  mounted() {
    console.log(this.$store.state)
  },
}
</script>
