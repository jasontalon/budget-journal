<template>
  <div>
    <div class="text-gray-600 text-sm">
      <slot></slot>
    </div>
    <div>
      <input
        :value="value"
        type="date"
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
      type: String,
      required: false,
    },
  },
}
</script>
