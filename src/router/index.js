import { createRouter, createWebHistory } from "vue-router";

import Homepage from "../pages/Homepage.vue";
import Portfolio from "../pages/Portfolio.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage,
    },
    {
      path: "/blog",
      name: "portfolio",
      component: Portfolio,
    },
    // {
    //   path: "/blog/:slug",
    //   name: "project_detail",
    //   component: ProjectDetail,
    // },
  ],
});
export { router };
