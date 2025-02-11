<template>
  <div class="cgform-wrapper">
    <Form
      name="advanced_search"
      class="search-form"
      :model="formState"
      @finish="onFinish"
    >
      <Row :gutter="24">
        <Col :span="8">
          <FormItem label="报表名称">
            <Input
              v-model:value="formState.tableName"
              placeholder="placeholder"
            ></Input>
          </FormItem>
        </Col>
        <Col :span="8">
          <FormItem label="报表编码">
            <Input
              v-model:value="formState.tableName"
              placeholder="placeholder"
            ></Input>
          </FormItem>
        </Col>
        <Col :span="8">
          <Button type="primary" html-type="submit">搜索</Button>
          <Button style="margin: 0 8px" @click="() => formRef.resetFields()"
            >重置</Button
          >
        </Col>
      </Row>
    </Form>

    <Table :dataConfig="dataConfig" :styleConfig="styleConfig" bordered>
      <template v-slot:bodyCell="{ column = {}, record = {} }">
        <template v-if="column.dataIndex === 'action'">
          <span>
            <a @click.stop="editHandler(record)">编辑 </a>
          </span>
        </template>
      </template>
    </Table>
    <FullModal
      v-model:open="open"
      destroyOnClose
      :closable="null"
      :nopadding="true"
      :footer="null"
    >
      <DesignSpace
        display="metaData"
        :metaData="metaData"
        :closeHandler="() => (open = false)"
      />
    </FullModal>
  </div>
</template>

<script setup>
import { Form, FormItem, Row, Col, Input, Button } from "ant-design-vue";
import { ref, reactive } from "vue";

import DesignSpace from "@/design/DesignSpace.vue";
import { metaData } from "@/state/metaData";

import { Table, FullModal } from "@/components";

const formRef = ref();
const formState = reactive({});
const open = ref(false);
const selectedKeys = ref([]);

const backupList = [
  {
    title: "页面名称",
    dataIndex: "tableType",
  },
  {
    title: "页面编码",
    dataIndex: "tableName",
  },
  {
    title: "操作",
    dataIndex: "action",
  },
];
const datasource = [
  {
    tableType: "业务表",
    tableName: "业务表1",
    createTime: "2022-01-01 12:00:00",
  },
];
const dataConfig = reactive({
  columns: backupList,
  dataSource: datasource,
  backupList: [...backupList],
  checkedState: {
    checkAll: true,
    checkedList: backupList.map((item) => item.dataIndex),
  },
  selectedKeys,
});
const styleConfig = reactive({
  bordered: true,
});

const onFinish = (values) => {};
const editHandler = (record) => {
  open.value = true;
};
</script>

<style scoped></style>
