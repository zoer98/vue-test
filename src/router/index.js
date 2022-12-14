import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component: () => import("@/views/Login.vue"),
      name: "Login"
    },
    {
      path: "/home",
      component: () => import("@/views/Home.vue"),
      name: "Home"
    }
  ]
});
