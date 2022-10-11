<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <!--
  <header>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/">Calculator</RouterLink>
      </li>
    </ul>
  </header>
  -->

  <RouterView />

  <footer class="footer mt-auto py-3 px-5 bg-dark">
    <font-awesome-icon
      icon="fa-brands fa-github"
      class="float-start"
      style="margin-top: 5px"
    />
    <a
      class="nav-link ms-4"
      target="blank"
      href="https://github.com/niklasschaeffer/loa-calc"
      >Github</a
    >
  </footer>
</template>

<style scoped></style>
