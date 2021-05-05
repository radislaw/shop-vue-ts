import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Catalog from '@/views/Catalog.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/catalog/:categoryId',
    name: 'catalog',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsPage.vue'),
  },
  {
    path: '/product/:productId',
    name: 'ProductPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductPage.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
