import React from 'react';
import { Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './style.css';
import imgA from './titleLogo.png';
import imgB from './listLogo.png';
import imgC from './logo192.png';
import imgD from './human.png';
import imgE from './hobby.png';
import { Carousel, DropdownButton, Dropdown } from 'react-bootstrap';

const floating_menu = {
    position: "fixed",
    top: "15%",
    right: "5%",
}

function Home() {

    return (
        <div>
            <div className="Home-title">
                <p>현재 페이지는 <span style={{ color: "#668FFD" }}>홈페이지</span><Icon name="home" color="brown" />입니다. 웹 사이트에 대한 간단한 소개로 구성되어 있습니다.</p>
            </div>

            <div className="Home-div1">
                <div id="Home-img1"><Image src={imgA} /></div>
                <div>
                    <p id="Home-imgText1">안녕하세요!</p>
                    <p id="Home-imgText2">React.js를 이용한 프론트엔드 개발자</p>
                    <p id="Home-imgText3">를 꿈꾸는 20대 청년입니다.</p>
                </div>
            </div>

            <div className="Home-div2">
                <div id="Home-img2"><Image src={imgB} /></div>
                <div>
                    <p id="Home-imgText4">학력사항 및 수상 경력부터</p>
                    <p id="Home-imgText5" style={{ color: "#00ffff" }}>전공 관련 프로그래밍 기술 스택과</p>
                    <p id="Home-imgText6">취미 분야까지 보여드립니다.</p>
                </div>
            </div>

            <div className="Home-div1">
                <Carousel className="Slide-form">
                    <Carousel.Item interval={5000}>
                        <img
                            src={imgD}
                            alt="First slide"
                            id="Slide-img"
                        />
                        <Carousel.Caption>
                            <h3>1. 프로필</h3>
                            <p>기초 정보부터 학교생활까지 폭 넓게 정리하였습니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            src={imgC}
                            alt="Second slide"
                            id="Slide-img"
                        />
                        <Carousel.Caption>
                            <h3>2. 전공</h3>
                            <p>주 전공과 연계전공을 소개하였습니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            src={imgE}
                            alt="Third slide"
                            id="Slide-img"
                        />
                        <Carousel.Caption>
                            <h3>3. 취미</h3>
                            <p>개인적으로 관심을 갖고있는 분야를 소개하였습니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div>
                <DropdownButton variant="secondary" id="dropdown-basic-button" title="Go to" size="lg" style={floating_menu}>
                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item href="/major">Major</Dropdown.Item>
                    <Dropdown.Item href="/interest">Interest</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    )
}

export default Home;
