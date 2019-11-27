import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/visualize',
      component: () => import('./components/ViewConstructor.vue'),
    },
    {
      path: '/create',
      component: () => import('./components/Preview.vue'),
    },
  ],
});
