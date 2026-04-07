import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '/src/views/LandingPage.vue';
import Result from '/src/views/Result.vue';
import Cart from '/src/views/Cart.vue';
import Wishlist from '/src/views/Wishlist.vue';
import Contact from '/src/views/Contact.vue';
import Checkout from '/src/views/Checkout.vue';
import Account from '../views/Account.vue';
import SignUp from '../views/SignUp.vue';
import Identification from '../views/Identification.vue';
import SignIn from '../views/SignIn.vue';

const routes = [

    { path: '/', name: 'Home', component: LandingPage},
    { path: '/result', name: 'Result', component: Result},
    { path: '/cart', name: 'Cart', component: Cart},
    { path: '/wishlist', name: 'Wishlist', component: Wishlist},
    { path: '/contact', name: 'Contact', component: Contact},
    { path: '/checkout', name: 'Checkout', component: Checkout},
    { path: '/account', name: 'Account', component: Account},
    { path: '/register', name: 'SignUp', component: SignUp},
    { path: '/identification', name: 'Identification', component: Identification},
    { path: '/login', name: 'login', component: SignIn}
]

const router = createRouter( {
    history: createWebHistory(),
    routes
});

export default router;