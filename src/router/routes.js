
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]

  },
  {
    path: '/indexadmin',
    component: () => import('layouts/SecondLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexAdmin.vue') }
    ]    
  },
  {
    path: '/editvisimisi',
    component: () => import('layouts/BackLayout.vue'),
    children: [
      { path: '', component: () => import('pages/EditVisimisi.vue') },
      { path: '/indexpengajarstaff', component: () => import('pages/Indexpengajarstaff.vue') }
    ]    
  },
  {
    path: '/addpengajarstaff', component: () => import('pages/Addpengajarstaff.vue')
  },
  {
    path: '/editpengajarstaff', component: () => import('pages/Editpengajarstaff.vue')
  },
  {
    path: '/indexpengumuman', component: () => import('pages/IndexPengumuman.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
