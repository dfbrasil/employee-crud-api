import { createRouter, createWebHistory } from 'vue-router';
import Nprogress from 'nprogress';

const routes = [
  {
    path: '/',
    name: 'Create New Employee',
    component: () => import('../components/create-employee/CreateEmployeeComponent.vue'),
  },
  {
    path: '/list-employees',
    name: 'List all Employees',
    component: () => import('../components/list-employee/ListEmployeeComponent.vue'),
  },
  {
    path: '/edit-employee:id',
    name: 'Edit Employees',
    component: () => import('../components/edit-employee/EditEmployeeComponent.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeResolve((to, from, next) => {
  // Quando houver carregamento de uma página inical, então usar o Nprogress
  if (to.name) {
    Nprogress.start();
    next();
  }
});

router.afterEach(() => {
  // Completa a animação da rota usando o progressbar
  Nprogress.done();
});

export default router;
