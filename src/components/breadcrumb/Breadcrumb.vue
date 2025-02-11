<template>
  <Breadcrumb class="breadcrumb-wrapper">
    <BreadcrumbItem v-for="item in menus" :key="item.path">{{
      item.meta.title
    }}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script setup>
import { Breadcrumb, BreadcrumbItem } from "ant-design-vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

defineProps({
  title: "面包屑",
});

const route = useRoute();
const menus = ref([]);

watch(
  () => route.matched,
  (newVal) => {
    menus.value = newVal;
  },
  {
    immediate: true,
  }
);
</script>

<style scoped>
.breadcrumb-wrapper {
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
}
</style>
