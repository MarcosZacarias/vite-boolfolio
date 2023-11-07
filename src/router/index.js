import { createRouter, createWebHistory } from "vue-router";

import ProjectList from "../components/projects/ProjectList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
  ],
});
export { router };
