import { createRouter, createWebHistory } from 'vue-router';

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

export default router;
