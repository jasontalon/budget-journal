<template>
  <div>
    <ul>
      <li v-for="budget in this.$store.state.budgets" :key="budget.id">
        <div>
          <div>{{ budget.name }}</div>
          <div>testing lang {{ budget.amount }}</div>  
          <div>{{ budget.category }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
