// @ts-nocheck
import React, { useEffect } from 'react';
import { TourNavigation } from './TourNavigation';
import ReactDOM from 'react-dom';

import { Popover, Dialog } from 'antd-mobile';

import img1 from './img/01.jpeg';
import img2 from './img/02.jpeg';
import loading from './img/loading.gif';
import img4 from './img/02.jpeg';

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

  return ReactDOM.createPortal(
    <div>
      {step == 0 && (
        <div className="h5_page tour_img_01">
          <img src={img1} alt="" />
        </div>
      )}
      {step == 1 && (
        <div className="h5_page">
          <img src={img2} alt="" />
        </div>
      )}

      {step == 2 && (
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
      )}
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
          <div className="pointer-nav" onClick={() => goTo(step)}>
            <div className="round-point"></div>
          </div>
        </Popover>
        <TourNavigation step={step} goTo={goTo} total={total} close={close} />
      </div>
    </div>,
    document.body
  );
};
