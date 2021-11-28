// @ts-nocheck
import React from 'react';
import { TourNavigation } from './TourNavigation';

import { Popover, Button, Toast } from 'antd-mobile'
interface TourContentProps {
  step: number;
  total: number;
  inDOM: boolean;
  goTo: (step: number) => void;
  close: () => void;
  style: any;
  className: string;
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
  className,
}) => {
  return (
    <>
  <div id="tourContent-box" className="tourContent-box">          
  <Popover
        content={children}
        getContainer = {() => document.getElementById('tourContent-box')}
        visible
        mode={'dark'}
        placement={placement}>
        <div>
          <div className="pointer-nav" onClick={() => goTo(step)}>
            <div className="round-point"></div>
          </div>
        </div>
      </Popover>
      <TourNavigation step={step} goTo={goTo} total={total} close={close} />

</div>
      {/* <div className="tourContent-box" id="tourContent-box">
       <div className={className} style={{ ...style }}>
          {children}
        <TourNavigation step={step} goTo={goTo} total={total} close={close} />
      </div>
        <div className="out"><div className="in"></div></div>
        <div id="popover-tips"
          className="popover-tips"
        >
          <span className="popover-in"></span>
        </div>
      
      <div>
          <div className="pointer-nav" onClick={() => goTo(step)}>
            <div className="round-point"></div>
          </div>
        </div> */}
    
    
      {/* </div>  */}
      
      
    </>
  );
};