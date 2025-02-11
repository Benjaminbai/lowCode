<template>
  <div class="put-space-wrapper">
    <div v-if="display !== 'metaData'" style="height: 100%">
      <component
        ref="layoutRef"
        :is="ComponentsLayout[metaData.component]"
        style="height: 100%"
        @click="onChoose"
        :metaData="metaData"
      >
        <template #header>
          <CommonDraggable :list="metaData.header" />
        </template>
        <template #breader>
          <CommonDraggable :list="metaData.breader" />
        </template>
        <template #sider>
          <CommonDraggable :list="metaData.sider" />
        </template>
        <template #content> </template>
        <template #footer>
          <CommonDraggable :list="metaData.footer" />
        </template>
      </component>
      <teleport to="#property-wrapper" v-if="teleportShow" defer>
        <PropertySpace :element="metaData" :key="metaData.id" />
      </teleport>
    </div>

    <div v-else class="put-space-metaData">
      <CommonDraggable :list="metaData" />
    </div>
  </div>

  <JsonPlayer :value="metaData" />
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted } from "vue";

import CommonDraggable from "./CommonDraggable.vue";
import JsonPlayer from "./JsonPlayer.vue";
import * as ComponentsLayout from "@/components";
import PropertySpace from "./PropertySpace.vue";
import { recursiveHandler } from "./utils";

const display = inject("display");
const metaData = inject("metaData");

const layoutRef = ref(null);
const teleportShow = ref(false);

const onChoose = () => {
  document.querySelectorAll(".chosen").forEach(function (element) {
    element.classList.remove("chosen");
  });
  recursiveHandler(metaData.header);
  recursiveHandler(metaData.sider);
  recursiveHandler(metaData.footer);
  layoutRef.value.$el.classList.add("chosen");
};

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      teleportShow.value = layoutRef.value.$el.classList.contains("chosen");
    }
  });
});

onMounted(() => {
  const config = { attributes: true, attributeFilter: ["class"] };
  display !== "metaData" && observer.observe(layoutRef.value.$el, config);
});

onUnmounted(() => {
  observer.disconnect();
});
</script>

<style scoped>
.put-space-wrapper {
  background-color: #f8f9fd;
  height: 100%;
  padding: 20px 50px;
  box-sizing: border-box;

  .put-space-metaData {
    background-color: #fff;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 8px;
  }

  .chosen {
    border: 1px dashed #2754f5;
    border-radius: 4px;
  }
}
</style>
