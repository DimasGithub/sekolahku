const routes = [
  { 
    path: '/', component: () => import('pages/Index.vue') 
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
      { path: '', component: () => import('pages/EditVisimisi.vue') }
    ]    
  },
  {
    path: '/addpengajarstaff', component: () => import('pages/Addpengajarstaff.vue')
  },
  {
    path: '/addpengumuman', component:() => import('pages/Addpengumuman.vue')
  },
  {
    path: '/addjadwal', component:() => import('pages/Addjadwal.vue')
  },
  {
    path: '/editpengajarstaff/:id', props: true, component: () => import('pages/Editpengajarstaff.vue')
  },
  {
    path: '/editjadwal/:id', props: true, component: () => import('pages/Editjadwal.vue')
  },
  {
    path: '/detailpengumuman/:id', props: true, component: () => import('pages/Detailpengumuman.vue')
  },
  {
    path: '/indexpengumuman', component: () => import('pages/IndexPengumuman.vue')
  },
  {
    path: '/indexjadwal', component: () => import('pages/Indexjadwal.vue')
  },
  { 
    path: '/indexpengajarstaff', component: () => import('pages/Indexpengajarstaff.vue') 
  },
  { 
    path: '/indextentang', component: () => import('pages/Tentang.vue') 
  },
  { 
    path: '/indexpengaturan', component: () => import('pages/Pengaturan.vue') 
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
