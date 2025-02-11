<template>
  <div class="design-header-wrapper">
    <Row>
      <Col span="4">
        <Space class="design-header-title" align="center">
          <EditOutlined class="title-icon" />
          <div>
            <Input
              v-model:value="title"
              :bordered="false"
              class="title-input"
            />
            <div class="design-header-date">编辑于 2024-12-09 18:48</div>
          </div>
        </Space>
      </Col>
      <Col span="16">
        <Flex justify="center" align="center" style="height: 100%">
          <Space>
            <Space
              class="design-header-action"
              align="center"
              @click="showModal('PREVIEW')"
            >
              <EyeOutlined class="preview-icon" />
              <span class="preview-text">预览</span>
            </Space>
            <Space
              class="design-header-action"
              align="center"
              @click="showModal('JSON')"
            >
              <CodeOutlined class="preview-icon" />
              <span class="preview-text">JSON</span>
            </Space>
          </Space>
        </Flex>
      </Col>
      <Col span="4">
        <Flex justify="end" align="center" style="height: 100%">
          <CloseOutlined class="close-icon" @click="closeHandler" />
        </Flex>
      </Col>
    </Row>
    <Modal
      v-model:open="open"
      width="100%"
      wrap-class-name="full-modal"
      :footer="null"
      destroyOnClose
      :closable="false"
    >
      <template #title>
        <Row>
          <Col span="2" style="display: flex; align-items: center">
            <h3 style="margin: 0">
              {{ openContent === "JSON" ? "JSON DATA" : "预览" }}
            </h3>
          </Col>
          <Col span="21" class="shift-device-mode">
            <Space align="center" size="large" v-if="openContent !== 'JSON'">
              <component
                v-for="item in deviceModeList"
                :key="item.value"
                :is="item.icon"
                @click="setDeviceMode(item)"
                :class="[item.active ? 'active' : '', 'icon']"
              ></component>
            </Space>
          </Col>
          <Col
            span="1"
            style="
              display: flex;
              align-items: center;
              justify-content: flex-end;
            "
          >
            <CloseOutlined @click="open = false" />
          </Col>
        </Row>
      </template>
      <JsonViewer
        v-if="openContent === 'JSON'"
        :value="metaData"
        copyable
        boxed
        sort
        theme="light"
        @onKeyClick="keyClick"
        @copied="copy"
        class="json-viewer"
      />
      <div v-else style="height: 100%">
        <Preview v-if="deviceMode === 'laptop'" :metaData="metaData" />
        <PreviewTablet v-if="deviceMode === 'tablet'" :metaData="metaData" />
        <PreviewMobile v-if="deviceMode === 'mobile'" :metaData="metaData" />
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { Input, Row, Col, Space, Flex, Modal } from "ant-design-vue";
import { JsonViewer } from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";
import {
  CloseOutlined,
  EyeOutlined,
  EditOutlined,
  CodeOutlined,
  LaptopOutlined,
  BorderOutlined,
  MobileOutlined,
} from "@ant-design/icons-vue";
import { inject, ref } from "vue";

import Preview from "./preview/Preview.vue";
import PreviewTablet from "./preview/PreviewTablet.vue";
import PreviewMobile from "./preview/PreviewMobile.vue";

const { closeHandler } = defineProps(["closeHandler"]);

const metaData = inject("metaData");
const title = ref("未命名");
const open = ref(false);
const openContent = ref("");
const deviceModeList = ref([
  { icon: LaptopOutlined, value: "laptop", active: true },
  { icon: BorderOutlined, value: "tablet", active: false },
  { icon: MobileOutlined, value: "mobile", active: false },
]);
const deviceMode = ref("laptop");
const setDeviceMode = (value) => {
  deviceModeList.value.forEach((item) => {
    item.active = false;
  });
  value.active = true;
  deviceMode.value = value.value;
};

const showModal = (type) => {
  openContent.value = type;
  open.value = true;
};
const keyClick = (key) => {};
const copy = (text) => {};
</script>

<style>
.design-header-wrapper {
  padding: 10px 15px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.08);
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  width: 100%;
  height: 64px;
  background-color: #fff;
  .design-header-title {
    padding-left: 10px;
    .title-icon {
      font-size: 18px;
    }

    .title-input {
      &:focus {
        background-color: #eef3fe;
      }
      &:hover {
        background-color: #eef3fe;
      }
    }
  }

  .design-header-date {
    font-size: 11px;
    color: #79808b;
    padding-left: 11px;
  }

  .design-header-action {
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    .preview-icon {
      font-size: 18px;
      margin-top: 2px;
    }
    &:hover {
      background-color: #eff3fd;
      color: #3253ec;
    }
  }

  .close-icon {
    font-size: 15px;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    &:hover {
      background-color: #eff3fd;
      color: #3253ec;
    }
  }
}
.full-modal {
  .shift-device-mode {
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      cursor: pointer;
      padding: 10px;
      border-radius: 4px;
      &:hover {
        background-color: #eff3fd;
        color: #3253ec;
      }
      &.active {
        background-color: #eff3fd;
        color: #3253ec;
      }
    }
  }
  .ant-modal {
    max-width: 100% !important;
    top: 0 !important;
    padding-bottom: 0 !important;
    margin: 0 !important;
    .ant-modal-content {
      display: flex;
      flex-direction: column;
      height: calc(100vh);
    }
    .ant-modal-body {
      flex: 1;
      padding: 10px;
      overflow: auto;
    }
  }
}
.json-viewer {
  .jv-container .jv-code.boxed {
    height: auto;
  }
}
</style>
