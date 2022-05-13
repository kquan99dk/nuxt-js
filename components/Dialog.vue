<template>
  <transition v-if="dialog">
    <div
      class="modal fade"
      :class="{'show': dialog}"
      tabindex="-1"
      role="dialog"
      style="padding-right: 15px;"
      :style="dialog ? 'display: block' : 'display: none'"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div ref="modalContent" v-click-outside="onClickOutside" class="modal-content">
          <div class="modal-header">
            <div class="modal-title d-flex align-items-center">
              <slot name="header" />
              <span>
                {{ title }}
              </span>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" @click="closeDialog">
                <img src="@/assets/icons/icon-X.svg">
              </span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="body" />
          </div>
          <div v-if=" cancel || submit " class="modal-footer">
            <button v-if="cancel" type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeDialog">
              Cancel
            </button>
            <button v-if="submit" type="button" class="btn btn-primary" @click="$emit('Submit')">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Vue from 'vue'

Vue.directive('click-outside', {
  bind (el, binding, vnode) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
})

export default {
  name: 'DialogPage',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    cancel: {
      type: Boolean,
      default: true
    },
    submit: {
      type: Boolean,
      default: true
    },
    titleSubmit: {
      type: String,
      default: 'Submit'
    },
    requiredConfirm: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dialog: {
      get () {
        return this.value
      },
      set (value) {
        return this.$emit('input', value)
      }
    }
  },
  methods: {
    closeDialog () {
      this.dialog = false
    },

    onClickOutside (e) {
      if (this.requiredConfirm) {
        return
      }
      if (this.$el === e.target) {
        this.dialog = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.modal{
  background-color: rgba(0, 0, 0, 0.4);
  .modal-content{
    border: none;
    border-radius: 8px;
    padding: 24px;
    .modal-header{
      padding: 0;
      border: none;
      .modal-title{
        span{
          font-weight: 600;
          font-size: 20px;
          line-height: 28px;
        }
      }
    }
    .modal-body{
      margin-top: 24px;
      padding: 0;
    }
    .modal-footer{
      margin-top: 24px;
      padding: 0;
      border: none;
    }
  }
}
.modal.show .modal-dialog{
  transform: translate(0, -80px)
}
</style>
