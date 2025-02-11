<template>
  <Form :label-col="labelCol" labelWrap>
    <FormItem label="按钮类型">
      <Select v-model:value="styleConfig.mode">
        <SelectOption value="primary">水平</SelectOption>
        <SelectOption value="default">垂直</SelectOption>
        <SelectOption value="dashed">内嵌</SelectOption>
      </Select>
    </FormItem>
  </Form>
</template>

<script setup>
import { Form, FormItem, Select, SelectOption } from "ant-design-vue";

import { labelCol } from "../constant";
const { styleConfig } = defineProps(["styleConfig"]);
</script>

<style scoped></style>
