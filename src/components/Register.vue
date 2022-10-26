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
    <div class="card bg-dark">
      <div class="card-header text-center">
        <h2 class="text-light">Register Form</h2>
      </div>
      <div class="card-body">
        <div class="form-group">
          <div class="row">
            <div class="col">
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                class="form-control"
                required
                v-model="this.credentials.username"
              />
            </div>
          </div>
          <div class="row">
            <div class="col pt-3">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                class="form-control"
                required
                v-model="this.credentials.email"
              />
            </div>
          </div>
          <div class="row">
            <div class="col pt-3">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                class="form-control"
                required
                v-model="this.credentials.password"
              />
            </div>
          </div>
        </div>

        <br />
        <div class="row align-items-center">
          <div class="col">
            <input type="submit" class="btn btn-primary" value="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
