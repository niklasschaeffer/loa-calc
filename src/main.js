import { createApp } from "vue";
import { createPinia } from "pinia";
import { useUserStore } from "./stores/user";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { auth } from "@/firebase/firebase";

import App from "./App.vue";
import router from "./router";
import "bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/main.css";

library.add(faGithub);
library.add(faInfo);

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

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia);
app.use(router);

app.mount("#app");
