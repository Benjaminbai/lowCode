<template>
  <AsyncComponent :dataConfig="dataConfig" :key="elementId" />
</template>
<script setup>
import { defineAsyncComponent } from "vue";

import { lowercaseFirstLetter } from "./utils";

const { dataConfig, componentType, elementId } = defineProps([
  "dataConfig",
  "componentType",
  "elementId",
]);
const AsyncComponent = defineAsyncComponent(() =>
  import(
    `@/components/${lowercaseFirstLetter(componentType)}/${componentType}.d.vue`
  )
);
</script>

<style scoped></style>
