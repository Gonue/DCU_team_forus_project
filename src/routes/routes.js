import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';
import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  { path: '/', redirect: 'projectmain',component: DashboardLayout, children: [
      { path: '/projectmain',name: '프로젝트',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/ProjectMain.vue')
      },

      //Common
      { path: '/filebox', name: '파일함', component: () => import(/* webpackChunkName: "demo" */ '../views/FileBox.vue')},
      { path: '/profile',name: 'profile',component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')},
      { path: '/maps',name: 'maps', component: () => import(/* webpackChunkName: "demo" */ '../views/GoogleMaps.vue')},
      { path: '/address',name: '주소록',component: () => import(/* webpackChunkName: "demo" */ '../views/Address.vue')},
      { path: '/projectinfo',name: '프로젝트 정보',component: () => import(/* webpackChunkName: "demo" */ '../views/ProjectInfo.vue')},
      { path: '/schedule',name: '프로젝트 일정',component: () => import(/* webpackChunkName: "demo" */ '../views/ProjectSchedule.vue')},
      { path: '/history',name: '업무 히스토리',component: () => import(/* webpackChunkName: "demo" */ '../views/ProjectHistory.vue')},
      { path: '/personAddress',name: '담당자 연락처',component: () => import(/* webpackChunkName: "demo" */ '../views/ProjectPersonAddress.vue')},
      { path: '/reportCapture',name: '보고서작성',component: () => import(/* webpackChunkName: "demo" */ '../views/ReportCapture.vue')},
      { path: '/mypage',name: '마이페이지',component: () => import(/* webpackChunkName: "demo" */ '../views/Mypage.vue')},
      //Admin
      { path: '/projectcreate',name: '프로젝트 생성',component: () => import(/* webpackChunkName: "demo" */ '../views/AdminProjectCreate.vue')},
      { path: '/usermanage',name: '유저 관리',component: () => import(/* webpackChunkName: "demo" */ '../views/AdminUserManageMent.vue')},

      //Chat
      { path: '/chatlist',name: '채팅방리스트',component: () => import(/* webpackChunkName: "demo" */ '../views/ChatList.vue')},
      { path: '/chatroom',name: '채팅방',component: () => import(/* webpackChunkName: "demo" */ '../views/ChatRoom.vue')},

    ]
  },

  { path: '/', redirect: 'login',component: AuthLayout,
    children: [
      { path: '/login', name: 'login',component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')},
      { path: '/register',name: 'register',component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')},
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
