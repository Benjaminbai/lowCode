import Axios from "@/axios";

export const logoutApi = () => Axios.get('/sys/logout');
