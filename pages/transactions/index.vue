<template>
  <div>
    <header-bar>Transactions</header-bar>
    <div>
      <div>Transactions</div>
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
import AddButton from '~/components/AddButton.vue'
import HeaderBar from '~/components/HeaderBar.vue'
import dayjs from 'dayjs'
import TransactionItemIcon from '~/components/icons/TransactionItemIcon.vue'
export default {
  components: { HeaderBar, AddButton, TransactionItemIcon },
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
  mounted() {},

  methods: {
    transactionsByDate: function (date) {
      return this.$store.state.transactions.transactions.filter(
        (p) => p.date === date
      )
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
