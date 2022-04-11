import { createRouter, createWebHashHistory } from "vue-router";
import { Home, About, Skills } from "../views/views";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/skills",
    component: Skills,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
