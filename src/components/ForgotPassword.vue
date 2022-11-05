<script>
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { router } from "@/router/index";

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    resetPassword() {
      sendPasswordResetEmail(auth, this.email).then(() => {
        router.push("/login");
      });
    },
  },
};
</script>
<template>
  <form @submit.prevent="resetPassword">
    <div class="card bg-dark">
      <div class="card-header text-center">
        <h2 class="text-light mb-0">Forgot Password</h2>
      </div>
      <div class="card-body">
        <div class="form-group">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <br />
        <div class="row align-items-center">
          <div class="col d-grid gap-2">
            <input
              type="submit"
              class="btn btn-success"
              value="Reset Password"
            />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
