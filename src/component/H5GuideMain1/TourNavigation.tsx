// @ts-nocheck
import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import { Badge, TabBar } from 'antd-mobile'
import { LeftOutline, RightOutline } from 'antd-mobile-icons'


interface TourNavigationProps {
  total: number
  step: number
  goTo: (step: number) => void
  close: () => void
}

const tabs = [{
    key: 'pre',
    title: '上一步',
  },
  {
    key: 'all',
    title: '选择流程',
  },
  {
    key: 'next',
    title: '下一步',
  },
]

export const TourNavigation: React.FC<TourNavigationProps> = ({
  step,
  total,
  goTo,
  close,
}) => {
  
  return ReactDOM.createPortal(
       <div className="buttons">
         {step > 1 ? (
          <div className="button button-prev" onClick={() => goTo(step - 2)}>
            <LeftOutline /> 上一步
          </div>
        ): 
        <div className="button button-prev disabled">
         <LeftOutline />  上一步
        </div>
        }

        <div className="button">
            切换场景
        </div>

        {step < total && (
          <div className="button button-next"  onClick={() => goTo(step)}>
            下一步 <RightOutline />
          </div>
        )}
        {step === total && (
          <div className="button button-next" onClick={close}>
            完成
          </div>
        )} 
  </div>,
    document.body
  )
}
