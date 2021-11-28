import React, { useState, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { H5GuideMain1 } from "../component/H5GuideMain1";
function GuidePc(params) {
  useEffect(() => {
    document.body.removeAttribute('class', 'pc_guide_body')
    document.body.setAttribute('class', 'h5_guide_body')
    return () => {
      document.body.removeAttribute('class', 'h5_guide_body')
    }
  }, [])
  return (
    <>
      <div className='guide_h5'>
        <H5GuideMain1 />
      </div>
    </>
  )
}
export default GuidePc
