<template>
  <div class="check-item lead">
    <span v-if="data.flag" class="badge bg-success">OK</span>
    <span v-else class="badge bg-danger">BAD</span>
    <span class="content-type">{{ data.label }}</span>
    <button
      class="btn"
      type="button"
      data-bs-toggle="collapse"
      :data-bs-target="'#' + componentId"
      aria-expanded="false"
      :aria-controls="componentId"
    >
      <img
        class="img-block clickable"
        src="@/assets/images/help-black.svg"
        alt="help"
        @click="switchShowingDescription"
      />
    </button>
  </div>
  <div class="collapse" :id="componentId">
    <div class="card card-body">
      {{ data.description }}
      {{ data.reference ? data.reference : '' }}
    </div>
  </div>
</template>

<script lang="ts">
import { CheckItemProp } from '@/domains/CheckItemProp';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const componentId =
      'checkitem' + Math.floor(Math.random() * 100000).toString();
    return {
      componentId,
    };
  },
  props: {
    data: {
      type: CheckItemProp,
      require: true,
      default: new CheckItemProp(false, '', '', null),
    },
  },
  data() {
    return {
      isShowingDescription: false,
    };
  },
  methods: {
    switchShowingDescription() {
      this.isShowingDescription = !this.isShowingDescription;
    },
  },
  computed: {
    classForDesc(): string {
      return this.isShowingDescription ? 'collapse.show' : 'collapse';
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
