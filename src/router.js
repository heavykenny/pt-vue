import Vue from "vue";
import store from "./store.js";
import Router from "vue-router";
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
      redirect: "/view-hobby"
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
      name: "edit-hobby/:id",
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

  if (store.getters.isLoggedIn) {
    return next('/')
  }
});

export default router;
