<script>
import { auth } from "@/firebase/firebase";
import { useUserStore } from "@/stores/user";
import { router } from "@/router/index";

export default {
  data() {
    return {
      enabled: false,
    };
  },
  setup() {
    const store = useUserStore();
    return { store };
  },
  methods: {
    logout() {
      const store = useUserStore();
      if (auth.currentUser) {
        auth.signOut();
        store.isLoggedIn = false;
        store.currentUser = "";
      }
      router.push("/login");
    },
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <RouterLink class="nav-link text-light" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-light" to="/auctions"
            >Auctions</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-light" to="/marie">Marie</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-light" to="/engrave"
            >Engraving</RouterLink
          >
        </li>
        <li
          class="nav-item"
          v-if="this.store.isLoggedIn == true && this.enabled == true"
        >
          <RouterLink class="nav-link text-light" to="/rapport"
            >Rapport</RouterLink
          >
        </li>
      </ul>
      <ul class="navbar-nav float-right">
        <li class="nav-item">
          <RouterLink
            class="nav-link text-light"
            to="/register"
            v-if="this.store.isLoggedIn == false"
            >Register</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            class="nav-link text-light"
            v-if="this.store.isLoggedIn == false"
            to="/login"
            >Login</RouterLink
          >
        </li>
        <li class="nav-item">
          <!--
          <img
            class="img-fluid rounded-pill me-2 action-link"
            style="max-height: 50px; max-width: 50px"
            v-if="this.store.currentUser"
            v-bind:src="this.store.currentUser.photoURL"
          />
          -->
          <a
            class="nav-link text-light"
            href="#"
            v-if="this.store.isLoggedIn == true"
            @click="logout"
            >Logout</a
          >
        </li>
      </ul>
    </nav>
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
