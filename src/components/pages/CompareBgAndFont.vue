<template>
  <div class="compare-bg-and-font">
    <div class="operation-wrapper">
      <div class="color-input-wrapper">
        <div class="content-title">
          Options
        </div>
        <color-input
          label="Font Color"
          :color-str="fontColorStr"
          @change="fontColorStr = $event"
        />
        <color-input
          label="Background Color"
          :color-str="backgroundColorStr"
          @change="backgroundColorStr = $event"
        />
      </div>
      <div class="check-content-wrapper">
        <div class="content-title">
          Check List
        </div>
        <check-item :flag="checkRatioLuminance" label="輝度比" />
        <check-item :flag="checkDiffBrightness" label="明るさの差" />
      </div>
    </div>
    <div class="checking-preview">
      <div class="view material-shadow non-selectable" :style="previewStyle">
        PREVIEW
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ColorInput from '@/components/commons/ColorInput.vue';
import CheckItem from '@/components/commons/CheckItem.vue';
import {
  isDiffBrightnessFollowing,
  isRatioLuminanceFollowing,
} from '@/services/ColorSense';
import Color from '@/domains/Color';
import ColorBuilder from '@/services/ColorBuilder';

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    ColorInput,
    CheckItem,
  },
  data() {
    return {
      fontColorStr: '#FFFFFF',
      backgroundColorStr: '#000000',
    };
  },
  computed: {
    fontColor(): Color {
      return ColorBuilder.build(this.fontColorStr);
    },
    backgroundColor(): Color {
      return ColorBuilder.build(this.backgroundColorStr);
    },
    checkRatioLuminance(): boolean {
      const result: boolean = isRatioLuminanceFollowing(
        this.fontColor,
        this.backgroundColor
      );
      return result;
    },
    checkDiffBrightness(): boolean {
      const result: boolean = isDiffBrightnessFollowing(
        this.fontColor,
        this.backgroundColor
      );
      return result;
    },
    previewStyle(): object {
      return {
        color: this.fontColorStr,
        'background-color': this.backgroundColorStr,
      };
    },
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.compare-bg-and-font {
  align-items: center;
  display: grid;
  grid-template-columns: 360px minmax(360px, auto);
  justify-items: start;

  .operation-wrapper {
    padding: 0 24px;
  }

  .content-title {
    font-size: 2rem;
    margin-bottom: 8px;
  }
}
.color-input-wrapper {
  display: grid;
  margin: 16px 0;

  .form-content {
    display: grid;
    margin: 4px 0;
  }
}

.check-content-wrapper {
  display: grid;
}
.checking-preview {
  display: flex;
  justify-content: center;
  justify-self: start;
  padding: 32px 24px;
  height: 100%;
  width: 100%;
  .view {
    border-radius: 8px;
    display: grid;
    font-size: 1.5rem;
    place-items: center center;
    height: 100%;
    max-height: 520px;
    width: 100%;
  }
}
</style>
