import { createApp } from "vue";

import App from "./App.vue";
import router from "./router/router";
import "./router/guard";
import { syntheticRoutes } from "./router/dynamic";
import "./style.css";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  const main = async () => {
    await syntheticRoutes();
    createApp(App).use(router).mount("#app");
  };

  main();
} else {
  // 作为子应用运行时
  let app;
  renderWithQiankun({
    mount(props) {
      app = createApp(App).use(router);
      app.mount(
        props.container ? props.container.querySelector("#app") : "#app"
      );
    },
    bootstrap() {
      console.log("子应用启动");
    },
    unmount() {
      app.unmount();
      app = null;
    },
  });
}
