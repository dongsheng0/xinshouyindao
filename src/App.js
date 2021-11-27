import React, { useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { GuideMain } from "./component/UserGuides";
function App(params) {
  return (
    <>
      <div className='home'>
        <GuideMain />
      </div>
    </>
  )
}
export default App
