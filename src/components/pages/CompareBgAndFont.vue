<template>
  <div class="compare-bg-and-font">
    <div class="operation-wrapper">
      <div class="color-input-wrapper">
        <div class="content-title">
          Options
        </div>
        <color-input label="フォント色" v-model:color-str="fontColorStr" />
        <color-input label="背景色" v-model:color-str="backgroundColorStr" />
      </div>
      <div class="check-contents-wrapper">
        <div class="content-title">
          Check List
        </div>
        <check-item :flag="checkRatioLuminance" label="コントラスト比" />
        <div class="old-contents-wrapper">
          <div class="form-check form-switch">
            <input
              type="checkbox"
              id="old-check-contents-switch"
              class="form-check-input"
              name="old-check-contents-switch"
              v-model="showOldCheckingContents"
            />
            <label for="old-check-contents-switch" class="form-check-label"
              >過去のチェック項目</label
            >
          </div>
          <div v-show="showOldCheckingContents" class="old-check-contents">
            <check-item :flag="checkDiffBrightness" label="明度差" />
            <check-item :flag="checkDiffColorValue" label="色差" />
          </div>
        </div>
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
  isDiffColorFollowing,
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
      showOldCheckingContents: false,
    };
  },
  computed: {
    fontColor(): Color {
      return ColorBuilder.build(this.fontColorStr);
    },
    backgroundColor(): Color {
      console.log(this.backgroundColorStr);
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
    checkDiffColorValue(): boolean {
      const result: boolean = isDiffColorFollowing(
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
  align-items: flex-start;
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

.check-contents-wrapper {
  display: grid;

  .old-contents-wrapper {
    margin: 8px 0;
  }
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
    height: 380px;
    width: 100%;
  }
}
</style>
