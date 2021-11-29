import React, { useState, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Link } from 'react-router-dom'
import './index.scss';
function GuideH5(params) {
  useEffect(() => {
    document.body.removeAttribute('class', 'pc_guide_body');
    document.body.setAttribute('class', 'h5_guide_body');
    return () => {
      document.body.removeAttribute('class', 'h5_guide_body');
    };
  }, []);
  return (
    <>
      <div className="home_h5">
        <div id="change-sence-modal">
          <div className="sence-modal-content">
            <div className="sence-header">
              <div className="sence-title">智能印章管理</div>
              <div className="change-sence-title">请选择查看流程</div>
            </div>
            <div id="personnel-process" className="change-sence-btn">
                 {/* <Link to='/h5_guide_1'>APP端用章截图及流程</Link> */}
                 APP端用章截图及流程
            </div>
            <div id="new-sign" className="change-sence-btn">
              <Link to='/h5_guide_2'>APP开启物联章桶截图及流程</Link>
            </div>
            <div id="renew-sign" className="change-sence-btn">
               web体验截图及流程
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default GuideH5;
