<template>
  <form @submit.prevent="login">
    <h2>Log in</h2>
    <div class="form-group">
      <input
        type="email"
        placeholder="Email"
        class="form-control"
        required
        v-model="email"
      />
      <input
        type="password"
        placeholder="Password"
        class="form-control"
        required
        v-model="password"
      />
    </div>
    <button class="btn btn-primary">Log in</button>
  </form>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { router } from "@/router/index";
import { useUserStore } from "@/stores/user";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const store = useUserStore();
      signInWithEmailAndPassword(auth, this.email, this.password).then(() => {
        // emit event for member area
        store.isLoggedIn = true;
        store.currentUser = auth.currentUser;
        router.push("/");
      });
    },
  },
};
</script>
