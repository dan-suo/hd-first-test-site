import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import ('@/views/HomeView.vue') },
    { path: '/library', component: () => import ('@/views/LibraryView.vue') }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;