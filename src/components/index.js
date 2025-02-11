import { markRaw } from "vue";
import Table from "./table/Table.vue";
Table.space = ["metaData"];

import FullModal from "./fullModal/FullModal.vue";

import UserInfo from "./userInfo/UserInfo.vue";
UserInfo.space = ["themeMetaData"];

import Logo from "./logo/Logo.vue";
Logo.space = ["themeMetaData"];

import Menu from "./menu/Menu.vue";
Menu.space = ["themeMetaData"];

import Breadcrumb from "./breadcrumb/Breadcrumb.vue";
Breadcrumb.space = ["themeMetaData"];

import BlankLayout from "./blankLayout/BlankLayout.vue";
import HcfLayout from "./hcfLayout/HcfLayout.vue";
import HscfLayout from "./hscfLayout/HscfLayout.vue";
import ShcfLayout from "./shcfLayout/ShcfLayout.vue";

import Editor from "./editor/Editor.vue";

export {
  Table,
  FullModal,
  UserInfo,
  Logo,
  Menu,
  HcfLayout,
  HscfLayout,
  ShcfLayout,
  BlankLayout,
  Breadcrumb,
  Editor,
};

import HcfLayoutShotcut from "./hcfLayout/img/header-content-footer.png";
import HscfLayoutShotcut from "./hscfLayout/img/header-sider-content-footer.png";
import ShcfLayoutShotcut from "./shcfLayout/img/sider-header-content-footer.png";

export const layoutOptions = [
  {
    name: "上中下布局",
    shotCut: markRaw(HcfLayoutShotcut),
    component: "HcfLayout",
    active: false,
  },
  {
    name: "顶部-侧边布局-通栏",
    shotCut: markRaw(HscfLayoutShotcut),
    component: "HscfLayout",
    active: false,
  },
  {
    name: "侧边布局",
    shotCut: markRaw(ShcfLayoutShotcut),
    component: "ShcfLayout",
    active: false,
  },
];
