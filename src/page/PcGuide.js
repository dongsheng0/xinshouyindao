import React, { useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { PCGuideMain } from "../component/PCGuideMain";
function GuidePc(params) {
  return (
    <>
      <div className='home-pc'>
        <PCGuideMain />
      </div>
    </>
  )
}
export default GuidePc
