import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Discs from '../components/Discs.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/discs',
    name: 'Discs',
    component: Discs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
