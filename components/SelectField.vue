<template>
  <div>
    <div class="text-gray-600 text-sm">
      <slot></slot>
    </div>
    <div>
      <select
        :value="value"
        class="appearance-none w-full rounded-md h-12 px-2"
        @change="(e) => this.$emit('update:value', e.target.value)"
      >
        <option
          v-for="item in this.items"
          :key="item"
          :selected="value === item"
        >
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, required: true },
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
