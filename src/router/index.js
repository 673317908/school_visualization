import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "School",
  component: () => import("../views/school.vue")
}, ];

const router = new VueRouter({
  routes
});

export default router;