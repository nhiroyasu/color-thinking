<template>
  <div id="toast-wrapper"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
#toast-wrapper {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 16px;
  display: flex;
  flex-direction: column;
}
</style>
