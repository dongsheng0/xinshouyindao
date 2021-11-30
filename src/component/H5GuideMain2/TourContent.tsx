// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { TourNavigation } from './TourNavigation';
import ReactDOM from 'react-dom';
import { Redirect, useHistory, useLocation, useRouteMatch } from 'react-router'

import { Popover, Dialog } from 'antd-mobile';

import img1 from './img/01.jpeg';
import img2_1 from './img/02_v2.jpeg';
import img2 from './img/02.jpeg';
import loading from './img/loading.gif';
import img4 from './img/04.jpeg';
import img6 from './img/06.jpeg';
import img7 from './img/07.jpeg';

import img5 from './img/05.jpeg';  // 5和2 一样


import imgZhang from './img/zhang.png';
interface TourContentProps {
  step: number;
  total: number;
  inDOM: boolean;
  goTo: (step: number) => void;
  updateLastNumber?: (num: number) => void;
  close: () => void;
  style: any;
  width?: any;
  lastNumber?: number;
  className: string;
  position: any;
}

export const TourContent: React.FC<TourContentProps> = ({
  close,
  goTo,
  updateLastNumber,
  lastNumber,
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
  const history = useHistory()

  useEffect(() => { }, []);
  const [loading, setLoading] = useState(false)

  // 盖章事件
  const handelGaizhang = () => {
    console.log(lastNumber);
    if(lastNumber == 1) {
      goTo(5)
    } else {
      updateLastNumber(lastNumber-1)
    }
  }

  

  // 盖章 || 重新盖章
  const step4Handel = (type) => {

    if(type === 'stop') { // 提前结束
      goTo(4)
    }
    if(type === 'suspend') { // 暂停
      goTo(3)
    }
    console.log('type', type);
  }

  const updateStep = () =>{
    if (step === 2 || step === 4) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        goTo(2)
      }, 300);
    } else if(step === total) {
      history.push('/home_h5')
    } else  {
      goTo(step)
    } 
  }
  
  return ReactDOM.createPortal(
    <div>
      {step == 1 && (
        <div className="h5_page">
          <img src={img1} alt="" />
        </div>
      )}
      {step == 2 && (
        <div className="h5_page">
          <img src={img2_1} alt="" />
        </div>
      )}

      { loading && (
        <div className="h5_page tour_img_2loading">
           <img src={img2_1} alt="" />
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
                text: '正在连接设备...',
              },
            ]}
          />
        </div>
      )}

      {
        // step === 3 ? <TourContentStep3 /> :
        step === 3 ? <>
        <>
          <img src={img4} alt="" />
          <span className="dialog_last_number tourContent-box">{lastNumber}</span>
          <span className="dialog_all_number tourContent-box">5</span>
        </>
        {/* 结束 */}
        <div id="step_stop"
            className={`tourContent-box tour_content_h5 tour_content_${step}`}
            style={{
              left: '4rem',
              top: '6.6rem',
              width: '2rem'
            }}>
            <Popover
              content='当时机盖章操作已完成，但是申请的次数还有剩余的时候，可进行提前结束盖章的操作'
              getContainer={() => document.getElementById('step_stop')}
              visible
              mode={'dark'}
              placement='bottom'
            >
              <div className="pointer-nav" onClick={() => step4Handel('stop')}>
                <div className="round-point"></div>
              </div>
            </Popover>
          </div> 

          {/* 暂停 */}
          <div id="step_suspend"
            className={`tourContent-box tour_content_h5 tour_content_${step}`}
            style={{
              left: '1.3rem',
              top: '6.6rem',
              width: '2rem'
            }}>
            <Popover
              content='点击此处可暂停盖章操作，待需要继续都盖章的时候重新启动改章桶的盖印'
              getContainer={() => document.getElementById('step_suspend')}
              visible
              mode={'dark'}
              placement='bottom'
            >
              <div className="pointer-nav" onClick={() => step4Handel('suspend')}>
                <div className="round-point"></div>
              </div>
            </Popover>
          </div>

          {/* 盖章的图 */}
          <div id="gaizhang">
            <img className="gaizhang_img" src={imgZhang} alt=""/> 
            {/* <span className="last_number">剩余：{lastNumber}</span> */}
            {/* <span className="all_number">总计：5</span> */}
          </div>
          {/* 盖章的提示 */}
          <div
              id="zhang_popover"
              className={`tour_content_h5 tour_content_${step}`}
             >
              <Popover
                content='点击盖一次'
                getContainer={() => document.getElementById('zhang_popover')}
                visible
                mode={'dark'}
                placement='right'
              >
                <div className="pointer-nav"  onClick={() => handelGaizhang()}>
                  <div className="round-point"></div>
                </div>
              </Popover>
            </div>
        </>:
          <div
          id="tourContent-box"
          className={`tourContent-box tour_content_h5   tour_content_${step}`}
          style={{ ...position, width }}
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
        </div>
      }

      {step == 4 && (
        <div className="h5_page">
          <img src={img2} alt="" />
          <span class="step4_number">{lastNumber} / 5</span>
        </div>
      )}
      {step == 5 && (
        <div className="h5_page">
          <img src={img6} alt="" />
          <span class="step5_number">{5 - lastNumber}</span>
        </div>
      )}
      {step == 6 && (
        <div className="h5_page">
          <img src={img7} alt="" />
        </div>
      )}

      
    </div>,
    document.body
  );
};
