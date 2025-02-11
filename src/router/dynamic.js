import { BlankLayout } from "@/components";
import { getUserPermissionByTokenApi } from "./api";
import router from "./router";
import { themeMetaData } from "@/state/themeMetaData";

const componentLoader = (componentName) => {
  const componentMap = {
    "online/cgFormMgt/CgFormMgt": () =>
      import("@/online/cgFormMgt/CgFormMgt.vue"),
    "online/cgReportMgt/CgReportMgt": () =>
      import("@/online/cgReportMgt/CgReportMgt.vue"),
    "online/dictMgt/DictMgt": () => import("@/online/dictMgt/DictMgt.vue"),
    "online/menuMgt/MenuMgt": () => import("@/online/menuMgt/MenuMgt.vue"),
    "online/msgTempMgt/MsgTempMgt": () =>
      import("@/online/msgTempMgt/MsgTempMgt.vue"),
    "online/myMsgMgt/MyMsgMgt": () => import("@/online/myMsgMgt/MyMsgMgt.vue"),
    "online/roleMgt/RoleMgt": () => import("@/online/roleMgt/RoleMgt.vue"),
    "online/userMgt/UserMgt": () => import("@/online/userMgt/UserMgt.vue"),
    "online/metaMgt/MetaMgt": () => import("@/online/metaMgt/MetaMgt.vue"),
    "online/themeMgt/ThemeMgt": () => import("@/online/themeMgt/ThemeMgt.vue"),
    "home/Home": () => import("@/views/home/Home.vue"),
  };
  return componentMap[componentName];
};

const recursionRoutes = (_menus) => {
  _menus.forEach((menu) => {
    if (menu.children) {
      menu.component = BlankLayout;
      recursionRoutes(menu.children);
    } else {
      menu.component = componentLoader(menu.component);
    }
  });
};

export const getUserPermissionByToken = async () => {
  if (JSON.parse(localStorage.getItem("LOCALINFO") || "{}")?.token) {
    const res = await getUserPermissionByTokenApi();
    if (res.success) {
      localStorage.setItem("MENUS", JSON.stringify(res.result.menu));
      syntheticRoutes();
    }
  }
};

export const syntheticRoutes = async () => {
  if (
    JSON.parse(localStorage.getItem("LOCALINFO") || "{}")?.token &&
    localStorage.getItem("MENUS")
  ) {
    let menus = JSON.parse(localStorage.getItem("MENUS") || "[]");
    menus = menus.filter((menu) => menu.path !== "/dashboard/analysis");
    recursionRoutes(menus);
    genarateMenus(menus);
    menus.forEach((menu) => {
      router.addRoute(menu);
    });
  }
};

const recursionMenu = (_menus) => {
  _menus.forEach((menu) => {
    if (menu.children) {
      recursionMenu(menu.children);
    }
    menu.key = menu.path;
    menu.icon = "";
    menu.label = menu.meta.title;
    menu.title = menu.meta.title;
    delete menu.component;
  });
};

const genarateMenus = (dynamicRoutes) => {
  const menus = JSON.parse(JSON.stringify(dynamicRoutes));
  recursionMenu(menus);
  themeMetaData.sider.forEach((item) => {
    if (item.component === "Menu") {
      item.dataConfig.items = menus;
    }
  });
};
