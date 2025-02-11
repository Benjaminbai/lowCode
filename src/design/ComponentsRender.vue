<template>
  <div
    :class="[
      element.component === 'Flex'
        ? 'flex-inner-wrapper'
        : 'sigle-inner-wrapper',
    ]"
    @click.stop="chosenHandler(element, index)"
  >
    <AsyncComponent
      :dataConfig="element.dataConfig"
      :styleConfig="element.styleConfig"
      class="design"
      :key="element.id"
    />

    <NestedDraggable
      v-if="element.component === 'Flex'"
      :tasks="element.children"
      :element="element"
    />

    <div class="tool-box">
      <MinusOutlined @click="list.splice(index, 1)" />
    </div>
    <teleport to="#property-wrapper" v-if="element.chosen" defer>
      <PropertySpace :element="element" :key="element.id" />
    </teleport>
  </div>
</template>

<script setup>
import { MinusOutlined } from "@ant-design/icons-vue";
import { defineAsyncComponent, inject } from "vue";

import NestedDraggable from "./NestedDraggable.vue";
import PropertySpace from "./PropertySpace.vue";
import { lowercaseFirstLetter, recursiveHandler } from "./utils";

const { element, index, list } = defineProps(["element", "index", "list"]);
const AsyncComponent = defineAsyncComponent(() =>
  import(
    `@/components/${lowercaseFirstLetter(element.component)}/${
      element.component
    }.vue`
  )
);

const metaData = inject("metaData");
const display = inject("display");

const chosenHandler = (element) => {
  if (display === "metaData") {
    recursiveHandler(metaData);
  } else if (display === "themeMetaData") {
    recursiveHandler(metaData.header);
    recursiveHandler(metaData.sider);
    recursiveHandler(metaData.footer);
  }
  document.querySelector("#property-wrapper").innnerHTML = "";
  element.chosen = true;
};
</script>

<style scoped>
.sigle-inner-wrapper {
  position: relative;
  .design {
    cursor: grab;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgb(255, 255, 255, 0.6);
      z-index: 1;
    }
  }
}
</style>
