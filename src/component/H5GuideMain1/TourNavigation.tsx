// @ts-nocheck
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Badge, TabBar } from 'antd-mobile';
import { LeftOutline, RightOutline } from 'antd-mobile-icons';

import { Redirect, useHistory, useLocation, useRouteMatch } from 'react-router';

interface TourNavigationProps {
  total: number;
  step: number;
  goTo: (step: number) => void;
  close: () => void;
}

export const TourNavigation: React.FC<TourNavigationProps> = ({
  step,
  total,
  goTo,
  close,
}) => {
  const history = useHistory();
  const [isShowInPc, setIsShowInPc] = useState(false);
  useEffect(() => {
    if (history.location.search.includes('pcIframe')) {
      setIsShowInPc(true);
    }
  }, []);
  return ReactDOM.createPortal(
    <div className="buttons">
      {step > 1 ? (
        <div className="button button-prev" onClick={() => goTo(step - 2)}>
          <LeftOutline /> 上一步
        </div>
      ) : (
        <div className="button button-prev disabled">
          <LeftOutline /> 上一步
        </div>
      )}
      {!isShowInPc && (
        <div className="button" onClick={() => history.push('/home_h5')}>
          切换场景
        </div>
      )}

      {step < total && (
        <div className="button button-next" onClick={() => goTo(step)}>
          下一步 <RightOutline />
        </div>
      )}
      {step === total && (
        <div
          className="button button-next"
          onClick={() => {
            history.push('/home_h5');
          }}
        >
          完成
        </div>
      )}
    </div>,
    document.body
  );
};
