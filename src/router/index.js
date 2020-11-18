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
    redirect: '/welcome',
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
      {
        path: '/charts',
        name: 'charts',
        component: resolve => require(['@/components/views/chart/charts'], resolve)
      },
      {
        path: '/zips',
        name: 'zips',
        component: resolve => require(['@/components/views/zip/zips'], resolve)
      },
      {
        path: '/tables',
        name: 'tables',
        component: resolve => require(['@/components/views/table/tables'], resolve)
      },
      {
        path: '/powerUser',
        name: 'powerUser',
        component: resolve => require(['@/components/views/power/powerUser'], resolve)
      },
      {
        path: '/powerPage',
        name: 'powerPage',
        component: resolve => require(['@/components/views/power/powerPage'], resolve)
      },
      {
        path: '/exportExcel',
        name: 'exportExcel',
        component: resolve => require(['@/components/views/excel/exportExcel'], resolve)
      },
      {
        path: '/myform',
        name: 'myform',
        component: resolve => require(['@/components/views/form/form'], resolve)
      },
      {
        path: '/assemblys',
        name: 'assemblys',
        component: resolve => require(['@/components/views/assembly/assemblys'], resolve)
      },
      {
        path: '/outerChain',
        name: 'outerChain',
        component: resolve => require(['@/components/views/outerChain/outerChain'], resolve),
        children: [
          {
            path: 'https://www.baidu.com',
            meta: { title: 'External Link', icon: 'link' }
          }
        ]
      },
      {
        path: '/err',
        name: 'err',
        component: resolve => require(['@/components/views/err-page/err'], resolve),
        hidden: true
      }
    ]
  },
  // 下面是用来使用404页面的
  {
    path: '*',
    redirect: '/err', hidden: true
  },
  ]
})
//挂载路由导航守卫
router.beforeEach(function (to, from, next) {
  if (to.path == '/login') return next();
  //获取token
  const token = window.sessionStorage.getItem('token');
  if (!token) return next('/login');
  if (to.path == '/outerChain') {
    window.open('https://github.com/tkp1123/vue-template', '_blank')
    return
  }
  next();
})
export default router
