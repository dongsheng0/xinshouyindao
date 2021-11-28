import React, { useState, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { H5GuideMain1 } from "../component/H5GuideMain1";
function GuidePc(params) {
  useEffect(() => {
    document.body.removeAttribute('class', 'pc-body')
    document.body.setAttribute('class', 'h5-body')
    return () => {
      document.body.removeAttribute('class', 'h5-body')
    }
  }, [])
  return (
    <>
      <div className='home-h5'>
        <H5GuideMain1 />
      </div>
    </>
  )
}
export default GuidePc
