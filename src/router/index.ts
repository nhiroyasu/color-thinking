import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import CompareBgAndFont from '@/components/pages/CompareBgAndFont.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: CompareBgAndFont,
  },
  {
    path: '/background-and-font',
    component: CompareBgAndFont,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
