<template>
  <Form :label-col="labelCol" labelWrap>
    <FormItem label="按钮类型">
      <Select v-model:value="styleConfig.type">
        <SelectOption value="primary">主按钮</SelectOption>
        <SelectOption value="default">次按钮</SelectOption>
        <SelectOption value="dashed">虚线按钮</SelectOption>
        <SelectOption value="text">文本按钮</SelectOption>
        <SelectOption value="link">链接按钮</SelectOption>
      </Select>
    </FormItem>
    <FormItem label="按钮尺寸">
      <RadioGroup v-model:value="styleConfig.size">
        <RadioButton value="large">大</RadioButton>
        <RadioButton value="default">正常</RadioButton>
        <RadioButton value="small">小</RadioButton>
      </RadioGroup>
    </FormItem>
    <FormItem label="占满容器">
      <RadioGroup v-model:value="styleConfig.block">
        <Radio :value="true">是</Radio>
        <Radio :value="false">否</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="幽灵按钮">
      <RadioGroup v-model:value="styleConfig.ghost">
        <Radio :value="true">是</Radio>
        <Radio :value="false">否</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="危险按钮">
      <RadioGroup v-model:value="styleConfig.danger">
        <Radio :value="true">是</Radio>
        <Radio :value="false">否</Radio>
      </RadioGroup>
    </FormItem>
  </Form>
</template>

<script setup>
import {
  Form,
  FormItem,
  Select,
  SelectOption,
  RadioGroup,
  RadioButton,
  Radio,
} from "ant-design-vue";

import { labelCol } from "../constant";
const { styleConfig } = defineProps(["styleConfig"]);
</script>

<style scoped></style>
