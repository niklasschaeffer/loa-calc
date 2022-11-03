import { createApp } from "vue";
import { createPinia } from "pinia";
import { useUserStore } from "./stores/user";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth } from "@/firebase/firebase";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router";
import "bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/main.css";

library.add(faGithub);
library.add(faInfo);
library.add(faGoogle);

const app = createApp(App);

const pinia = createPinia();
const store = useUserStore(pinia);

auth.onAuthStateChanged(function (user) {
  if (!user) {
    store.isLoggedIn = false;
    store.currentUser = null;
  } else {
    store.isLoggedIn = true;
    store.currentUser = auth.currentUser;
  }
});

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia);
app.use(router);
app.use(VueAxios, axios);

app.mount("#app");
