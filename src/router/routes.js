import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


const index = resolve => {
  import('../pages/home/index.vue').then(module => {
    resolve(module);
  });
};
const home = resolve => {
  import('../pages/home/home.vue').then(module => {
    resolve(module);
  });
};

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/index"
      
    },
    {
      path: "/index",
      component: index,
      children: [
        {
          path: '/index/',
          redirect: 'home'
        },
        {
          path: '/index/home',
          component: home
        }
      ]
    }
  ]
});
