import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import './common/css/common.scss'
import './common/css/index.scss'
import Main from './Main'
render(
  <HashRouter>
  <Suspense>
    <Main  />
  </Suspense>
</HashRouter>,
  document.getElementById('root')
)
