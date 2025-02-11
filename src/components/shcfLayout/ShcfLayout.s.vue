<template>
  <Form :label-col="labelCol" labelWrap>
    <FormItem label="系统主题色">
      <Select v-model:value="styleConfig.type">
        <SelectOption value="primary">主按钮</SelectOption>
        <SelectOption value="default">次按钮</SelectOption>
        <SelectOption value="dashed">虚线按钮</SelectOption>
        <SelectOption value="text">文本按钮</SelectOption>
        <SelectOption value="link">链接按钮</SelectOption>
      </Select>
    </FormItem>
    <FormItem label="顶栏背景色">
      <Select v-model:value="styleConfig.type">
        <SelectOption value="primary">主按钮</SelectOption>
        <SelectOption value="default">次按钮</SelectOption>
        <SelectOption value="dashed">虚线按钮</SelectOption>
        <SelectOption value="text">文本按钮</SelectOption>
        <SelectOption value="link">链接按钮</SelectOption>
      </Select>
    </FormItem>
    <FormItem label="菜单背景色">
      <Select v-model:value="styleConfig.type">
        <SelectOption value="primary">主按钮</SelectOption>
        <SelectOption value="default">次按钮</SelectOption>
        <SelectOption value="dashed">虚线按钮</SelectOption>
        <SelectOption value="text">文本按钮</SelectOption>
        <SelectOption value="link">链接按钮</SelectOption>
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
