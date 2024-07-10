// Import necessary styles and libraries
// import './assets/main.css';  // Example: Import your main CSS file
// import 'primeicons/primeicons.css';  // Example: Import PrimeIcons CSS
// import Toast from 'vue-toastification';  // Example: Import Vue Toastification library
// import 'vue-toastification/dist/index.css';  // Example: Import Vue Toastification styles
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
import router from "./router";
import "./style.css";
import store from "./store";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(router);

app.use(store);

app.use(ToastPlugin);

app.mount("#app");
