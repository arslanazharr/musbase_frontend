import ToastPlugin from "vue-toast-notification";
import router from "./router";
import "./style.css";
import store from "./store";
import "vue-toastification/dist/index.css";
import "vue-toast-notification/dist/theme-bootstrap.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(router);

app.use(store);

app.use(ToastPlugin);

app.mount("#app");
