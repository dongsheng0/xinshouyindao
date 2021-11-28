import React, { useState, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { PCGuideMain } from "../component/PCGuideMain";
function GuidePc(params) {
  useEffect(() => {
    document.body.removeAttribute('class', 'h5_guide_body')
    document.body.setAttribute('class', 'pc_guide_body')
    return () => {
      document.body.removeAttribute('class', 'pc_guide_body')
    }
  }, [])
  return (
    <>
      <div className='guide_pc'>
        <PCGuideMain />
      </div>
    </>
  )
}
export default GuidePc
