<script>
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { router } from "@/router/index";
import { useUserStore } from "@/stores/user";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  setup() {
    const store = useUserStore();
    if (store.isLoggedIn) {
      router.push("/");
    }
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          router.push("/");
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
    loginWithGoogle() {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider).then(() => {
        router.push("/");
      });
    },
  },
};
</script>

<template>
  <div class="card bg-dark">
    <div class="card-header text-center">
      <h2 class="text-light mb-0">Log in</h2>
    </div>
    <div class="card-body">
      <div v-if="this.error" class="alert alert-danger">
        {{ this.error }}
      </div>
      <form @submit.prevent="login">
        <div class="form-group">
          <div class="row">
            <div class="col-12">
              <label for="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                class="form-control"
                required
                v-model="email"
              />
            </div>
            <div class="col-12">
              <label for="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                class="form-control"
                required
                v-model="password"
              />
            </div>
          </div>
        </div>
        <br />
        <div class="row align-items-center">
          <div class="col d-grid gap-2">
            <input type="submit" class="btn btn-success" value="Login" />
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer">
      <form @submit.prevent="loginWithGoogle">
        <div class="col d-grid gap-2">
          <button type="submit" class="btn btn-danger">
            <font-awesome-icon icon="fa-brands fa-google"></font-awesome-icon>
            Signin using Google
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
