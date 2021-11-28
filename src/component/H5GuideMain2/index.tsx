// @ts-nocheck
import React, { useContext, useState } from 'react'
import { Redirect, useHistory, useLocation, useRouteMatch } from 'react-router'
import {  Toast, Dialog } from 'antd-mobile'
import './index.scss'
import Tour from 'reactour'
import { TourContent } from './TourContent'
import img1 from './img/01.jpeg'
import img2 from './img/02.jpeg'
import imgZhang from './img/zhang.png'


const imgLists = []
const steps = [
  {
    selector: '.guide_h5',
    position: [-130, 290],
    content: (props: any) => (
      <TourContent className="tour_01" total={steps.length} {...props}>
        <div>当您的待办中有有可以启动盖印来盖章的申请时，可点击APP首页的“快速启动盖印”操作来查看</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    position: [100, 110],
    content: (props: any) => (
      <TourContent className="tour_01" total={steps.length} {...props}>
        <div>点击启动盖印</div>
      </TourContent>
    ),
  },
]

/**
 * 主流程引导
 */
export const H5GuideMain2 = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const location = useLocation()
  // 是否显示引导

  const [currentStep, setCurrentStep] = useState(0)
  const [visible, setVisible] = useState(false)
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
        if(cur == 1) {
          setVisible(true)
        }
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
      currentStep == 0 && 
       <div className="h5_page tour_img_01"><img  src={img1} alt=""/></div>
    }
    {
      currentStep == 1 && 
       <div className="h5_page tour_img_01"><img  src={img2} alt=""/></div>
    }
    
    <div id="gaizhang"> 
      <img className="gaizhang_img" src={imgZhang} alt=""/>
      <span className="last_number">剩余：2</span>
      <span className="all_number">总计：5</span>
    </div>
    <Dialog
        visible={visible}
        content='sss'
        closeOnAction
        onClose={() => {
          setVisible(false)
        }}
        actions={[[{
          key: 'confirm',
          text: '暂停盖章',
        },
        {
          key: 'confirm',
          text: '提前结束',
        },]
          
        ]}
      />

    </>
  )
}
