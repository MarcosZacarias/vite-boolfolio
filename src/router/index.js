import { createRouter, createWebHistory } from "vue-router";

import Homepage from "../pages/Homepage.vue";
import Portfolio from "../pages/Portfolio.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";
import TypeProjectsPage from "../pages/TypeProjectsPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

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
    {
      path: "/blog/:slug",
      name: "project-detail",
      component: ProjectDetail,
    },
    {
      path: "/blog/type/:type_id",
      name: "project-by-type",
      component: TypeProjectsPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
});
export { router };
