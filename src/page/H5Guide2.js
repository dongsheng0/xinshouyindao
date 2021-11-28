import React, { useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { H5GuideMain2 } from "../component/H5GuideMain2";
function GuidePc(params) {
  return (
    <>
      <div className='home-h5'>
        <H5GuideMain2 />
      </div>
    </>
  )
}
export default GuidePc
