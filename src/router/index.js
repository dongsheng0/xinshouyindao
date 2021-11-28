import PcGuide from '../page/PcGuide'
import H5Guide1 from '../page/H5Guide1'
import H5Guide2 from '../page/H5Guide2'
export const userRoutes = [
  {
    title: 'pc引导页',
    path: '/pc_guide',
    exact: true,
    component: PcGuide,
  },
  {
    title: 'h5引导页1',
    path: '/h5_guide_1',
    exact: true,
    component: H5Guide1,
  },
  {
    title: 'h5引导页2',
    path: '/h5_guide_2',
    exact: true,
    component: H5Guide2,
  },
  {
    title: 'pc引导页',
    path: '/',
    exact: true,
    component: PcGuide,
  },
]