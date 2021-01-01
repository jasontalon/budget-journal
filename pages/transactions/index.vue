<template>
  <div>
    <header-bar>Transactions</header-bar>
    <div>
      <div>Transactions</div>
      <div class="flex flex-row mx-2 justify-center bg-white rounded-md p-2">
        <div class="flex-grow-0 h-4 w-4 self-center"><search-icon /></div>
        <input
          placeholder="Search here..."
          class="outline-none appearance-none flex-grow pl-2"
          type="text"
          v-model="searchTerm"
        />
      </div>
      <div class="flex flex-col space-y-2">
        <div v-for="date in this.dates" :key="date">
          <div class="mx-2">
            <div class="text-sm text-gray-600">{{ date | longDate }}</div>
            <div class="flex flex-col space-y-2">
              <div
                class="bg-white rounded-lg p-4 h-"
                v-for="transaction in transactionsByDate(date)"
                :key="transaction.id"
              >
                <div
                  class="flex flex-row space-x-4"
                  @click="update(transaction.id)"
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
                        <div
                          class="font-semibold text-blue-800 capitalize text-sm"
                        >
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
                          {{ transaction.amount }}
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
          </div>
        </div>
      </div>
    </div>

    <add-button :link="{ path: '/transactions/new' }" />
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data() {
    return { searchTerm: '' }
  },
  computed: {
    dates: function () {
      const dates = this.$store.state.transactions.transactions.map(
        (p) => p.date
      )
      return [...new Set(dates)]
    },
  },
  filters: {
    longDate: function (val) {
      return dayjs(val).format('MMMM D, YYYY')
    },
  },

  methods: {
    transactionsByDate: function (date) {
      if (this.searchTerm === '')
        return this.$store.state.transactions.transactions.filter(
          (p) => p.date === date
        )
      else {
        return this.$store.state.transactions.transactions.filter(
          (p) =>
            p.date === date &&
            (p.payee.toLowerCase().includes(this.searchTerm) ||
              p.category.toLowerCase().includes(this.searchTerm))
        )
      }
    },

    update(transactionId) {
      this.$router.push({
        path: '/transactions/' + transactionId,
      })
    },

    budgetName(budgetId) {
      return (
        this.$store.state.budget.budgets.find((p) => p.id === budgetId)?.name ??
        ''
      )
    },
  },
}
</script>
