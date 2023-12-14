export default [
  {
    path: '/smallcmp',
    name: 'smallcmp',
    component: () => import('@/views/smallcomponents/smallhome.vue'),
    children: [
      {
        name: 'ezcollaper',
        path: 'ezcollaper', //无需添加斜杠
        component: () => import('@/views/smallcomponents/ezcollaper/index.vue'),
      },
      {
        name: 'usedemo',
        path: 'usedemo', //无需添加斜杠
        component: () => import('@/views/smallcomponents/ezcollaper/usedemo.vue'),
      },
    ],

    // component: () => import('@/views/smallcomponents/ezcollaper'),
  },
];
