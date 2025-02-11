<template>
  <div class="pull-space-wrapper">
    <div class="trigger-box" @click="show = !show">
      <LeftOutlined v-if="show" />
      <RightOutlined v-else />
    </div>
    <div class="pull-space-tab">
      <div
        class="pull-space-tab-item"
        v-for="(item, index) in tabList"
        :key="item.name"
        @click="tabHandleClick(item, index)"
      >
        <component
          :is="item.icon"
          :class="['item-icon', item.active ? 'active' : '']"
        />
        <p class="item-name">{{ item.name }}</p>
      </div>
    </div>
    <div class="pull-space-container" v-show="show">
      <Draggable
        v-show="currentTab === 'metaData'"
        :list="list"
        :group="{ name: 'iqvia', pull: 'clone', put: false }"
        :clone="cloneDog"
        item-key="id"
        :sort="false"
        class="pull-space-draggable"
        chosenClass="sortable-chosen"
      >
        <template #item="{ element }">
          <div class="component-item">
            <ToolOutlined class="component-icon" />
            <span class="component-name">{{ element.name }}</span>
          </div>
        </template>
      </Draggable>
      <div
        v-show="currentTab === 'themeMetaData'"
        :class="['layout-box', item.active ? 'active' : '']"
        v-for="(item, index) in layoutData"
        :key="item.name"
        @click="layoutHandleClick(index)"
      >
        <Card hoverable style="width: 100%" :bordered="false">
          <template #cover>
            <img :alt="item.name" :src="item.shotCut" />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import Draggable from "vuedraggable";
import { reactive, ref, inject } from "vue";
import {
  ToolOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons-vue";
import { Card } from "ant-design-vue";

import {
  layoutData,
  displayThemeList,
  themeComponentsList,
} from "./state/themeMetaData";
import { displayMetaList, componentsList } from "./state/metaData";

const componentsJson = import.meta.glob("@/components/**/*.p.json", {
  eager: true,
});
const componentsJsonObject = Object.fromEntries(
  Object.entries(componentsJson).map(([path, module]) => {
    const filename = path.match(/([^\/]+)\.p\.json$/)[1];
    return [filename, module.default];
  })
);

const currentTab = ref("metaData");
const display = inject("display");
const metaData = inject("metaData");

const tabList = reactive(
  display === "metaData" ? displayMetaList : displayThemeList
);

const list = reactive(
  display === "metaData" ? componentsList : themeComponentsList
);

const show = ref(true);

const cloneDog = (props) => {
  const componentObj = {
    ...props,
    ...JSON.parse(JSON.stringify(componentsJsonObject[props.component])),
    id: Math.random(),
  };
  return componentObj;
};

const tabHandleClick = (item, index) => {
  currentTab.value = item.code;
  tabList.forEach((item, i) => {
    item.active = i === index;
  });
};
const layoutHandleClick = (index) => {
  layoutData.forEach((item, i) => {
    item.active = i === index;
  });
  metaData.component = layoutData[index].component;
  delete metaData.component.__file;
};
</script>

<style scoped>
.pull-space-wrapper {
  display: flex;
  max-width: 280px;
  height: 100%;
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
    right: 0px;
    background-color: #eef4fe;
    padding: 10px 5px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
    color: #9da3ae;
    display: none;
    &:hover {
      color: #2754f5;
    }
  }
  .pull-space-tab {
    padding: 20px 15px;
    border-right: 1px solid #f0f0f0;
    .pull-space-tab-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-bottom: 30px;
      color: #515151;
      font-size: 12px;
      .item-icon {
        font-size: 22px;
        color: #262626;
        padding: 5px;
        border-radius: 4px;
        margin-bottom: 5px;
        &:hover {
          background-color: #eef3fe;
          color: #2754f5;
        }
        &.active {
          background-color: #eef3fe;
          color: #2754f5;
        }
      }

      .item-name {
        margin: 0;
      }
    }
  }

  .pull-space-container {
    padding: 20px 10px;
    flex-grow: 1;
    border-right: 1px solid #f0f0f0;
    text-align: center;
    .pull-space-draggable {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .component-item {
        width: 75px;
        font-size: 13px;
        background-color: #eef3fe;
        border-radius: 4px;
        padding: 8px 6px;
        color: #455470;
        cursor: pointer;
        margin: 5px;
        text-align: left;
        &:hover {
          background-color: #e1e5ed;
        }
        .component-icon {
          font-size: 13px;
          margin-right: 6px;
          color: #3253ec;
        }
      }
    }

    .layout-box {
      box-sizing: border-box;
      width: 70%;
      border-radius: 10px;
      border: 2px solid transparent;
      overflow: hidden;
      margin: 0 auto;
      margin-bottom: 30px;
      img {
        height: 100px;
      }
      &.active {
        border: 2px solid #2754f5;
      }
      &:hover {
        transform: scale(1.08);
        transition: transform 0.3s ease;
      }
    }
  }
}
.sortable-chosen {
  opacity: 0.7;
  display: block;
  background-color: #eef3fe;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
  color: #455470;
  cursor: pointer;
  &:hover {
    background-color: #e1e5ed;
  }
  .component-icon {
    font-size: 15px;
    margin-right: 10px;
    color: #2754f5;
  }
}
</style>
