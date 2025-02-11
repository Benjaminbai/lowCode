<template>
  <div class="preview-mobile-wrapper">
    <div class="preview-mobile">
      <div class="preview-mobile-header">
        <Space>
          <div class="bar"></div>
          <div class="dot"></div>
        </Space>
      </div>
      <div class="preview-mobile-inner">
        <Preview :metaData="metaData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Space } from "ant-design-vue";
import { defineComponent } from "vue";
import Preview from "./Preview.vue";

defineComponent({
  name: "PreviewMobile",
});
const { metaData } = defineProps(["metaData"]);
</script>

<style scoped>
.preview-mobile-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .preview-mobile {
    width: 25%;
    height: calc(100% - 60px);
    background-color: #3d3d3d;
    padding: 30px 10px;
    border-radius: 4px;
    box-sizing: border-box;
    position: relative;
    .preview-mobile-header {
      position: absolute;
      left: 50%;
      top: 3px;
      transform: translate(-50%);
      .dot {
        width: 8px;
        height: 8px;
        background-color: #000;
        border-radius: 50%;
      }
      .bar {
        width: 50px;
        height: 8px;
        background-color: #000;
        border-radius: 5px;
      }
    }
    .preview-mobile-inner {
      background-color: #fff;
      height: 100%;
    }
  }
}
</style>
