import GuidePc from '../page/PcGuide'
export const userRoutes = [
  {
    title: '个人信息',
    path: '/pc_guide',
    exact: true,
    component: GuidePc,
  },
  {
    title: 'pc引导',
    path: '/',
    exact: true,
    component: GuidePc,
  },
]