import { Component } from 'vue';
import Home from '../views/Home.vue';
import Authentified from '../views/Authentified.vue';

export interface LabeledRoute {
    path: string;
    name: string;
    label: string;
    component: Component;
}

const routes: Array<LabeledRoute> = [
    {
        path: '/',
        name: 'Home',
        label: 'Home',
        component: Home
    },
    {
        path: '/authentified',
        name: 'Authentified',
        label: 'Authentified',
        component: Authentified
    },
];

export default routes;
