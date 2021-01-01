<template>
  <div>
    <header-bar
      :canGoBack="true"
      :canSave="
        transaction.date !== '' &&
        transaction.budget !== '' &&
        transaction.transactionType !== ''
      "
      @save="save()"
      >Edit Transaction</header-bar
    >
    <div class="m-4 space-y-2">
      <date-field :value.sync="transaction.date">Date</date-field>
      <select-field
        :value.sync="transaction.transactionType"
        :items="['Expense', 'Income']"
        >Transaction Type</select-field
      >
      <select-field
        :value.sync="transaction.budget"
        :items="this.$store.state.budget.budgets.map((p) => p.name)"
        >Budget</select-field
      >
      <amount-field :value.sync="transaction.amount">Amount</amount-field>
      <input-field :value.sync="transaction.payee">Payee</input-field>
      <input-field :value.sync="transaction.category">Category</input-field>
      <button
        class="rounded-md bg-red-500 w-full h-10 text-white font-semibold shadow-md"
        @click="remove()"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import AmountField from '~/components/AmountField.vue'
export default {
  components: { AmountField },
  validate({ params, store }) {
    const found = !!store.state.transactions.transactions.find(
      (p) => p.id === params.id
    )
    return found
  },
  data() {
    return {
      transaction: {
        id: '',
        date: '',
        transactionType: '',
        budget: '',
        amount: 0,
        payee: '',
        category: '',
      },
    }
  },
  mounted() {
    const forUpdate = this.$store.state.transactions.transactions.find(
      (p) => p.id === this.$route.params.id
    )

    this.transaction = {
      ...forUpdate,
      amount: +forUpdate.amount,
      budget: this.budgetName(forUpdate.budget),
    }
    console.log(this.transaction)
  },
  methods: {
    budgetName(budgetId) {
      return (
        this.$store.state.budget.budgets.find((p) => p.id === budgetId)?.name ??
        ''
      )
    },
    remove() {
      this.$store.commit('transactions/remove', this.transaction.id)
      this.$router.push({ path: '/transactions' })
    },
    save() {
      const _budget = this.$store.state.budget.budgets.find(
        (p) => p.name === this.transaction.budget
      )
      this.$store.commit('transactions/update', {
        ...this.transaction,
        budget: _budget.id,
      })

      this.$router.push({ path: '/transactions' })
    },
  },
}
</script>

<style></style>
