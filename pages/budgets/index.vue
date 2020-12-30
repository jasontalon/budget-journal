<template>
  <div class="relative">
    <header-bar>Budgets</header-bar>
    <div class="flex flex-col space-y-4 m-4">
      <div
        class="rounded-md bg-white p-3"
        v-for="budget in this.$store.state.budget.budgets"
        :key="budget.id"
      >
        <div class="flex flex-row justify-between">
          <div class="font-semibold text-gray-600 text-sm uppercase">
            {{ budget.name }}
          </div>
          <div class="h-4 w-4 text-red-400" v-on:click="remove(budget.id)">
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
        <div class="bg-green-200 py-4 px-2 rounded-md">
          <div class="flex flex-row justify-between">
            <div class="w-full text-left">
              <div>0</div>
              <div>Spent</div>
            </div>
            <div class="w-full text-right">
              <div class="font-semibold">{{ budget.amount }}</div>
              <div>Goal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <add-button :link="{ path: '/budgets/new' }" />
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
  methods: {
    remove(budgetId) {
      this.$store.commit('budget/remove', budgetId)
    },
  },
}
</script>
