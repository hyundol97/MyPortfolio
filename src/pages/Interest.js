import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './style.css';
import ReactPlayer from 'react-player'

function Interest() {
    return (
        <div>
            <div className="Interest-div1">
                <div className="Major-wrap">
                    <div className="text2">
                        <ReactPlayer url='https://www.youtube.com/watch?v=uSbgVuSqclY' controls style={{ margin: "0 auto" }} width="50vw" height="57.6vh" />
                        <p id="Interest-imgText2">영상 편집</p>
                        <ul>
                            <li id="Interest-imgText3">Premier Pro와 After Effect, PhotoShop을 사용하였습니다.</li>
                            <li id="Interest-imgText4">화면 전환, 자막, 색상 조정 효과 및 3D 카메라 효과를 부여하였습니다.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="Interest-div2">
                <div className="Major-wrap">
                    <div className="text2">
                        <p id="Interest-imgText2">음악</p>
                        <ul>
                            <li id="Interest-imgText3">녹음 장비 및 관련 소프트웨어를 탐색하고 있습니다.</li>
                            <li id="Interest-imgText4">여가 시간을 활용하여 3곡 이상의 작업물을 업로드할 예정입니다.</li>
                        </ul>
                        <p id="Interest-imgText5">&nbsp;클릭 <Icon name="arrow alternate circle right"></Icon>&nbsp;
                            <a href="https://soundcloud.com/lvamjbs62nc4" target="_blank">
                                <Button animated size="massive">
                                    <Button.Content visible>Sound Cloud</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' />
                                    </Button.Content>
                                </Button>
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
            <style jsx>{ }</style>
        </div>
    )
}

export default Interest;
