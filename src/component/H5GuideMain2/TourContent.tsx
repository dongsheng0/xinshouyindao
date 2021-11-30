// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { TourNavigation } from './TourNavigation';
import ReactDOM from 'react-dom';

import { Popover, Dialog } from 'antd-mobile';

import img1 from './img/01.jpeg';
import img2 from './img/02.jpeg';
import loading from './img/loading.gif';
import img4 from './img/04.jpeg';
import img5 from './img/05.jpeg';
import img6 from './img/06.jpeg';
import img7 from './img/07.jpeg';

import imgZhang from './img/zhang.png';
interface TourContentProps {
  step: number;
  total: number;
  inDOM: boolean;
  goTo: (step: number) => void;
  close: () => void;
  style: any;
  width?: any;
  className: string;
  position: any;
}

export const TourContent: React.FC<TourContentProps> = ({
  close,
  goTo,
  inDOM,
  step,
  placement = 'top',
  total,
  children,
  style,
  width,
  className,
  position,
}) => {
  useEffect(() => {}, []);
  const [loading, setLoading] = useState(false)
  const [lastNumber, setLastNumber] = useState(4)

  // 盖章事件
  const handelGaizhang = () => {
    setLastNumber(lastNumber--)
  }

  useEffect(() => {
   if(lastNumber === 0) {
    goTo(10)
   }
  }, [lastNumber])

  // 盖章 || 重新盖章
  const updateStep = () => {

    if(step === 2) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        goTo(step)
      }, 300);
    } else {
      goTo(step)
    }
  }
  return ReactDOM.createPortal(
    <div>
      {/* {step == 0 && (
        <div className="h5_page tour_img_01">
          <img src={img1} alt="" />
        </div>
      )} */}
      {/* {step == 1 && (
        <div className="h5_page">
          <img src={img2} alt="" />
        </div>
      )} */}

      {/* {step == 2 && loading && (
        <div className="h5_page tour_img_2loading">
           <img src={img2} alt="" />
          <Dialog
            visible={true}
            content={<div className="loading"></div>}
            closeOnAction
            onClose={() => {
              setVisible(false);
            }}
            actions={[
              {
                key: 'confirm',
                text: '正在连接设备',
              },
            ]}
          />
        </div>
      )} */}

      {/* 图片加蒙层 */}
      
      {/* {step == 3 && (
        <div className="h5_page">
          <img src={img4} alt="" />
           <span className="dialog_last_number">{lastNumber}</span>
           <span className="dialog_all_number">5</span>
        </div>
      )} */}

       {
       
        step == 4 && <div id="gaizhang" onClick={() => handelGaizhang}> 
            <img className="gaizhang_img" src={imgZhang} alt=""/>
            <span className="last_number">剩余：2</span>
            <span className="all_number">总计：5</span>
          </div> 
          
      }

      <div
        id="tourContent-box"
        className={`tourContent-box tour_content_${step}`}
        style={{ ...position, width: width + 'px' }}
      >
        <Popover
          content={children}
          getContainer={() => document.getElementById('tourContent-box')}
          visible
          mode={'dark'}
          placement={placement}
        >
          <div className="pointer-nav" onClick={() => updateStep()}>
            <div className="round-point"></div>
          </div>
        </Popover>
        <TourNavigation step={step} goTo={goTo} total={total} close={close} />
      </div>
    </div>,
    document.body
  );
};
