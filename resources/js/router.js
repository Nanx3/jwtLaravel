
import ShopComponent from './components/ShopComponent';
import LoginComponent from './components/LoginComponent';
import { createRouter, createWebHistory } from "vue-router";

const routeInfos = [
    {
        path: '/',
        name: 'shop',
        component: ShopComponent
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routeInfos
})

export default router;
