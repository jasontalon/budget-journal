<template>
  <div>
    <header-bar :canGoBack="true" :canSave="true" @save="save()"
      >Edit Transaction</header-bar
    >
    <div class="m-4 space-y-2">
      <input-field :value.sync="transaction.date">Date</input-field>
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
      <input-field :value.sync="transaction.amount">Amount</input-field>
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
export default {
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

    this.transaction = forUpdate
  },
  methods: {
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
