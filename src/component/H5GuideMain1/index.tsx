// @ts-nocheck
import React, { useContext, useState } from 'react'
import { Redirect, useHistory, useLocation, useRouteMatch } from 'react-router'
import {  Toast } from 'antd-mobile'
import './index.scss'
import Tour from 'reactour'
import { TourContent } from './TourContent'
import img0 from './img/00.jpeg'
import img1 from './img/01.jpeg'
import img2 from './img/02.jpeg'
import img3 from './img/03.jpeg'
import img4 from './img/04.jpeg'
import img5 from './img/05.jpeg'
import img6 from './img/06.jpeg'
import img7 from './img/07.jpeg'
const steps = [
  {
    selector: '.home-h5',
    position: [330, 130],
    content: (props: any) => (
      <TourContent className="tour_01" total={steps.length} {...props}>
        <div>请在此处输入”财务账户管理0“</div>
      </TourContent>
    ),
  },
]

/**
 * 主流程引导
 */
export const H5GuideMain1 = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const location = useLocation()
  // 是否显示引导

  const [currentStep, setCurrentStep] = useState(0)
  const [delay, setDelay] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
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
      maskClassName="zs-mask"
      highlightedMaskClassName="zhushou-tour-highlighted"
      disableInteraction
      steps={steps}
      isOpen={isOpen}
      onRequestClose={hideTour}
      closeWithMask={false}
      showButtons={false}
      showCloseButton={false}
      showNumber={false}
      showNavigation={false}
      getCurrentStep={(cur) => {
        setCurrentStep(cur)
        // if(cur === 11) {
        //   Toast.show({
        //     content: '完成了，回到第一步',
        //     afterClose: () => {
        //       console.log('after')
        //     },
        //   })
        //   setIsOpen(false)
        // }
        console.log(cur)
        // if (match.url === '/report/authed') {
        //   history.push(
        //     `/report/project`
        //   )
        // }
      }}
    />
    {
      (currentStep == 0 || currentStep == 1) &&
       <div className="h5-page tour_img_01"><img  src={img1} alt=""/></div>
    }
    
    </>
  )
}
