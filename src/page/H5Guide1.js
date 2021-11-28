import React, { useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { H5GuideMain1 } from "../component/H5GuideMain1";
function GuidePc(params) {
  return (
    <>
      <div className='home-h5'>
        <H5GuideMain1 />
      </div>
    </>
  )
}
export default GuidePc
