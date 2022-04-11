import { createRouter, createWebHashHistory } from "vue-router";
import { Home, About } from "../views/views";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
