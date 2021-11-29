// @ts-nocheck
import React, {useEffect} from 'react';
import { TourNavigation } from './TourNavigation';
import ReactDOM from 'react-dom'

import { Popover, Button, Toast } from 'antd-mobile';
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
  position
}) => {

  useEffect(() => {
    
  }, [])
  return ReactDOM.createPortal(
    <div id="tourContent-box" className={`tourContent-box tour_content_${step}`} style={{...position, width: width + 'px'}}>
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
      </div>,
      document.body
  )
};
