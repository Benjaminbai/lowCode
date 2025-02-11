<template>
  <Layout class="layout-wrapper">
    <LayoutHeader class="layout-header">
      <slot name="header" />
    </LayoutHeader>
    <Layout>
      <LayoutSider class="layout-sider">
        <slot name="sider" />
      </LayoutSider>
      <Layout style="padding: 0 24px">
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
  </Layout>
</template>
<script setup>
import {
  Layout,
  LayoutHeader,
  LayoutSider,
  LayoutContent,
  LayoutFooter,
} from "ant-design-vue";
const props = defineProps({
  title: "顶部-侧边布局-通栏",
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
