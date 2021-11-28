import React, { useState, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
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
      <div className='home_h5'>
        
      </div>
    </>
  )
}
export default GuidePc
