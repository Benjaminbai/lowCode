<template>
  <component :is="AsyncComponent" :styleConfig="styleConfig" />
</template>
<script setup>
import { defineAsyncComponent } from "vue";

import { lowercaseFirstLetter } from "./utils";

const { styleConfig, componentType } = defineProps([
  "styleConfig",
  "componentType",
]);
const AsyncComponent = defineAsyncComponent(() =>
  import(
    `@/components/${lowercaseFirstLetter(componentType)}/${componentType}.s.vue`
  )
);
</script>

<style scoped></style>
