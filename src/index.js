import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Main from './Main'
render(
 
  <BrowserRouter>
  <Suspense>
    <Main  />
  </Suspense>
</BrowserRouter>,
  document.getElementById('root')
)
