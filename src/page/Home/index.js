import React, { useState, useEffect ,} from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Redirect, useHistory, useLocation, useRouteMatch } from 'react-router'

function goPAGE() {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    return true
  } else {
    return false
  }
}
function Home(params) {
  useEffect(() => {
    document.body.removeAttribute('class', 'pc_guide_body')
    document.body.setAttribute('class', 'h5_guide_body')
    return () => {
      document.body.removeAttribute('class', 'h5_guide_body')
    }
  }, [])

  const history = useHistory()
  useEffect(() => {
    if(goPAGE()) {
      history.push('/home_h5')

    } else {
      history.push('/home_pc')
    }
  }, [])

  return (
    <>
      <div className='home'>
          
      </div>
    </>
  )
}
export default Home
