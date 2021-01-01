<template>
  <div>
    <div class="text-gray-600 text-sm">
      <slot></slot>
    </div>
    <div>
      <input
        type="number"
        v-model="value"
        class="w-full rounded h-10 px-2"
        @change="(e) => this.$emit('update:value', e.target.value)"
        @keypress="(e) => this.$emit('update:value', e.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
}
</script>
