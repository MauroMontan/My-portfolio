import { createRouter, createWebHashHistory } from "vue-router";
import { Home, About, Skills, Projects, Contact } from "../views/views";

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
  {
    path: "/contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
