import { createRouter, createWebHistory } from "vue-router";
import CalculatorView from "../views/CalculatorView.vue";
import MarieView from "../views/MarieView.vue";
import RapportView from "../views/RapportView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "calculator",
      component: CalculatorView,
    },
    {
      path: "/marie",
      name: "marie",
      component: MarieView,
    },
    {
      path: "/rapport",
      name: "rapport",
      component: RapportView,
    },
  ],
});

export default router;
