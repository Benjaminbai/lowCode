<template>
  <RouterView v-if="route.path === '/login'" />
  <PreviewReal v-else :metaData="themeMetaData" />
</template>

<script setup>
import { RouterView, useRoute } from "vue-router";

import { themeMetaData } from "@/state/themeMetaData";
import PreviewReal from "@/design/preview/PreviewReal.vue";

const route = useRoute();
</script>
