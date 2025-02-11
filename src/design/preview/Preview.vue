<template>
  <component
    v-if="display === 'metaData'"
    v-for="meta in readonlyMetaData"
    :key="meta.id"
    :is="Component[meta.component]"
    v-bind="meta.styleConfig"
    :styleConfig="meta.styleConfig"
    :dataConfig="meta.dataConfig"
  >
    <Preview v-if="meta.children" :metaData="meta.children" />
  </component>

  <component v-else :is="Component[metaData.component || 'hcfLayout']">
    <template #header>
      <component
        v-for="meta in metaData.header"
        :key="meta.id"
        :is="Component[meta.component]"
        v-bind="meta.styleConfig"
        :styleConfig="meta.styleConfig"
        :dataConfig="meta.dataConfig"
      >
        <Preview v-if="meta.children" :metaData="meta.children" />
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
        <Preview v-if="meta.children" :metaData="meta.children" />
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
        <Preview v-if="meta.children" :metaData="meta.children" />
      </component>
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
        <Preview v-if="meta.children" :metaData="meta.children" />
      </component>
    </template>
  </component>
</template>

<script setup>
import { reactive, defineComponent, inject } from "vue";

import * as Component from "@/components";

defineComponent({
  name: "Preview",
});

const display = inject("display");

const { metaData } = defineProps(["metaData"]);
const readonlyMetaData = reactive(JSON.parse(JSON.stringify(metaData)));
</script>

<style scoped></style>
