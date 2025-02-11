<template>
  <component :is="Component[metaData.component || 'hcLayout']">
    <template #header>
      <component
        v-for="meta in metaData.header"
        :key="meta.id"
        :is="Component[meta.component]"
        v-bind="meta.styleConfig"
        :styleConfig="meta.styleConfig"
        :dataConfig="meta.dataConfig"
      >
        <PreviewReal v-if="meta.children" :metaData="meta.children" />
      </component>
    </template>
    <template #sider>
      <component
        v-for="meta in metaData.sider"
        :key="meta.id"
        :is="Component[meta.component]"
        v-bind="meta.styleConfig"
        :styleConfig="meta.styleConfig"
        :dataConfig="meta.dataConfig"
      >
        <PreviewReal v-if="meta.children" :metaData="meta.children" />
      </component>
    </template>
    <template #breader>
      <component
        v-for="meta in metaData.breader"
        :key="meta.id"
        :is="Component[meta.component]"
        v-bind="meta.styleConfig"
        :styleConfig="meta.styleConfig"
        :dataConfig="meta.dataConfig"
      >
        <PreviewReal v-if="meta.children" :metaData="meta.children" />
      </component>
    </template>
    <template #content>
      <RouterView />
    </template>
    <template #footer>
      <component
        v-for="meta in metaData.footer"
        :key="meta.id"
        :is="Component[meta.component]"
        v-bind="meta.styleConfig"
        :styleConfig="meta.styleConfig"
        :dataConfig="meta.dataConfig"
      >
        <PreviewReal v-if="meta.children" :metaData="meta.children" />
      </component>
    </template>
  </component>
</template>

<script setup>
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

import * as Component from "@/components";

defineComponent({
  name: "PreviewReal",
});

const { metaData } = defineProps(["metaData"]);
</script>

<style scoped></style>
