<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <ul class="nav bg-dark justify-content-center">
      <li class="nav-item">
        <RouterLink class="nav-link text-light" to="/">Calculator</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link text-light" to="/marie">Marie</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link text-light" to="/rapport"
          >Rapport</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link text-light" to="/register"
          >Register</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link text-light" to="/login">Login</RouterLink>
      </li>
    </ul>
  </header>

  <RouterView />

  <footer class="footer mt-auto py-3 px-5 bg-dark text-light">
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
