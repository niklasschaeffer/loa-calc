import { createRouter, createWebHistory } from "vue-router";
import ShareView from "../views/ShareView.vue";
import MarieView from "../views/MarieView.vue";
import RapportView from "../views/RapportView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";
import { useUserStore } from "../stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound - 404",
      component: PageNotFoundView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/share",
      name: "share",
      component: ShareView,
      meta: { requiresAuth: true },
    },
    {
      path: "/marie",
      name: "marie",
      component: MarieView,
      meta: { requiresAuth: true },
    },
    {
      path: "/rapport",
      name: "rapport",
      component: RapportView,
      meta: { requiresAuth: true },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

router.beforeEach((to) => {
  const store = useUserStore();
  if (to.meta.requiresAuth && !store.isLoggedIn) {
    return {
      path: "/login",
      query: { redirect: to.fullPath },
    };
  }
  if (to.name == "login" && store.isLoggedIn) {
    return {
      path: "/",
      query: { redirect: to.fullPath },
    };
  }
  if (to.name == "register" && store.isLoggedIn) {
    return {
      path: "/",
      query: { redirect: to.fullPath },
    };
  }
});

export default router;
export { router };
