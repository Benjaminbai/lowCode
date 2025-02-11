<template>
  <div class="property-space-wrapper">
    <div class="trigger-box" @click="show = !show">
      <LeftOutlined v-if="!show" />
      <RightOutlined v-else />
    </div>
    <Tabs
      v-model:activeKey="activeKey"
      centered
      v-show="show"
      style="width: 250px"
    >
      <TabPane tab="样式" key="0">
        <StylePanel
          :styleConfig="element.styleConfig"
          :componentType="element.component"
        />
      </TabPane>
      <TabPane
        tab="数据绑定"
        key="1"
        :forceRender="true"
        v-if="element.dataConfig"
      >
        <BindDataPanel
          :dataConfig="element.dataConfig"
          :componentType="element.component"
          :elementId="element.id"
        />
      </TabPane>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Tabs, TabPane } from "ant-design-vue";
import { LeftOutlined, RightOutlined } from "@ant-design/icons-vue";

import StylePanel from "./StylePanel.vue";
import BindDataPanel from "./BindDataPanel.vue";

const { element } = defineProps(["element"]);
const activeKey = ref("0");
const show = ref(true);
</script>

<style scoped>
.property-space-wrapper {
  padding: 10px;
  height: calc(100% - 20px);
  position: relative;
  &:hover {
    .trigger-box {
      display: block;
    }
  }
  .trigger-box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    background-color: #eef4fe;
    padding: 10px 5px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    color: #9da3ae;
    display: none;
    &:hover {
      color: #2754f5;
    }
  }
}
</style>
