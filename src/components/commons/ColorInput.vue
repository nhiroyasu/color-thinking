<template>
  <div class="color-input">
    <label for="color" class="lead">
      {{ label }}
    </label>
    <div class="color-inputs-wrapper">
      <input
        class="form-control form-control-color"
        type="color"
        name="color"
        :value="colorStr"
        @input="updateColor"
      />
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          name="hex-color"
          aria-describedby="clipboard-button"
          :value="colorStr"
          @input="updateColor"
        />
        <button
          class="btn btn-outline-primary"
          id="clipboard-button"
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="コピー"
          @click="copyToClipboard"
        >
          <i class="bi bi-clipboard"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
  props: {
    label: {
      type: String,
      require: true,
      default: '',
    },
    colorStr: {
      type: String,
      require: true,
      default: '',
    },
  },
  methods: {
    updateColor({ target }: Event) {
      if (target instanceof HTMLInputElement) {
        const upperCaseValue = target.value.toUpperCase();
        this.$emit('update:colorStr', upperCaseValue);
      }
    },
    copyToClipboard() {
      navigator.clipboard.writeText(this.colorStr);
    },
  },
});
</script>

<style lang="scss" scoped>
.color-input {
  margin: 4px 0;
}

.color-inputs-wrapper {
  display: flex;

  & > *:first-child {
    margin-right: 8px;
  }
}
</style>
