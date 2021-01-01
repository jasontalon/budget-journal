<template>
  <div>
    <header-bar
      :canGoBack="true"
      :canSave="
        this.date !== '' && this.budget !== '' && this.transactionType !== ''
      "
      @save="save()"
      >Add Transaction</header-bar
    >
    <div class="m-4 space-y-2">
      <date-field :value.sync="date">Date</date-field>
      <select-field :value.sync="transactionType" :items="['Expense', 'Income']"
        >Transaction Type</select-field
      >
      <select-field
        :value.sync="budget"
        :items="this.$store.state.budget.budgets.map((p) => p.name)"
        >Budget</select-field
      >
      <amount-field :value.sync="amount">Amount</amount-field>
      <input-field :value.sync="payee">Payee</input-field>
      <input-field :value.sync="category">Category</input-field>
    </div>
  </div>
</template>

<script>
import HeaderBar from '~/components/HeaderBar.vue'
import InputField from '~/components/InputField.vue'
import AmountField from '~/components/AmountField.vue'
import SelectField from '~/components/SelectField.vue'
import DateField from '~/components/DateField.vue'
export default {
  components: { HeaderBar, InputField, SelectField, DateField, AmountField },
  data() {
    return {
      date: '',
      transactionType: '',
      budget: '',
      amount: 0,
      payee: '',
      category: '',
    }
  },
  methods: {
    save() {
      const _budget = this.$store.state.budget.budgets.find(
        (p) => p.name === this.budget
      )

      this.$store.commit('transactions/add', {
        id: this.$shortid(),
        budget: _budget?.id ?? '',
        date: this.date,
        transactionType: this.transactionType,
        amount: +this.amount,
        payee: this.payee,
        category: this.category,
      })

      this.$router.push({ path: '/transactions' })
    },
  },
}
</script>
