import Axios from "@/axios";

export const getInputCodeApi = (code) => Axios.get(`/sys/randomImage/${code}`);

export const loginApi = (params) => Axios.post("/sys/login", params);
