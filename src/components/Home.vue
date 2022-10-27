<script>
import { router } from "@/router/index";
export default {
  data() {
    return {
      enabled: false,
    };
  },
  methods: {
    redirect(route) {
      router.push(route);
    },
  },
};
</script>

<template>
  <div class="text-center">
    <h1>Welcome to loa-calc.com</h1>
    <p>What do you want to do today?</p>
    <button class="btn btn-success" @click="redirect('/share')">
      Share Calculator
    </button>
    <button
      class="btn btn-success"
      @click="redirect('/marie')"
      style="margin-left: 10px"
    >
      Marie Calculator
    </button>
    <button
      class="btn btn-success"
      v-if="this.enabled == true"
      style="margin-left: 10px"
    >
      Rapport Calculator
    </button>
  </div>
</template>
