<template>
  <div class="logo-wrapper">
    <img :src="logo" alt="logo" />
  </div>
</template>

<script setup>
import logo from "@/static/iqvia-logo-color.svg";
defineProps({
  dataConfig: {
    type: Object,
    default: () => ({}),
  },
  styleConfig: {
    type: Object,
    default: () => ({}),
  },
  title: "Logo",
});
</script>

<style scoped>
.logo-wrapper {
  max-width: 200px;
  height: 64px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
