<template>
  <div class="form-check form-switch">
    <input
      type="checkbox"
      :id="name"
      class="form-check-input"
      :name="name"
      :value="switchValue.toString()"
      @input="onInput"
    />
    <label for="old-check-contents-switch" class="form-check-label">{{
      label
    }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
  props: {
    switchValue: {
      type: Boolean,
      require: true,
      default: false,
    },
    name: {
      type: String,
      require: true,
      default: 'app-switch',
    },
    label: {
      type: String,
      require: false,
    },
  },
  methods: {
    onInput({ target }: Event) {
      if (target instanceof HTMLInputElement) {
        this.$emit('update:switchValue', target.value === 'false');
      }
    },
  },
});
</script>

<style scoped></style>
