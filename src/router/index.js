import { createRouter, createWebHistory } from "vue-router";
import ShareView from "../views/ShareView.vue";
import MarieView from "../views/MarieView.vue";
import RapportView from "../views/RapportView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";
import { auth } from "@/firebase/firebase";

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
      meta: { requiresAuth: false },
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
      meta: { hideforAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { hideforAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  auth.onAuthStateChanged(function (user) {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!user) {
        next({ path: "/login" });
      } else {
        next();
      }
    } else if (to.matched.some((record) => record.meta.hideForAuth)) {
      if (user) {
        next({ path: "/" });
      } else {
        next();
      }
    } else {
      next();
    }
  });
});

export default router;
export { router };
