<template>
  <div class="common-draggable-wrapper">
    <span v-show="!list.length" class="common-draggable-placeholder"
      >拖拽区域</span
    >
    <Draggable
      :list="list"
      group="iqvia"
      item-key="id"
      animation="200"
      @choose="onChoose"
      class="common-draggable-inner"
    >
      <template #item="{ element, index }">
        <ComponentsRender
          :element="element"
          :index="index"
          :list="list"
        />
      </template>
    </Draggable>
  </div>
</template>

<script setup>
import Draggable from "vuedraggable";

import ComponentsRender from "./ComponentsRender.vue";

const { list } = defineProps(["list"]);

const onChoose = (e) => {
  document.querySelectorAll(".chosen").forEach(function (element) {
    element.classList.remove("chosen");
  });
  e.item.classList.add("chosen");
};
</script>

<style>
.common-draggable-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  .common-draggable-placeholder {
    border-radius: 4px;
    pointer-events: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #d6d7db;
  }
  .flex-inner-wrapper {
    width: 100%;
  }
  .common-draggable-inner {
    border: 1px dashed #f0f0f0;
    height: 100%;
    border-radius: 4px;
  }
  & .chosen {
    border: 1px dashed #2754f5;
    border-radius: 4px;
    position: relative;
    .tool-box {
      display: inline-block;
      border-radius: 50%;
      background-color: #e95974;
      position: absolute;
      right: -25px;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      color: #fff;
      width: 20px;
      height: 20px;
      line-height: 20px;
      z-index: 1;
    }
  }
  .tool-box {
    display: none;
  }
}
</style>
