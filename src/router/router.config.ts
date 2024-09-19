import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/app',
    name: 'app',
    component: () => import('../views/Home.vue'),
    meta: { title: '' },
  },
];


export default routes;