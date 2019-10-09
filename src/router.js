import Vue from "vue";
import store from "./store.js";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import CreateHobby from "./views/CreateHobby.vue";
import EditHobby from "./views/EditHobby.vue";
import ViewHobby from "./views/ViewHobby.vue";
import DeleteHobby from "./views/DeleteHobby.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/create-hobby",
      name: "create-hobby",
      component: CreateHobby,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/edit-hobby",
      name: "edit-hobby",
      component: EditHobby,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/delete-hobby",
      name: "delete-hobby",
      component: DeleteHobby,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/view-hobby",
      name: "view-hobby",
      component: ViewHobby,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/404",
      component: NotFound
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
