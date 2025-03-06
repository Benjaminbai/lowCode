import { createWebHistory, createRouter } from "vue-router";

import { BlankLayout } from "@/components";

export const routes = [
  {
    path: "/",
    component: BlankLayout,
    children: [
      { path: "login", component: () => import("@/views/login/Login.vue") },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/web-core"),
  routes,
});

export default router;
