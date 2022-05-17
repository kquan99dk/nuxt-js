<template>
  <li class="option-custom" :class="{'show': show}" @click="selectOption">
    {{ label }}
  </li>
</template>
<script>
export default {
  name: 'QOption',
  props: {
    // eslint-disable-next-line vue/require-prop-types
    value: {
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectOption () {
      // eslint-disable-next-line no-console
      console.log('dsdsdsddds', this.value)
    }
  }
}
</script>
<style lang="scss" scope>
</style>
