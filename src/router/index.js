import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventsView from "../views/EventsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import RegisterView from "../views/RegisterView.vue";
import MyEventsView from "../views/MyEventsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/events",
      name: "events",
      component: EventsView,
    },
    {
      path: "/event/:id/register",
      name: "register-event",
      component: RegisterView,
    },
    {
      path: "/my-events",
      name: "my-events",
      component: MyEventsView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
