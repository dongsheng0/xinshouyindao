import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './common/css/common.scss'
import './common/css/index.scss'
import Main from './Main'
render(
  <BrowserRouter>
  <Suspense>
    <Main  />
  </Suspense>
</BrowserRouter>,
  document.getElementById('root')
)
