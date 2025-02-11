<template>
  <Layout class="layout-wrapper">
    <LayoutHeader>
      <slot name="header" />
    </LayoutHeader>
    <LayoutContent class="layout-content">
      <div class="layout-bread">
        <slot name="breader" />
      </div>
      <slot name="content" />
    </LayoutContent>
    <LayoutFooter class="layout-footer" v-if="props.metaData.footer.length > 0">
      <slot name="footer" />
    </LayoutFooter>
  </Layout>
</template>
<script setup>
import {
  LayoutContent,
  LayoutFooter,
  Layout,
  LayoutHeader,
} from "ant-design-vue";
const props = defineProps({
  title: "上中下布局",
  metaData: {
    type: Object,
    default: () => ({
      footer: [],
    }),
  },
});
</script>
<style scoped>
@import url("../common.css");
</style>
