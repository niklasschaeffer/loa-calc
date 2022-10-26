<script>
import { router } from "@/router/index";
import { auth } from "@/firebase/firebase";
import { useUserStore } from "@/stores/user";

export default {
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
    },
    authListener() {
      const store = useUserStore();
      auth.onAuthStateChanged(function (user) {
        if (!user) {
          router.push("/login");
        } else {
          store.isLoggedIn = true;
          store.currentUser = auth.currentUser;
        }
      });
    },
  },
  mounted() {
    this.authListener();
  },
};
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
      <li class="nav-item" v-if="this.store.isLoggedIn == true">
        <RouterLink class="nav-link text-light" to="/rapport"
          >Rapport</RouterLink
        >
      </li>
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
        <a
          class="nav-link text-light"
          href="#"
          v-if="this.store.isLoggedIn == true"
          @click="logout"
          >Logout</a
        >
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
