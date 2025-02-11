<template>
  <Layout class="layout-wrapper">
    <LayoutSider v-model:collapsed="collapsed" collapsible class="layout-sider">
      <slot name="sider" />
    </LayoutSider>
    <Layout>
      <LayoutHeader class="layout-header">
        <slot name="header" />
      </LayoutHeader>
      <LayoutContent class="layout-content">
        <div class="layout-bread">
          <slot name="breader" />
        </div>
        <slot name="content" />
      </LayoutContent>
      <LayoutFooter
        class="layout-footer"
        v-if="props.metaData.footer.length > 0"
      >
        <slot name="footer" />
      </LayoutFooter>
    </Layout>
  </Layout>
</template>
<script setup>
import { ref } from "vue";
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutSider,
} from "ant-design-vue";

const props = defineProps({
  title: "侧边布局",
  metaData: {
    type: Object,
    default: () => ({
      footer: [],
    }),
  },
});

const collapsed = ref(false);
</script>
<style scoped>
@import url("../common.css");
</style>
