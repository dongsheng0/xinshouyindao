import PcGuide from '../page/PcGuide'
import H5Guide1 from '../page/H5Guide1'
export const userRoutes = [
  {
    title: 'pc引导页',
    path: '/pc_guide',
    exact: true,
    component: PcGuide,
  },
  {
    title: 'h5引导页',
    path: '/h5_guide_1',
    exact: true,
    component: H5Guide1,
  },
  {
    title: 'pc引导页',
    path: '/',
    exact: true,
    component: PcGuide,
  },
]