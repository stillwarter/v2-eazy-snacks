import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './modules/home';
import smallcomponents from './modules/smallcomponents';
Vue.use(VueRouter);

const routes = [...home, ...smallcomponents];

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
