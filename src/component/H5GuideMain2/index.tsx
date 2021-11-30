// @ts-nocheck
import React, { useContext, useState } from 'react'
import { Redirect, useHistory, useLocation, useRouteMatch } from 'react-router'
import './index.scss'
import Tour from 'reactour'
import { TourContent } from './TourContent'



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
        position={{ left: '0.1rem', top: '4.74rem' }}
      >
        <div>当您的待办中有有可以启动盖印来盖章的申请时，可点击APP首页的“快速启动盖印”操作来查看1</div>
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
        width="5.263rem"
        placement="right"
        position={{ left: '0.1rem', top: '4.74rem' }}>
        <div>点击启动盖印2</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    className: "h5_tour_2",
    content: (props: any) => (
      <TourContent
        {...props} 
        total={steps.length}
        width="5.263rem"
        placement="right"
        position={{ left: '0.1rem', top: '4.74rem' }}>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    className: "h5_tour_3",
    content: (props: any) => (
      <TourContent
        {...props} 
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
    className: "h5_tour_4",
    content: (props: any) => (
      <TourContent
        {...props} 
        total={steps.length}
        width="5.263rem"
        placement="right"
        position={{ left: '0.1rem', top: '4.74rem' }}>
        <div>点击启动盖印4</div>
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
        width="5.263rem"
        placement="right"
        position={{ left: '0.1rem', top: '4.74rem' }}>
        <div>提前结束</div>
      </TourContent>
    ),
  },
  {
    selector: '.guide_h5',
    className: "h5_tour_6",
    content: (props: any) => (
      <TourContent
        {...props} 
        total={steps.length}
        width="5.263rem"
        placement="right"
        position={{ left: '0.1rem', top: '4.74rem' }}>
        <div>最后以一步，全部完成</div>
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
    
   
    {/* <Dialog
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
      /> */}

    </>
  )
}
