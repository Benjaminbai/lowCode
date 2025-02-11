import { reactive } from "vue";

export const themeMetaData = reactive({
  component: "ShcfLayout",
  styleConfig: {},
  header: [
    {
      name: "用户信息",
      id: 0.6166958964358598,
      component: "UserInfo",
      dataConfig: {},
      styleConfig: {},
      chosen: false,
    },
  ],
  breader: [
    {
      name: "面包屑",
      id: 0.5871430429799602,
      component: "Breadcrumb",
      chosen: true,
    },
  ],
  sider: [
    {
      name: "Logo",
      id: 0.8550789983149942,
      component: "Logo",
      styleConfig: {},
      chosen: false,
    },
    {
      name: "菜单",
      id: 0.5025407170748262,
      component: "Menu",
      dataConfig: {},
      styleConfig: {},
      chosen: false,
    },
  ],
  footer: [],
});
