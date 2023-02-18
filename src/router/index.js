import { createWebHistory, createRouter } from "vue-router";
import BootstrapTest from "@/components/BoostrapTest.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Axios from "@/components/Axios.vue";

const routes = [
  
 {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
 },
 {
    path: "/bootstrap",
    name: "Bootstrap",
    component: BootstrapTest,
  },
  {
    path: "/axios",
    name: "Axios",
    component: Axios,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;