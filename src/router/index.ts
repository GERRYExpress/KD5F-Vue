import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '/src/views/LandingPage.vue';
import Result from '/src/views/Result.vue';

const routes = [

    { path: '/', name: 'Home', component: LandingPage},
    { path: '/result', name: 'Result', component: Result}
]

const router = createRouter( {
    history: createWebHistory(),
    routes
});

export default router;