import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/components/views/login/login'], resolve)
  },
  {
    path: '/home',
    name: 'home',
    //redirect: '/welcome',
    component: resolve => require(['@/components/common/home'], resolve),
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: resolve => require(['@/components/views/welcome/welcome'], resolve)
      },
      {
        path: '/users',
        name: 'users',
        component: resolve => require(['@/components/views/user/users'], resolve)
      },
      {
        path: '/goods',
        name: 'goods',
        component: resolve => require(['@/components/views/goods/goods'], resolve)
      },
      {
        path: '/permits',
        name: 'permits',
        component: resolve => require(['@/components/views/permit/permits'], resolve)
      },
      {
        path: '/roles',
        name: 'roles',
        component: resolve => require(['@/components/views/permit/roles'], resolve)
      },
      {
        path: '/orders',
        name: 'orders',
        component: resolve => require(['@/components/views/orders/orders'], resolve)
      },
      {
        path: '/reports',
        name: 'reports',
        component: resolve => require(['@/components/views/reports/reports'], resolve)
      },
    ]
  },
  ]
})
//挂载路由导航守卫
router.beforeEach(function (to, from, next) {
  if (to.path == '/login') return next();
  //获取token
  const token = window.sessionStorage.getItem('token');
  if (!token) return next('/login');
  next();
})
export default router
