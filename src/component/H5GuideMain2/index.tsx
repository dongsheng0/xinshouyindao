// @ts-nocheck
import React, { useContext, useState } from 'react'
import { Redirect, useHistory, useLocation, useRouteMatch } from 'react-router'
import './index.scss'
import Tour from 'reactour'
import { TourContent } from './TourContent'

import img1 from './img/01.jpeg';
import img2_1 from './img/02_v2.jpeg';
import img2 from './img/02.jpeg';
import loading from './img/loading.gif';
import img4 from './img/04.jpeg';
import img6 from './img/06.jpeg';
import img7 from './img/07.jpeg';



/**
 * 主流程引导
 */
export const H5GuideMain2 = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const location = useLocation()
  const [lastNumber, setLastNumber] = useState(4)


const steps = [
  {
    selector: '.guide_h5',
    className: "h5_tour_0",
    content: (props: any) => (
      <TourContent  
        {...props} 
        total={steps.length}
        width="5.263rem"
        placement="right"
        position={{ left: '0.13rem', top: '6.34rem' }}
      >
        <div>当您的待办中有有可以启动盖印来盖章的申请时，可点击APP首页的“快速启动盖印”操作来查看</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    className: "h5_tour_1",
    content: (props: any) => (
      <TourContent
        {...props} 
        total={steps.length}
        width="3rem"
        placement="bottom"
        position={{ right: '0.1rem', top: '3.34rem' }}>
        <div>点击启动盖印</div>
      </TourContent>
    ),
  },
  
  {
    selector: '.guide_h5',
    className: "h5_tour_2",
    content: (props: any) => (
      <TourContent
        {...props} 
        lastNumber = {lastNumber}
        updateLastNumber = {updateLastNumber}
        total={steps.length}
        width="5.263rem"
        placement="right"
        position={{ left: '0.1rem', top: '4.74rem' }}>
        <div>自定义，3个描述</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    className: "h5_tour_3",
    content: (props: any) => (
      <TourContent
        {...props} 
        lastNumber = {lastNumber}
        updateLastNumber = {updateLastNumber}
        total={steps.length}
        width="2.263rem"
        placement="bottom"
        position={{ right: '0.18rem', top: '3.34rem' }}>
        <div>暂停盖印后，该代办的“剩余次数/总计次数”数字刷新，点击可再次启动盖印</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    className: "h5_tour_4",
    content: (props: any) => (
      <TourContent
        {...props} 
        lastNumber = {lastNumber}
        updateLastNumber = {updateLastNumber}
        total={steps.length}
        width="3.263rem"
        placement="bottom"
        position={{ left: '4rem', top: '6.6rem' }}>
        <div>点击提前结束此物联印章操作</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    className: "h5_tour_5",
    content: (props: any) => (
      <TourContent
        {...props} 
        total={steps.length}
        width="3.263rem"
        placement= "bottom"
        position={{ left: '2.1rem', top: '3.54rem' }}>
        <div>结束后，该物联印章在这个申请下的待办就消失了，表示在这个申请下该物联印章的操作完成</div>
      </TourContent>
    ),
  },
  
]



  const updateLastNumber = (val) => {
    setLastNumber(val)
  }
  const [currentStep, setCurrentStep] = useState(0)
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
      isOpen={true}
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
        // if (match.url === '/report/authed') {
        //   history.push(
        //     `/report/project`
        //   )
        // }
      }}
    />
    
    {/* 预加载，先这样实现，后期优化 */}
    <div style={{display: 'none'}}>

        {
          currentStep == 0 && <img src={img1} alt=""/> 
        }
        {
          currentStep == 1 && <img src={img2_1} alt=""/> 
        }
        {
          currentStep == 1 && <img src={img2} alt=""/> 
        }
        {
          currentStep == 2 && <img src={img4} alt=""/>
        }
        {
          currentStep == 3 && <img src={img6} alt=""/>
        }
        {
          currentStep == 3 && <img src={img7} alt=""/>
        }
    </div>
    </>
  )
}
