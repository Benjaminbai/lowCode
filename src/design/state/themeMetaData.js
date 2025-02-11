import { markRaw, reactive } from "vue";
import { AppstoreOutlined, StarOutlined } from "@ant-design/icons-vue";
import * as Components from "@/components";
import { layoutOptions } from "@/components";

export const layoutData = reactive(layoutOptions);

export const displayThemeList = [
  {
    name: "组件",
    code: "metaData",
    icon: markRaw(AppstoreOutlined),
    active: true,
  },
  {
    name: "主题",
    code: "themeMetaData",
    icon: markRaw(StarOutlined),
    active: false,
  },
];

const themeComponentList = [];
Object.keys(Components).forEach((key) => {
  Components[key].space &&
    Components[key].space.includes("themeMetaData") &&
    themeComponentList.push({
      name: Components[key].props.title,
      id: key,
      component: key,
    });
});
export const themeComponentsList = themeComponentList;
