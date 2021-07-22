<template>
  <teleport to="#toast-wrapper">
    <div
      class="toast component-root"
      role="alert"
      ref="toast"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <i class="bi bi-clipboard"></i>
        <strong class="me-auto">{{ title }}</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">
        {{ msg }}
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Toast from 'bootstrap/js/dist/toast.js';

export default defineComponent({
  setup() {
    return {};
  },
  props: {
    isShow: {
      type: Boolean,
      require: true,
      default: false,
    },
    title: {
      type: String,
      requrie: true,
      default: '',
    },
    msg: {
      type: String,
      require: false,
    },
  },
  watch: {
    isShow(showFlag, prevShowFlag) {
      if (showFlag) {
        this.showToast();
      } else {
        this.hideToast();
      }
    },
  },
  methods: {
    showToast() {
      const toast = this.getToastInstance();
      if (toast !== null) {
        toast.show();
      }
    },
    hideToast() {
      const toast = this.getToastInstance();
      if (toast !== null) {
        toast.hide();
      }
    },
    getToastInstance(): Toast | null {
      if (this.$refs.toast instanceof Element) {
        const toast = new Toast(this.$refs.toast);
        return toast;
      } else {
        return null;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.component-root {
  margin: 8px 0;
}
</style>
