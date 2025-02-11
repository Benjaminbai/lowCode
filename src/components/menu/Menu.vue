<template>
  <div class="menu-wrapper">
    <Menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="state.collapsed"
      :items="dataConfig.items"
      @select="menuSelect"
    ></Menu>
  </div>
</template>

<script setup>
import { Menu } from "ant-design-vue";
import { reactive, watch } from "vue";
import { useRouter } from "vue-router";

const { dataConfig } = defineProps({
  dataConfig: {
    type: Object,
    default: () => ({}),
  },
  styleConfig: {
    type: Object,
    default: () => ({}),
  },
  title: "菜单",
});

const router = useRouter();

const state = reactive({
  selectedKeys: [],
  openKeys: [],
});

const menuSelect = ({ item, key }) => {
  router.push({ path: key });
};

watch(
  () => router.currentRoute.value,
  (newVal) => {
    state.selectedKeys = [newVal.path];
    state.openKeys = [newVal.matched[0]?.path];
  },
  {
    immediate: true,
  }
);
</script>

<style scoped>
.menu-wrapper {
  padding: 10px;
}
</style>
