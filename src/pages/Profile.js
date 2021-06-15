import React, { useState } from 'react';
import { Card, Accordion, Table, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './style.css';
import imgA from './profile_img.jpg';
import imgB from './major1.PNG';
import imgC from './major2.PNG';
import imgD from './gongmo1.png';
import imgE from './gongmo2.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


function Profile() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const level1Panels = [
        {
            key: 'panel-1a', title: '기본 정보', content: ['소속 : 세종대학교 전자정보공학대학', <br />, '전공 : 디지털콘텐츠학과(현 소프트웨어학과) 전공', <br />, '연계전공 : 소셜미디어매니지먼트 융합연계전공'],
        },
        { key: 'panel-ba', title: '성적', content: '총 평점 : 3.54 / 4.50 (6학기 기준)' },
    ]

    const Level1Content = (
        <div>
            기본 정보 및 성적입니다.
            <Accordion.Accordion panels={level1Panels} />
        </div>
    )

    const level2Panels = [
        { key: 'panel-2a', title: '전공 분야', content: ['2019 세종 인공지능 아이디어 경진대회 [우수상]', <br />, '2020 제8회 세종대학교 SW·AI 해커톤 [참여]', <br />, '2020 제7회 SW·AI·융합 경시대회 - SW코딩경시대회 (전공자 부문) [참여]', <br />, '2021 제11회 창의설계경진대회 [진행중]'] },
        { key: 'panel-2b', title: '비전공 분야', content: ['2019 세계사 도체오DOCHEO 경진대회 [장려상]', <br />, '2020 창업아이디어 경진대회_2020-2 [본선]', <br />, '2021 창업아이디어 경진대회_2021-1 [참여]'] },
    ]

    const Level2Content = (
        <div>
            전공 및 비전공 분야 활동 내역입니다.
            <Accordion.Accordion panels={level2Panels} />
        </div>
    )

    const rootPanels = [
        { key: 'panel-1', title: '학력 사항', content: { content: Level1Content } },
        { key: 'panel-2', title: '활동 내역', content: { content: Level2Content } },
    ]

    return (
        <div>
            <div className="Profile-div1">
                <div className="Profile-wrap">
                    <div id="Profile-card1">
                        <Card
                            image={imgA}
                            header='송현석 (Hyun Seok Song)'
                            meta='1997. 08. 19.'
                            description="경기도 의정부시 거주. 용현초등학교, 충의중학교, 부용고등학교 졸업.
                        세종대학교 디지털콘텐츠학과, 소셜미디어매니지먼트 융합연계전공 이수 (2022. 02. 졸업 예정)"
                        />
                    </div>
                    <div className="text1">
                        <p id="Profile-imgText1">저는 이런 사람입니다!</p>
                        <p id="Profile-imgText2">첫째, 지각 및 결석없는 자세와 마감 기한 준수를 지향합니다.</p>
                        <p id="Profile-imgText3">둘째, 제가 한 일에 대해 검토하고 또 검토하는 습관을 가지고 있습니다.</p>
                        <p id="Profile-imgText4">셋째, 남에게 피해를 끼치는 일을 제일 싫어하며 협동에 적극적으로 동참합니다.</p>
                    </div>
                </div>
            </div>

            <div className="Profile-div2">
                <div className="Profile-wrap">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={imgB}
                                alt="First slide"
                                id="Profile-slideImg"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src={imgC}
                                alt="Second slide"
                                id="Profile-slideImg"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div className="Profile-div3">
                <div className="Profile-wrap">
                    <Accordion defaultActiveIndex={2} panels={rootPanels} styled id="Profile-accorddion" />
                </div>
                <p id="Profile-title">수상 내용</p>
                <div className="Profile-wrap">
                    <div className="Text1">
                        <div>
                            <Image src={imgD} id="Profile-img1" stlye={{ margin: "0 auto" }} />
                            <p id="Profile-imgText5">&nbsp;&nbsp;&nbsp;2019년 2학기, <span id="Profile-imgText6">
                                '학교 구성원들을 위한 무인 키오스크 시스템'을 아이디어로 채택하여 교내 공모전에 참여</span>
                                하였습니다. 소속 단과 대학 교수들의 평가를 거쳐 본선에 진출할 수 있었고, 이후 개발을
                                약 6개월간 진행하였습니다. <span id="Profile-imgText6">C# 기반의 Unity를 사용</span>
                                하였으며, 저는 <span id="Profile-imgText6">사람들에게 흥미로운 콘텐츠를 제공하는 카메라를
                                    통한 표정 인식 파트와 고충을 빠르게 해결할 수 있도록 하는 FAQ 메뉴를 담당</span>하였습니다.
                                이후, 코로나 바이러스의 확산과 팀원들의 졸업 및 취업이 맞물려 100% 완성을 하지 못하였지만
                                이후 노력을 인정받아 <span id="Profile-imgText6">장학금과 특별상을 수상</span>하게되었습니다.
                            </p>

                        </div>
                        <div>
                            <Image src={imgE} id="Profile-img2" />
                            <p id="Profile-imgText5">&nbsp;&nbsp;&nbsp;2019년 2학기, '기독교의 역사적 역할'을 주제로
                                <span id="Profile-imgText6"> 교내 공모전에 참여</span>하였습니다. 저는
                                <span id="Profile-imgText6">팀장 역할을 맡았으며, 임무 분담과 주요 자료 조사
                                    및 정리, PPT 제작을 담당</span>하였습니다. 대회의 진행 형식은 PPT를 활용한 발표
                                형태로 구성되었습니다. '세계사:인간과 문명' 과목 수강생을 대상으로 신청이
                                가능하였고 담당 교수의 평가로 예선 진출, 녹화된 영상을 제출하여 타 분반 교수들의
                                평가를 거쳐 본선 진출을 이루어내었습니다. 결국, <span id="Profile-imgText6">총 34팀
                                    중 3등을 기록하며 장려상을 수상</span>하게 되었습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <p id="Profile-title">경력 사항</p>
                <div className="Profile-wrap">
                    <Table celled id="Profile-table">
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>일시</Table.HeaderCell>
                                <Table.HeaderCell>근무지</Table.HeaderCell>
                                <Table.HeaderCell>근무 내용</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>2019.05 ~ 2019.08</Table.Cell>
                                <Table.Cell>맥주기업 민락점</Table.Cell>
                                <Table.Cell>홀 서빙</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>2020.07 ~ 2020.08</Table.Cell>
                                <Table.Cell>(주)새로고침</Table.Cell>
                                <Table.Cell>입/출고 물류 관리</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell verticalAlign='bottom'>2019.09 ~ 2020.02 <br />2021.03 ~ 2021.08</Table.Cell>
                                <Table.Cell>세종대학교 홍보실</Table.Cell>
                                <Table.Cell>사무 보조 업무</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>

            <a href="#Profile-card1"><div className="Side-menu2"></div></a>
            <a href="#Profile-slideImg"><div className="Side-menu3"></div></a>
            <a href="#Profile-accorddion"><div className="Side-menu4"></div></a>

            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
            <style jsx>{ }</style>
        </div >
    )
}

export default Profile;
