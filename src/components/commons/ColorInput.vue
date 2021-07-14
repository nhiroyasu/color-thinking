<template>
  <div class="color-input">
    <label for="color" class="lead">
      {{ label }}
    </label>
    <input
      class="form-control form-control-color"
      type="color"
      name="color"
      :value="colorStr"
      @input="onChanged"
    />
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
    },
  },
  methods: {
    onChanged({ target }: Event) {
      if (target instanceof HTMLInputElement) {
        this.$emit('update:colorStr', target.value);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.color-input {
  margin: 4px 0;
}
</style>
