<template>
  首页
  <a @click="test">test</a>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const test = () => {
  router.push("/online/cgform");
};
</script>
