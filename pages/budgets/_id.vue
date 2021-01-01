<template>
  <div>
    <header-bar :canGoBack="true" :canSave="true" v-on:save="save"
      >Edit Budget</header-bar
    >
    <div class="m-4 space-y-2">
      <input-field :value.sync="budget.name">Name</input-field>
      <amount-field :value.sync="budget.amount">Amount</amount-field>
      <input-field :value.sync="budget.category">Category</input-field>
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
import HeaderBar from '~/components/HeaderBar.vue'
import InputField from '~/components/InputField.vue'
import AmountField from '~/components/AmountField.vue'

export default {
  components: { HeaderBar, InputField, AmountField },
  data() {
    return {
      budget: { id: '', name: '', amount: 0, category: '' },
    }
  },
  mounted() {
    const forUpdate = this.$store.state.budget.budgets.find(
      (p) => p.id === this.$route.params.id
    )

    this.budget = { ...forUpdate, amount: +forUpdate.amount }
  },
  methods: {
    remove() {
      this.$store.commit('budget/remove', this.budget.id)
      this.$router.push({ path: '/budgets' })
    },
    save() {
      console.log(this.budget)
      this.$store.commit('budget/update', this.budget)
      this.$router.push({ path: '/budgets' })
    },
  },
}
</script>
