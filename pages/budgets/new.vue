<template>
  <div>
    <header-bar :canGoBack="true" :canSave="true" v-on:save="save">New Budget</header-bar>
    <div class="m-4 space-y-2">
      <input-field :value.sync="name">Name</input-field>
      <input-field :value.sync="amount">Amount</input-field>
      <input-field :value.sync="category">Category</input-field>
    </div>
  </div>
</template>

<script>
import HeaderBar from '~/components/HeaderBar.vue'
import InputField from '~/components/InputField.vue'

export default {
  components: { HeaderBar, InputField },
  data() {
    return {
      name: '',
      amount: 0,
      category: '',
    }
  },
  methods: {
    save() {
      const budget = {
        id: this.$shortid(),
        amount: this.amount,
        category: this.category,
        name: this.name,
      }

      this.$store.commit('budget/add', budget)
      this.$router.push({ path: '/budgets' })
    },
  },
}
</script>
