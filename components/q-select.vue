<template>
  <div class="select-custom">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 443.52 443.52"
      version="1.1"
      viewBox="0 0 443.52 443.52"
      xmlSpace="preserve"
      @click="activeDropdown()"
    >
      <path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z" />
    </svg>
    <input
      v-model="selected"
      type="text"
      autocomplete="off"
      readonly
      :placeholder="placeholder"
      @click="activeDropdown()"
      @blur="outside()"
    >
    <div class="q-dropdown" :class=" active ? 'q-dropdown-show': 'q-dropdown-hidden'">
      <ul>
        <slot />
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'QSelect',
  props: {
    // eslint-disable-next-line vue/require-prop-types
    value: {
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    selected: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    activeDropdown () {
      // eslint-disable-next-line no-console
      console.log('1')
      this.active = !this.active
      const dropdown = this.$el.querySelector('.q-dropdown')
      const options = this.$el.querySelector('ul')
      const svg = this.$el.querySelector('.select-custom svg')
      if (this.active) {
        dropdown.style.height = options.offsetHeight + 'px'
        svg.style.transform = 'rotate(90deg)'
      } else {
        dropdown.style.height = '0px'
        svg.style.transform = 'rotate(-90deg)'
      }
    },
    outside () {
      // eslint-disable-next-line no-console
      console.log('2')
      this.activeDropdown()
    }
  }
}
</script>
<style lang="scss" scope>
.select-custom {
  position: relative;
  z-index: 9999;
  svg{
    width: 12px;
    height: 12px;
    fill: #adb5bd;
    position: absolute;
    right: 10px;
    top: calc(50% - 6px);
    transform: rotate(-90deg);
    transition: transform .3s;
    z-index: 10;
    cursor: pointer;
  }
  input {
    cursor: pointer;
    border: 0;
    outline: 0;
    background: rgb(222, 221, 221);
    height: 48px;
    border-radius: 8px;
    padding-left: 10px;
    padding-right: 10px;
  }
  ul{
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    list-style: none;
    border: 1px solid #DCDCE4;
    width: 100%;
    border-radius: 8px;
    padding: 5px;
    background-color: rgb(255, 255, 255);
    li{
      padding: 5px;
      border-radius: 8px;
      &:hover{
        background-color: rgb(246, 239, 239);
      }
    }
    li + li{
      margin-top: 5px;
    }
  }
  .q-dropdown{
    height: 0;
    transition:all 0.1s ease;
    overflow: hidden;
    &-show{
      animation: showOption 0.2s;
    }
    &-hidden{
      animation: hiddenOption 0.2s;
    }
  }
  @keyframes showOption {
    from { opacity: 0}
    to {opacity: 1}
  }
  @keyframes hiddenOption {
    from { opacity: 1}
    to {opacity: 0}
  }
}
</style>
