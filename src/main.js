import { createApp } from "vue";
import { createPinia } from "pinia";
import { getFirebase } from "./firebase.js";
import "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/main.css";

library.add(faGithub);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(getFirebase());
app.use(router);

app.mount("#app");
