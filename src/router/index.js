import {createRouter, createWebHistory} from 'vue-router'
import  ShowPage from '../components/ShowPage';

const routes = [

    {path: '/', component:ShowPage},


]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
