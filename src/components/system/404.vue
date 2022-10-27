<script>
import { router } from "@/router/index";
export default {
  methods: {
    redirect() {
      router.push("/");
    },
  },
};
</script>

<template>
  <div class="text-center">
    <h1>Sorry, this page does not exist!</h1>
    <button class="btn btn-success" @click="redirect">Back to Home</button>
  </div>
</template>
