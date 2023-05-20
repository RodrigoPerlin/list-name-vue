import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../pages/home/Home.vue";

const routes = [{ path: "/", name: "Home", component: HomeVue }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
