import { createRouter, createWebHistory } from "vue-router";
import ShareView from "../views/ShareView.vue";
import MarieView from "../views/MarieView.vue";
import RapportView from "../views/RapportView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound - 404",
      component: () => PageNotFoundView,
    },
    {
      path: "/",
      name: "home",
      component: () => HomeView,
    },
    {
      path: "/share",
      name: "share",
      component: () => ShareView,
    },
    {
      path: "/marie",
      name: "marie",
      component: () => MarieView,
    },
    {
      path: "/rapport",
      name: "rapport",
      component: () => RapportView,
    },
    {
      path: "/register",
      name: "register",
      component: () => RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: () => LoginView,
    },
  ],
});

export default router;
export { router };
