<template>
  <div class="preview-tablet-wrapper">
    <div class="preview-tablet">
      <div class="preview-tablet-header">
        <Space>
          <div class="dot"></div>
          <div class="bar"></div>
          <div class="dot"></div>
        </Space>
      </div>
      <div class="preview-tablet-inner">
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
  name: "PreviewTablet",
});
const { metaData } = defineProps(["metaData"]);
</script>

<style scoped>
.preview-tablet-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .preview-tablet {
    width: 40%;
    height: calc(100% - 40px);
    background-color: #3d3d3d;
    padding: 20px;
    border-radius: 4px;
    box-sizing: border-box;
    position: relative;
    .preview-tablet-header {
      position: absolute;
      left: 50%;
      top: -2px;
      transform: translate(-50%);
      .dot {
        width: 8px;
        height: 8px;
        background-color: #000;
        border-radius: 50%;
      }
      .bar {
        width: 70px;
        height: 8px;
        background-color: #000;
        border-radius: 5px;
      }
    }
    .preview-tablet-inner {
      background-color: #fff;
      height: 100%;
    }
  }
}
</style>
