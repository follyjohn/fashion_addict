import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/public/Home.vue";
import Login from "../views/admin/Login.vue";
// import Register from "../views/admin/Register.vue";
import firebase from "firebase";
import Dashboard from "../views/admin/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  { path: "/", redirect: "/home" },
  { path: "/admin", redirect: "/admin/dashboard" },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/public/About.vue")
  },
  {
    path: "/admin/login",
    name: "Login",
    component: Login
  },
  // {
  //   path: "/admin/register",
  //   name: "Register",
  //   component: Register
  // },
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    // catch all 404 - define at the very end
    path: "*",
    component: () => import("../views/error/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next();
      } else {
        next({ path: "/admin/login" });
      }
    });
  } else next();
});

export default router;
