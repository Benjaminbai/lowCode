<template>
  <Draggable
    class="nested-draggable-wrapper"
    :list="tasks"
    group="iqvia"
    item-key="id"
    animation="200"
    @choose="onChoose"
    :style="{
      justifyContent: element.styleConfig.justifyContent,
    }"
  >
    <template #item="{ element, index }">
      <ComponentsRender :element="element" :index="index" :list="tasks" />
    </template>
  </Draggable>
</template>
<script setup>
import Draggable from "vuedraggable";
import { defineComponent } from "vue";

import ComponentsRender from "./ComponentsRender.vue";

const { tasks } = defineProps({
  tasks: { type: Array, default: [] },
  element: { type: Object, default: {} },
});

defineComponent({
  name: "NestedDraggable",
});

const onChoose = (e) => {
  document.querySelectorAll(".chosen").forEach(function (element) {
    element.classList.remove("chosen");
  });
  e.item.classList.add("chosen");
};
</script>
<style>
.nested-draggable-wrapper {
  width: 100%;
  min-height: 40px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: #f8f9fd;
  border-radius: 4px;
}
</style>
