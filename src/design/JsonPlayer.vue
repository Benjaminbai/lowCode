<template>
  <pre>{{ value }}</pre>
</template>
<script setup>
const { value } = defineProps(["value"]);
</script>
<style scoped>
pre {
  text-align: start;
  width: 0;
  height: 0;
  overflow: auto;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -999;
}
</style>
