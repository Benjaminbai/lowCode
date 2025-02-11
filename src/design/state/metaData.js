import { markRaw } from "vue";
import { AppstoreOutlined } from "@ant-design/icons-vue";

import * as Components from "@/components";

export const displayMetaList = [
  {
    name: "组件",
    code: "metaData",
    icon: markRaw(AppstoreOutlined),
    active: true,
  },
];

const componentList = [];
Object.keys(Components).forEach((key) => {
  Components[key].space && Components[key].space.includes("metaData") &&
    componentList.push({
      name: Components[key].props.title,
      id: key,
      component: key,
    });
});
export const componentsList = componentList;
