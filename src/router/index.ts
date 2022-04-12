import { createRouter, createWebHashHistory } from "vue-router";
import { Home, About, Skills, Projects } from "../views/views";

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
  {
    path: "/projects",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
