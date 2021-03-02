import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('../views/home.vue')
        },
        {
            path: '/details',
            component: () => import('../views/details.vue')
        }
    ]
})

export default router