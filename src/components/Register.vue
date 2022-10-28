<script>
import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { router } from "@/router/index";

export default {
  data() {
    return {
      credentials: {
        username: "",
        password: "",
        email: "",
      },
      error: "",
    };
  },

  methods: {
    signUp() {
      createUserWithEmailAndPassword(
        auth,
        this.credentials.email,
        this.credentials.password
      )
        .then(() => {
          router.push("/");
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
};
</script>

<template>
  <form @submit.prevent="signUp">
    <div class="card bg-dark">
      <div class="card-header text-center">
        <h2 class="text-light mb-0">Registration</h2>
      </div>
      <div class="card-body">
        <div v-if="this.error" class="alert alert-danger">
          {{ this.error }}
        </div>
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
          <div class="col d-grid gap-2">
            <input type="submit" class="btn btn-success" value="Sign Up" />
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="alert alert-danger mb-0">
          <font-awesome-icon
            icon="fa-solid fa-info"
            class="d-block text-center m-auto"
          ></font-awesome-icon>
          <span class="d-block m-auto text-center mt-3"
            >We value your private data ! Nothing will be shared at any
            time</span
          >
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
