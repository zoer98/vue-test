const route = [
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
    name: "Login"
  },
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    name: "Home"
  }
];
