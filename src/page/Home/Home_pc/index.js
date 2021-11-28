import React, { useState, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import "./index.scss"
import ewm from './img/ewm.png'
function HomePc (params) {
  useEffect(() => {
    document.body.removeAttribute('class', 'pc_guide_body')
    document.body.removeAttribute('class', 'h5_home_body')


    document.body.setAttribute('class', 'pc_home_body')
    return () => {
      document.body.removeAttribute('class', 'pc_home_body')
    }
  }, [])
  return (
    <div>
      <div className='home_pc'>
        <div class="cost-container">
          <div class="center-container" style={{height: '821px'}}>
            <div class="qrcode">
              <div class="entrance-wrapper">
                <div id="personnel-process" site="" class="entrance active">APP端用章截图及流程</div>
                <div id="new-sign" class="entrance" site="">APP开启物联章桶截图及流程</div>
                <div id="renew-sign" class="entrance" site="">web发起申请及用章编辑台体验截图及流程</div>


              </div>
              <img src={ewm} alt="" />
              <div>扫描二维码，立即手机体验</div>
            </div>

              <div class="phone" id="phone">
                <div class="iphoneIframe">
                  <iframe id="demo-iframe" class="iframe" height="100%" width="100%" frameborder="0" scroll="no"
                    src="img/index.html"></iframe>
                </div>
              </div>

                    <div class="info">
                      <div class="small small2">场景体验</div>
                      <div class="gap"></div>
                      <div class="big">智能印章管理</div>
                      <div class="english">让印章申请流程更简单！</div>
                      <div class="gap"></div>
                      <div class="small">体验效果：</div>
                      <div class="small"> 
                          1.通过智能印章APP端体验一次用章申请的全流程，从申请发起到审批，到印章使用，再到后期的盖章文件归档流程
                      </div>
                      <div class="small">
                        2.使用APP端体验快速启动盖印操作，可直接查看操作者当前允许启动物联章桶盖印的申请单，并直接对物联章桶进行开始盖章、暂停盖章、完成盖章
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
  ) 
}
export default HomePc
