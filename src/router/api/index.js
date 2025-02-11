import Axios from "@/axios";

export const getUserPermissionByTokenApi = (params) =>
  Axios({
    url: "/sys/permission/getUserPermissionByToken",
    method: "get",
    params,
  });