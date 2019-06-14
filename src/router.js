import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [{
    path: '*',
    redirect: '/home'
  },
  {
    name: 'home',
    component: () => import('./view/home'),
    meta: {
      title: '首页'
    }
  },
  {
    name: 'list',
    component: () => import('./view/list'),
    meta: {
      title: '列表页'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};