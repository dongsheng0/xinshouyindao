// @ts-nocheck
import React, { useContext, useState } from 'react'
import { Redirect, useHistory, useLocation, useRouteMatch } from 'react-router'
import {  Toast } from 'antd-mobile'
import './index.scss'
import Tour from 'reactour'
import { TourContent } from './TourContent'
import img1 from './img/01.jpeg'
import img1_gif from './img/01_1.gif'
import img2 from './img/02.jpeg'
import img3 from './img/03.jpeg'
import img4 from './img/04.jpeg'
import img5 from './img/05.jpeg'
import img6 from './img/06.jpeg' //  06.jpeg 和  07_0 是同一张图
import img7_0 from './img/07_0.jpeg'
import img7_1 from './img/07_1.jpeg'
import img7_2 from './img/07_2.jpeg'
import img7_3 from './img/07_3.jpeg'
import img7_4 from './img/07_4.jpeg'
import img8 from './img/08.jpeg'


const imgLists = {
  0: img1,
  1: img1,
  2: img2,
  3: img3, 
  4:img4, 
  5: img5,
  6: img7_0, 
  7:img7_1, 
  8: img7_2, 
  9: img7_3, 
  10: img7_4, 
  11: img8
}
const steps = [
  {
    selector: '.home-pc',
    position: [330, 130],
    content: (props: any) => (
      <TourContent className="tour_01" total={steps.length} {...props}>
        <div>请在此处输入”财务账户管理0“</div>
      </TourContent>
    ),
  },
  {
    selector: '.home-pc',
    position: [670, 130],
    content: (props: any) => (
      <TourContent className="tour_02" total={steps.length} {...props}>
        <div>输入后请点击“查询”1</div>
      </TourContent>
    ),
  },
  {
    selector: '.home-pc',
    position: [733, 550],
    content: (props: any) => (
      <TourContent className="tour_02" total={steps.length} {...props}>
        <div>填写完成业务描述之后，点击进入下一步2</div>
      </TourContent>
    ),
  },
  {
    selector: '.home-pc',
    position: [733, 550],
    content: (props: any) => (
      <TourContent className="tour_02" total={steps.length} {...props}>
        <div>选择了使用的印章之后，点击进入下一步3</div>
      </TourContent>
    ),
  },
  {
    selector: '.home-pc',
    position: [130, 260],
    content: (props: any) => (
      <TourContent className="tour_02" total={steps.length} {...props}>
        <div>”用章编辑台“用于将上传的文件和选择好的印章进行关联，点击此处添加盖章文件4</div>
      </TourContent>
    ),
  },
  {
    selector: '.home-pc',
    position: [690, 444],
    content: (props: any) => (
      <TourContent className="tour_02" total={steps.length} {...props}>
        <div>文件已添加完成，点击此按钮完成添加5</div>
      </TourContent>
    ),
  },
  {
    selector: '.home-pc',
    position: [278, 270],
    content: (props: any) => (
      <TourContent className="tour_02"  total={steps.length} {...props}>
        <div>现在，我们为某个上传的文件，选择要盖的章，先点此文件图标6</div>
      </TourContent>
    ),
  },
  {
    selector: '.home-pc',
    position: [698, 285],
    content: (props: any) => (
      // placement="right" 
      <TourContent className="tour_02"  total={steps.length} {...props}>
        <div>点击文件后选择俩枚印章7</div>
      </TourContent>
    ),
  },
  {
    selector: '.home-pc',
    position: [698, 368],
    content: (props: any) => (
      <TourContent className="tour_02"  total={steps.length} {...props}>
        <div>点击文件后选择俩枚印章8</div>
      </TourContent>
    ),
  },
  {
    selector: '.home-pc',
    position: [278, 270],
    content: (props: any) => (
      <TourContent className="tour_02"  total={steps.length} {...props}>
        <div>此时该文件以和这俩枚印章完成了关联，鼠标点击某个印章可以查看修改名称，修改盖章次数和删除印章9</div>
      </TourContent>
    ),
  },
  {
    selector: '.home-pc',
    position: [733, 550],
    content: (props: any) => (
      <TourContent className="tour_02"  total={steps.length} {...props}>
        <div>在用章编辑台，将所有的文件和需要使用的印章完成关联后，点进入下一步</div>
      </TourContent>
    ),
  },
  {
    selector: '.home-pc',
    position: [730, 146],
    content: (props: any) => (
      <TourContent className="tour_02"  total={steps.length} {...props}>
        <div>在信息确认页确认前面的内容没有问题后，就可以完成申请的打不了</div>
      </TourContent>
    ),
  },
]

/**
 * 主流程引导
 */
export const PCGuideMain = () => {
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
       <div className="pc-page tour_img_01"><img  src={img1} alt=""/></div>
    }
    
    {
      currentStep == 1  && 
      <div className="pc-page  tour_img_01_1"><img  src={img1_gif} alt=""/></div>
    }

    
    {
      currentStep > 1 && 
      <div className={`pc-page pc_tour_step_${currentStep}`}><img  src={imgLists[currentStep]} alt=""/></div>
    }
    
    </>
  )
}
