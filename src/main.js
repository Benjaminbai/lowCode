import { createApp } from "vue";

import App from "./App.vue";
import router from "./router/router";
import "./router/guard";
import { syntheticRoutes } from "./router/dynamic";
import "./style.css";

const main = async () => {
  await syntheticRoutes();
  createApp(App).use(router).mount("#app");
};

main();
