import { createRouter, createWebHashHistory } from 'vue-router';

import home from './views/home.vue';
import chat from './views/chat.vue';
import stayApp from './views/stay-app.vue';
import reviewApp from './views/review-app.vue';
import loginSignup from './views/login-signup.vue';
import userPage from './views/user-page.vue';
import stayDetails from './views/stay-details.vue';
import stayExplore from './views/stay-explore.vue';
import stayWishList from './views/stay-wish-list.vue';
import stayDashboard from './views/stay-dashboard.vue';
import stayReservation from './views/stay-reservation.vue';
import addStay from './views/add-stay.vue';

const routes = [
  {
    path: '/',
    name: 'stay',
    component: stayApp,
  },
  {
    path: '/stay',
    name: 'stay-app',
    component: stayApp,
  },
  {
    path: '/stay/explore',
    name: 'stay-explore',
    component: stayExplore,
  },
  {
    path: '/stay/wishlist',
    name: 'stay-wish-list',
    component: stayWishList,
  },
  {
    path: '/stay/dashboard/:id',
    name: 'stay-dashboard',
    component: stayDashboard,
  },
  {
    path: '/stay/reservation',
    name: 'stay-reservation',
    component: stayReservation,
  },
  {
    path: '/stay/:id',
    name: 'stay-details',
    component: stayDetails,
  },
  {
    path: '/review',
    name: 'review',
    component: reviewApp,
  },
  {
    path: '/host/:id?',
    name: 'add-stay',
    component: addStay,
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat,
  },
  {
    path: '/login',
    name: 'loginSignup',
    component: loginSignup,
  },
  {
    path: '/user/:id',
    name: 'user-page',
    component: userPage,
  },
];

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // base: process.env.BASE_URL,
});
