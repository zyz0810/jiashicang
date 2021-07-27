import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: '首页',
        meta: { title: '首页', icon: 'indexIcon', affix: true }
      }
    ]
  }
]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/general',
    component: Layout,
    redirect: '/general/overview',
    name: '综合概览',
    hidden: false,
    meta: {
      title: '在线监测',
      icon: '0',
      roles: ['admin'],
    },
    children: [
      {
        path: 'overview',
        component: () => import('@/views/dashboard/index'),
        name: '综合概览',
        hidden: false,
        meta: {
          title: '综合概览',
          roles: ['admin']
        }
      },
    ]
  },
  {
    path: '/record',
    component: Layout,
    redirect: 'noRedirect',
    name: '备案审批',
    hidden: false,
    meta: {
      title: '备案审批',
      icon: '1',
      roles: [
        'admin',
      ]
    },
    children: [
      {
        path: 'approval',
        component: () => import('@/views/record/approval'),
        name: '备案审批',
        hidden: false,
        meta: {
          title: '备案审批',
          roles: [
            'admin',
          ]
        }
      },
    ]
  },
  {
    path: '/garbage',
    component: Layout,
    redirect: 'noRedirect',
    name: '垃圾全链路',
    hidden: false,
    meta: {
      title: '垃圾全链路',
      icon: '2',
      roles: [
        'admin',
      ]
    },
    children: [
      {
        path: 'link',
        component: () => import('@/views/garbage/link'),
        name: 'link',
        hidden: false,
        meta: {
          title: '垃圾全链路',
          roles: [
            'admin',
          ]
        }
      },
    ]
  },
  {
    path: '/digital',
    component: Layout,
    redirect: 'noRedirect',
    name: '数字服务',
    hidden: false,
    meta: {
      title: '数字服务',
      icon: '3',
      roles: [
        'admin',
      ]
    },
    children: [
      {
        path: 'services',
        component: () => import('@/views/digital/services'),
        name: 'services',
        hidden: false,
        meta: {
          title: '数字服务',
          roles: [
            'admin',
          ]
        }
      },
    ]
  },
  {
    path: '/demonstration',
    component: Layout,
    redirect: 'noRedirect',
    name: '示范小区',
    hidden: false,
    meta: {
      title: '示范小区',
      icon: '4',
      roles: [
        'admin',
      ]
    },
    children: [
      {
        path: 'community',
        component: () => import('@/views/demonstration/community'),
        name: 'community',
        hidden: false,
        meta: {
          title: '示范小区',
          roles: [
            'admin',
          ]
        }
      },
    ]
  },
  {
    path: '/city',
    component: Layout,
    redirect: 'noRedirect',
    name: '市容市貌',
    hidden: false,
    meta: {
      title: '市容市貌',
      icon: '6',
      roles: [
        'admin',
      ]
    },
    children: [
      {
        path: 'appearance',
        component: () => import('@/views/city/appearance'),
        name: 'appearance',
        hidden: false,
        meta: {
          title: '市容市貌',
          roles: [
            'admin',
          ]
        }
      },
    ]
  },
  {
    path: '/law',
    component: Layout,
    redirect: 'noRedirect',
    name: '执法单兵',
    hidden: false,
    meta: {
      title: '执法单兵',
      icon: '7',
      roles: [
        'admin',
      ]
    },
    children: [
      {
        path: 'soldier',
        component: () => import('@/views/law/soldier'),
        name: 'soldier',
        hidden: false,
        meta: {
          title: '执法单兵',
          roles: [
            'admin',
          ]
        }
      },
    ]
  },
  {
    path: '/illegal',
    component: Layout,
    redirect: 'noRedirect',
    name: '违法建筑',
    hidden: false,
    meta: {
      title: '违法建筑',
      icon: '8',
      roles: [
        'admin',
      ]
    },
    children: [
      {
        path: 'construction',
        component: () => import('@/views/illegal/construction'),
        name: 'construction',
        hidden: false,
        meta: {
          title: '违法建筑',
          roles: [
            'admin',
          ]
        }
      },

    ]
  },
  {
    path: '/city',
    component: Layout,
    redirect: 'noRedirect',
    name: '城市治水',
    hidden: false,
    meta: {
      title: '城市治水',
      icon: '9',
      roles: [
        'admin',
      ]
    },
    children: [
      {
        path: 'water',
        component: () => import('@/views/city/water'),
        name: 'water',
        hidden: false,
        meta: {
          title: '城市治水',
          roles: [
            'admin',
          ]
        }
      },
    ]
  },
  {
    path: '/municipal',
    component: Layout,
    redirect: 'noRedirect',
    name: '市政设施',
    hidden: false,
    meta: {
      title: '市政设施',
      icon: '10',
      roles: [
        'admin',
      ]
    },
    children: [
      {
        path: 'facilities',
        component: () => import('@/views/municipal/facilities'),
        name: 'Municipal',
        hidden: false,
        meta: {
          title: '市政设施',
          roles: [
            'admin',
          ]
        }
      },
    ]
  },
  {
    path: '/law',
    component: Layout,
    redirect: 'noRedirect',
    name: '案件归集下派',
    hidden: false,
    meta: {
      title: '案件归集下派',
      icon: '5',
      roles: [
        'admin',
      ]
    },
    children: [
      {
        path: 'case',
        component: () => import('@/views/low/case'),
        name: 'underworld',
        hidden: false,
        meta: {
          title: '案件归集下派',
          roles: [
            'admin',
          ]
        }
      },
    ]
  },
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
