import React, { useState, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { PCGuideMain } from "../component/PCGuideMain";
function GuidePc(params) {
  useEffect(() => {
    document.body.removeAttribute('class', 'h5-body')
    document.body.setAttribute('class', 'pc-body')
    return () => {
      document.body.removeAttribute('class', 'pc-body')
    }
  }, [])
  return (
    <>
      <div className='home-pc'>
        <PCGuideMain />
      </div>
    </>
  )
}
export default GuidePc
