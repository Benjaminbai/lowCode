<template>
  <DesignHeader :closeHandler="closeHandler" />
  <Row class="design-space-wrapper">
    <Col>
      <PullSpace />
    </Col>
    <Col style="flex: 1">
      <PutSpace />
    </Col>
    <Col>
      <div id="property-wrapper"</div>
    </Col>
  </Row>
</template>

<script setup>
import { Row, Col } from "ant-design-vue";
import { provide } from "vue";

import PullSpace from "./PullSpace.vue";
import PutSpace from "./PutSpace.vue";
import DesignHeader from "./DesignHeader.vue";

const { display, metaData, closeHandler } = defineProps(["display", "metaData", "closeHandler"]);
provide("display", display);
provide("metaData", metaData);
</script>

<style scoped>
.design-space-wrapper {
  box-sizing: border-box;
  height: calc(100vh - 64px);
  margin-top: 64px;
}

#property-wrapper {
    border-left: 1px solid #f0f0f0;
    height: 100%;
    box-sizing: border-box;
}
</style>
