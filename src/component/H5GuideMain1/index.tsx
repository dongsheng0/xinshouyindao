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
import img8 from './img/08.jpeg'
import img9 from './img/09.jpeg'
import img10 from './img/10.jpeg'
import img11 from './img/11.jpeg'
import img12 from './img/12.jpeg'
import img13 from './img/13.jpeg'


const imgLists = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13]
const steps = [
  {
    selector: '.guide_h5',
    position: [-130, 220],
    content: (props: any) => (
      <TourContent className="tour_01" total={steps.length} {...props}>
        <div>在产品首页点击”发起申请“按钮，进入发起用借章申请的流程(体验流程以用章为准)00</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    position: [30, 920],
    content: (props: any) => (
      <TourContent className="tour_01" total={steps.length} {...props}>
        <div>发起流程过程中首先说明要办理什么业务，输入完毕后，点击进入下一环节01</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    position: [140, 620],
    content: (props: any) => (
      <TourContent className="tour_01" total={steps.length} {...props}>
        <div>选择好要用的印章之后，点击进入下一环节02</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    position: [10, 180],
    content: (props: any) => (
      <TourContent className="tour_01" total={steps.length} {...props}>
        <div>点击添加一个用章文件03</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    position: [140, 750],
    content: (props: any) => (
      <TourContent className="tour_01" total={steps.length} {...props}>
        <div>选择好要盖章的文件并选择印章，即可完成添加04</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    position: [130, 860],
    content: (props: any) => (
      <TourContent className="tour_01" total={steps.length} {...props}>
        <div>添加好要盖章的文件并选择好需要的印章之后，点击进入下一环节05</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    position: [10, 1320],
    content: (props: any) => (
      <TourContent className="tour_01" total={steps.length} {...props}>
        <div>在发起前，用户可以确认一遍刚才填写的所有内容，确认无误后即可发布06</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    position: [10, 20],
    content: (props: any) => (
      <TourContent className="tour_01" placement="leftbottom" total={steps.length} {...props}>
        <div>申请发起之后，首先进入审批环节，审批人会收审批推送，点击即可查看07</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    position: [10, 860],
    content: (props: any) => (
      <TourContent className="tour_01" placement="top" total={steps.length} {...props}>
        <div>审批人可进行同意、拒绝和加签三种操作，点击快速完成全部审批环节08</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    position: [10, 220],
    content: (props: any) => (
      <TourContent className="tour_01" placement="leftbottom" total={steps.length} {...props}>
        <div>审批结束之后，印章管理员会收到推送，显示什么用户申请用什么章在什么文件时，点击即可查看9</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    position: [130, 680],
    content: (props: any) => (
      <TourContent className="tour_01" total={steps.length} {...props}>
        <div>用章环节中，设计本申请的各个印章管理员要分别各自的章操作。点击此处，直接完成印章管理员盖章环节10</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    position: [10, 20],
    content: (props: any) => (
      <TourContent className="tour_01" placement="bottom"  total={steps.length} {...props}>
        <div>印章管理员盖章完毕后，此时时机业务进行完毕，发起人就会手袋消息推送提示用户上传文件的盖章照片11</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    position: [10, 720],
    content: (props: any) => (
      <TourContent className="tour_01" placement="top"  total={steps.length} {...props}>
        <div>为满足业务闭环和文件错档等需要，申请完成后要求发起者将文件的盖章照片全部上传，点击直接完成照片的上传操作12</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    position: [110, 50],
    content: (props: any) => (
      <TourContent className="tour_01"  placement="bottom"  total={steps.length} {...props}>
        <div>全部文件的盖章照片上传完成后，此申请请最终标记为完成13</div>
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
       <div className="h5_page tour_img_01"><img  src={imgLists[currentStep]} alt=""/></div>
    }
    
    </>
  )
}
