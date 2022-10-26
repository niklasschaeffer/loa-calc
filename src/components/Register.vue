<script>
import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";

export default {
  data() {
    return {
      credentials: {
        username: "",
        password: "",
        email: "",
      },
    };
  },

  methods: {
    signUp() {
      createUserWithEmailAndPassword(
        auth,
        this.credentials.email,
        this.credentials.password
      )
        .then((credential) => {
          console.log(credential);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <form @submit.prevent="signUp">
    <h1>Register Form</h1>
    <input
      type="text"
      placeholder="Username"
      class="form-control"
      required
      v-model="this.credentials.username"
    />
    <input
      type="email"
      placeholder="Email"
      class="form-control"
      required
      v-model="this.credentials.email"
    />
    <input
      type="password"
      placeholder="Password"
      class="form-control"
      required
      v-model="this.credentials.password"
    />
    <button class="btn btn-primary">Sign Up</button>
  </form>
</template>

<style scoped></style>
