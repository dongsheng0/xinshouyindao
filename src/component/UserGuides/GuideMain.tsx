// @ts-nocheck
import React, { useContext, useState } from 'react'
import { Redirect, useHistory, useLocation, useRouteMatch } from 'react-router'
import Tour from 'reactour'
import { TourContent } from './TourContent'
import img1 from './assets/pc/01.jpeg'
const steps = [
  {
    selector: '.home',
    position: [100, 500],
    content: (props: any) => (
      <TourContent className="first-tour" total={steps.length} {...props}>
        <div>奥丁页面结构升级啦，</div>
      </TourContent>
    ),
  },
  {
    selector: '.home',
    position: [1, 500],
    content: (props: any) => (
      <TourContent className="first-tour" total={steps.length} {...props}>
        <div>3434</div>
      </TourContent>
    ),
  },
]

/**
 * 主流程引导
 */
export const GuideMain = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const location = useLocation()
  // 是否显示引导


  // 点击隐藏引导
  const hideTour = () => {
    // setShouldShowGuide(false)
    history.push(`${location.pathname}`)
  }

  // 如果应该进入引导流程，但是URL里没有参数，增加参数，调整URL
  // if (shouldShowGuide && !showGuide && match.url === '/report/authed') {
  //   return <Redirect to={`${location.pathname}?showGuide=true`} />
  // }

  return (
    <>
    <Tour
      className="zhushou-tour"
      highlightedMaskClassName="zhushou-tour-highlighted"
      disableInteraction
      steps={steps}
      isOpen={true}
      onRequestClose={hideTour}
      closeWithMask={false}
      showButtons={false}
      showCloseButton={false}
      showNumber={false}
      showNavigation={false}
      getCurrentStep={(cur) => {
        if (match.url === '/report/authed') {
          history.push(
            `/report/project`
          )
        }
      }}
    />
    <div className="pc-page"><img  src={img1} alt=""/></div>
    </>
  )
}
