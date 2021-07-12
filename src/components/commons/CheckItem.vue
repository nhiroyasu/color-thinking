<template>
  <div class="check-item lead">
    <span v-if="flag" class="badge bg-primary">OK</span>
    <span v-else class="badge bg-danger">BAD</span>
    <span class="content-type">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
  props: {
    flag: {
      type: Boolean,
      require: true,
      default: true,
    },
    label: {
      type: String,
      require: true,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.check-item {
  align-items: center;
  display: flex;
  margin: 8px 0;

  .content-type {
    padding: 0 8px;
  }
}
</style>
