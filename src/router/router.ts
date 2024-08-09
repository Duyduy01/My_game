import { defineAsyncComponent } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: defineAsyncComponent(() => import("../pages/home/AppHome.vue")),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
