import { createApp } from "vue";
import { router } from "../src/router/index.js";

import "./assets/scss/style.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import App from "./App.vue";

createApp(App).use(router).mount("#app");
