import React from 'react';
import { Image, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './style.css';
import imgA from './titleLogo.png';
import imgB from './listLogo.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        자신의 실력을 보여줄 수 있는 작품이나 관련 내용 등을 집약한 자료수집철 또는 작품집.
    </Tooltip>
);

function Home() {

    return (
        <div>
            <div className="Home-div1">
                <div className="Home-wrap">
                    <div><Image src={imgA} id="Home-img1" /></div>
                    <div className="text1">
                        <p id="Home-imgText1">안녕하세요!</p>
                        <p id="Home-imgText2">React.js 프론트엔드 개발자</p>
                        <p id="Home-imgText3">를 꿈꾸는 20대 청년입니다.</p>
                    </div>
                </div>
            </div>

            <div className="Home-div2">
                <div className="Home-wrap">
                    <div><Image src={imgB} id="Home-img2" /></div>
                    <div className="text1">
                        <p id="Home-imgText4">학력 사항 및 활동 내역부터</p>
                        <p id="Home-imgText5">전공 관련 프로그래밍 기술 스택과</p>
                        <p id="Home-imgText6">취미 분야까지 보여드립니다.</p>
                    </div>
                </div>
            </div>

            <div className="Home-div3">
                <div className="Home-wrap">
                    <div className="text2">
                        <p id="Home-imgText7">해당 웹사이트는 <span id="Home-imgText8">React.js 기반으로 작성</span>되었습니다.
                            {"\n"}
                            <span>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 150, hide: 150 }}
                                    overlay={renderTooltip}
                                >
                                    <Button variant="success" size="lg"> 포트폴리오</Button>
                                </OverlayTrigger>
                            </span> 사이트로 제작하였으며,
                            현재 페이지는 Home<Icon name="home" color="brown"></Icon> 페이지입니다.
                            상단 메뉴바를 통해 차례대로 Profile, Major, Interest 페이지로 이동이 가능합니다.
                            <span id="Home-imgText8"> 2021년 6월 5일에 처음으로 배포</span>된
                            해당 웹사이트는 추후 계속해서 업데이트될 예정입니다. 감사합니다
                            <Icon name="thumbs up outline"></Icon>
                        </p>
                    </div>
                </div>

                <a href="#Home-img1"><div className="Side-menu2"></div></a>
                <a href="#Home-img2"><div className="Side-menu3"></div></a>
                <a href="#Home-imgText7"><div className="Side-menu4"></div></a>

                <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
                <style jsx>{ }</style>
            </div>
        </div>
    )
}

export default Home;