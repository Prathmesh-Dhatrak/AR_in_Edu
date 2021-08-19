import { createWebHistory, createRouter } from "vue-router";
import MainComponent from "../views/main.vue";
import alphabetsComponent from "../views/alphabets.vue";
import vehiclesComponent from "../views/vehicles.vue";
import animalsComponent from "../views/animals";
import flowersComponent from "../views/flowers";


const routes = [
  {
    path: "/",
    name: "Home",
    component: MainComponent,
  },
  {
    path: "/alphabets",
    name: "Alphabets",
    component: alphabetsComponent,
  },
  {
    path: "/vehicles",
    name: "Vehicles",
    component: vehiclesComponent,
  },
  {
    path: "/animals",
    name: "Animals",
    component: animalsComponent,
  },
  {
    path: "/flowers",
    name: "Flowers",
    component: flowersComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
