import { createRouter, createWebHashHistory } from "vue-router";
import vCatalogue from "../components/v-catalogue.vue";

const routes = [
  {
    path: "/",
    name: "catalogue",
    component: vCatalogue,
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../components/v-cart.vue"),
    props: true,
  },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
