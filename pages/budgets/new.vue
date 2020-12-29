<template>
  <div>
    <header-bar :canSave="true" v-on:save="save">New Budget</header-bar>
    <div class="m-4 space-y-2">
      <div>
        <div class="text-gray-600 text-sm">Name</div>
        <div>
          <input type="text" class="w-full rounded h-10 px-2" v-model="name" />
        </div>
      </div>
      <div>
        <div class="text-gray-600 text-sm">Amount</div>
        <div>
          <input
            type="text"
            class="w-full rounded h-10 px-2"
            v-model="amount"
          />
        </div>
      </div>
      <div>
        <div class="text-gray-600 text-sm">Category</div>
        <div>
          <input
            type="text"
            class="w-full rounded h-10 px-2"
            v-model="category"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '~/components/HeaderBar.vue'
export default {
  components: { HeaderBar },
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

      this.$store.commit('budgets/add', budget)
      this.$router.push({ path: '/' })
    },
  },
}
</script>
