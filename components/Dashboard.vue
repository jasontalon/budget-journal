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
        <div class="text-5xl font-semibold">{{ balance | toCurrency }}</div>
      </div>
    </div>
    <div class="p-4 flex flex-col space-y-4">
      <random-quote />
    </div>
    <div class="mx-4">
      <div class="text-xs mb-2 flex flex-row justify-between">
        <div>Recent Transactions</div>
        <div
          class="text-green-700 font-semibold"
          @click="() => $router.push({ path: '/transactions' })"
        >
          View More
        </div>
      </div>
      <div class="space-y-4">
        <div
          class="bg-white rounded-lg p-4 h-"
          v-for="transaction in recentTransactions()"
          :key="transaction.id"
        >
          <div
            class="flex flex-row space-x-4"
            @click="
              () => $router.push({ path: '/transactions/' + transaction.id })
            "
          >
            <div
              class="flex-grow-0 bg-indigo-400 rounded-full h-8 w-8 flex justify-center self-center"
            >
              <div class="h-6 w-6 text-white self-center">
                <transaction-item-icon />
              </div>
            </div>
            <div class="flex-grow">
              <div class="flex flex-row justify-between">
                <div class="w-1/2">
                  <div class="font-semibold text-blue-800 capitalize text-sm">
                    {{ transaction.category }}
                  </div>
                  <div class="text-gray-800 text-xs uppercase">
                    {{ transaction.payee }}
                  </div>
                </div>
                <div class="w-1/2 text-right font-bold text-sm">
                  <div
                    :class="
                      transaction.transactionType === 'Expense'
                        ? 'text-red-500'
                        : 'text-green-800'
                    "
                  >
                    {{ transaction.amount | toCurrency }}
                  </div>
                  <div class="text-gray-800 text-xs uppercase">
                    {{ budgetName(transaction.budget) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-xs my-2 flex flex-row justify-between">
        <div>Budget</div>
        <div
          class="text-green-700 font-semibold"
          @click="() => $router.push({ path: '/budgets' })"
        >
          View More
        </div>
      </div>
      <div class="flex flex-col space-y-4">
        <div
          class="rounded-md bg-white p-3"
          v-for="budget in this.$store.state.budget.budgets"
          :key="budget.id"
        >
          <div class="flex flex-row justify-between">
            <div class="font-semibold text-gray-600 text-sm uppercase">
              {{ budget.name }}
            </div>
          </div>
          <div
            :class="
              'py-4 px-2 rounded-md ' +
              (isOverBudget(budget.id) ? 'bg-red-500' : 'bg-green-200')
            "
            @click="() => $router.push({ path: '/budgets/' + budget.id })"
          >
            <div class="flex flex-row justify-between">
              <div class="w-full text-left">
                <div>{{ totalSpent(budget.id) | toCurrency }}</div>
                <div class="text-xs uppercase">Spent</div>
              </div>
              <div class="w-full text-right">
                <div class="font-semibold">
                  {{ budget.amount | toCurrency }}
                </div>
                <div class="text-xs uppercase">Goal</div>
              </div>
            </div>
            <div class="mt-2" v-if="!isOverBudget(budget.id)">
              <div class="relative">
                <div class="absolute rounded-full bg-gray-500 w-full h-2"></div>
                <div
                  class="absolute rounded-full bg-green-500 h-2"
                  :style="
                    'width:' +
                    spendingPercentage(totalSpent(budget.id), budget.amount) +
                    '%'
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <add-button :link="{ path: '/transactions/new' }" />
  </div>
</template>

<script>
import Man from './icons/man.vue'
import RandomQuote from './RandomQuote.vue'
export default {
  computed: {
    balance() {
      const budgets = this.$store.state.budget.budgets
      const transaction = this.$store.state.transactions.transactions
      const totalIncome = this.$store.state.transactions.transactions
        .filter((p) => p.transactionType === 'Income')
        .map((p) => p.amount)
        .reduce((a, b) => {
          return +a + +b
        }, 0)

      console.log(totalIncome)
      const totalExpense = this.$store.state.transactions.transactions
        .filter((p) => p.transactionType === 'Expense')
        .map((p) => p.amount)
        .reduce((a, b) => {
          return +a + +b
        }, 0)
      return totalIncome - totalExpense
    },
  },
  methods: {
    isOverBudget(budgetId) {
      const budget = this.$store.state.budget.budgets.find(
        (p) => p.id === budgetId
      )
      return this.totalSpent(budgetId) > budget?.amount ?? 0
    },
    recentTransactions() {
      const transactions = this.$store.state.transactions.transactions

      return transactions.slice(0, 3)
    },

    totalSpent(budgetId) {
      const expenses = this.$store.state.transactions.transactions
        .filter((p) => p.transactionType === 'Expense' && p.budget === budgetId)
        .map((p) => p.amount)
        .reduce((a, b) => {
          return +a + +b
        }, 0)
      return expenses
    },
    budgetName(budgetId) {
      return (
        this.$store.state.budget.budgets.find((p) => p.id === budgetId)?.name ??
        ''
      )
    },

    spendingPercentage(spent, totalBudgetAmount) {
      console.log(totalBudgetAmount, spent, +(totalBudgetAmount / spent))
      return +(spent / totalBudgetAmount) * 100
    },
  },

  filters: {
    toCurrency(value) {
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      })

      return formatter.format(value) /* $2,500.00 */
    },
  },
}
</script>
