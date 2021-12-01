import React, { useState, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Link } from 'react-router-dom'

import "./index.scss"
import ewm from './img/ewm.png'
import qunerwei from './img/qunerwei.jpg'
const h5_guide_1_url =  '/#/h5_guide_1?from=pcIframe'
const h5_guide_2_url =  '/#/h5_guide_2?from=pcIframe'
function HomePc (params) {
  useEffect(() => {
    document.body.removeAttribute('class', 'pc_guide_body')
    document.body.removeAttribute('class', 'h5_home_body')


    document.body.setAttribute('class', 'pc_home_body')
    return () => {
      document.body.removeAttribute('class', 'pc_home_body')
    }
  }, [])

  const [h5Url, setH5Url] = useState(h5_guide_1_url)
  const [active1, setActive1] = useState(true)
  const [active2, setActive2] = useState(false)
  return (
    <div>
      <div className='home_pc'>
        <div className="cost-container">
          <div className="center-container" style={{height: '821px'}}>
            <div className="qrcode">
              <div className="entrance-wrapper">
                <div id="personnel-process" className= {active1 ? 'entrance active' : 'entrance'} onClick={() => {
                  setH5Url(h5_guide_1_url)
                  setActive1(true)
                  setActive2(false)
                }} >
                    APP端用章截图及流程
                </div>
                {/* <div id="personnel-process" className="entrance" >
                    <Link to='/h5_guide_1'>APP端用章截图及流程</Link>
                </div> */}
                <div id="new-sign" className= {active2 ? 'entrance active' : 'entrance'} onClick={() => 
                  {
                    setH5Url(h5_guide_2_url)
                    setActive1(false)
                    setActive2(true)
                  }
                  } site="">
                    APP开启物联章桶截图及流程
                  </div>

                {/* <div id="new-sign" className="entrance" site="">
                  <Link to='/h5_guide_2'>APP开启物联章桶截图及流程</Link>
                </div> */}

                  
                <div id="renew-sign" className="entrance" site="">
                    <Link to='/pc_guide'>web发起申请及用章编辑台体验截图及流程</Link>
                </div>

              </div>
              <img src={ewm} alt="" />
              <div>扫描二维码，立即手机体验</div>
            </div>

              <div className="phone" id="phone">
                <div className="iphoneIframe">
                  <iframe id="demo-iframe" className="iframe" height="100%" width="100%" frameborder="0" scroll="no"
                    src={h5Url}></iframe>
                </div>
              </div>

                    <div className="info">
                      <div className="small small2">场景体验</div>
                      <div className="gap"></div>
                      <div className="big">智能印章管理</div>
                      <div className="english">让印章申请流程更简单！</div>
                      <div className="gap"></div>
                      <div className="small">体验效果：</div>
                      <div className="small"> 
                          1.通过智能印章APP端体验一次用章申请的全流程，从申请发起到审批，到印章使用，再到后期的盖章文件归档流程
                      </div>
                      <div className="small">
                        2.使用APP端体验快速启动盖印操作，可直接查看操作者当前允许启动物联章桶盖印的申请单，并直接对物联章桶进行开始盖章、暂停盖章、完成盖章
                      </div>
                    </div>
                    <div className="info">
                      <div className="small" style={{fontSize: '20px'}}>场景体验</div>
                      <div className="gap"></div>
                      <div className="big">智能印章管理</div>
                      <div className="english">让印章申请流程更简单！</div>
                      <div className="gap"></div>
                      <div className="small">体验效果：</div>
                      <div className="small">
                        1.通过智能印章APP端体验一次用章申请的全流程，从申请发起到审批，到印章使用，再到后期的盖章文件归档流程
                      </div>
                      <div className="small">
                        2.使用APP端体验快速启动盖印操作，可直接查看操作者当前允许启动物联章桶盖印的申请单，并直接对物联章桶进行开始盖章、暂停盖章、完成盖章
                      </div>
                      <div className="small" style={{width: '330px', paddingTop:'30px'}}>
                        <div style={{width:'175px',  overflow:'hidden', float:'left'}}>
                          <img src={qunerwei} style={{width:'80px', paddingBottom:'10px'}} alt="" />
                          扫描二维码，加入群聊，<br />了解更多！
                        </div>
                        <div style={{width: '150px',  float:'left', overflow:'hidden'}}>
                          产品咨询：<br />
                          韩天阔：18533663028<br />
                          回　昆：0316-2599967
                        </div>
                      </div>
                    </div>

              </div>
            </div>
          </div>
        </div>
  ) 
}
export default HomePc
