<template>
  <Form :label-col="labelCol" labelWrap>
    <FormItem label="字段">
      <Checkbox
        v-model:checked="dataConfig.checkedState.checkAll"
        @change="onCheckAllChange"
      >
        列展示
      </Checkbox>

      <CheckboxGroup v-model:value="dataConfig.checkedState.checkedList">
        <Draggable
          :list="dataConfig.backupList"
          group="table"
          item-key="dataIndex"
          @end="onDragEnd"
        >
          <template #item="{ element }">
            <div class="checkbox-group-item">
              <space>
                <DragOutlined style="cursor: move" />
                <Checkbox :key="element.dataIndex" :value="element.dataIndex">{{
                  element.title
                }}</Checkbox>
              </space>
            </div>
          </template>
        </Draggable>
      </CheckboxGroup>
    </FormItem>
  </Form>
</template>

<script setup>
import { Form, FormItem, Checkbox, CheckboxGroup, Space } from "ant-design-vue";
import Draggable from "vuedraggable";
import { DragOutlined } from "@ant-design/icons-vue";

const { dataConfig } = defineProps({
  dataConfig: {
    type: Object,
    default: () => ({
      backupList: [],
      columns: [],
      checkedState: {
        checkAll: false,
        checkedList: [],
      },
    }),
  },
  styleConfig: {
    type: Object,
    default: () => ({}),
  },
});

import { labelCol } from "../constant";

const columns = [
  {
    title: "表类型",
    dataIndex: "tableType",
  },
  {
    title: "表名",
    dataIndex: "tableName",
  },
  {
    title: "表描述",
    dataIndex: "tableDesc",
  },
  {
    title: "版本",
    dataIndex: "version",
  },
  {
    title: "同步状态",
    dataIndex: "syncStatus",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
  {
    title: "操作",
    dataIndex: "action",
  },
];
dataConfig.columns = [];
dataConfig.dataSource = [];
dataConfig.backupList = [...columns];
dataConfig.checkedState = {
  checkAll: true,
  checkedList: [],
};

const onCheckAllChange = (e) => {
  Object.assign(dataConfig.checkedState, {
    checkedList: e.target.checked
      ? dataConfig.backupList.map((item) => item.dataIndex)
      : [],
  });
};

const onDragEnd = () => {
  dataConfig.columns.splice(0, dataConfig.columns.length);
  dataConfig.backupList.forEach((item) => dataConfig.columns.push(item));
};
</script>

<style scoped></style>
