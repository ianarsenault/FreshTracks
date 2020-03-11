import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Profile from "./views/Profile.vue";
import Activities from "./views/Activities.vue";
import New from "./views/New.vue";
import { authGuard } from "./auth";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/activities",
      name: "activities",
      component: Activities
    },
    {
      path: "/upload",
      name: "New",
      component: New
    },
  ]
});

export default router;
