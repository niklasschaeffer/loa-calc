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
    <p>What do you want to do ?</p>
    <button class="btn btn-success btn-mobile" @click="redirect('/share')">
      Share Calculator
    </button>
    <button class="btn btn-success btn-mobile" @click="redirect('/marie')">
      Marie Calculator
    </button>
    <button class="btn btn-success btn-mobile" v-if="this.enabled == true">
      Rapport Calculator
    </button>
  </div>
</template>

<style scoped>
.btn-mobile {
  margin: 8px;
}
</style>
