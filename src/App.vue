<template>
  <div class="title">
    Color Thinking
  </div>
  <router-view />
  <toast-wrapper />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToastWrapper from '@/components/layouts/ToastWrapper.vue';

export default defineComponent({
  name: 'App',
  components: {
    ToastWrapper,
  },
});
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';

body {
  background-color: #f0f0f0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 60px;

  @include xl {
    max-width: 1140px;
  }

  @include xxl {
    max-width: 1320px;
  }
}

.title {
  font-size: 5rem;
  color: #333333;
  letter-spacing: 0.1rem;
  margin: 24px 0px;
  text-align: center;
}

.material-shadow {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
