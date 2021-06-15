import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './style.css';

function Major() {

    return (
        <div>
            <div className="Major-div1">
                <div className="Major-wrap">
                    <div className="text3">
                        <p id="Major-imgText1">C</p>
                        <ul>
                            <li id="Major-imgText3">포인터 및 동적할당에 대해 학습하였습니다.</li>
                            <li id="Major-imgText4">자료구조 및 알고리즘 강의를 수강하여 Node와 Tree 구현을 학습하였습니다.</li>
                        </ul>
                    </div>
                    <div className="text3">
                        <p id="Major-imgText1">C++</p>
                        <ul>
                            <li id="Major-imgText3">객체 지향의 이론에 대해 학습하였습니다.</li>
                            <li id="Major-imgText4">도형 그리기 등을 연습하여 MFC에 대한 기본 지식을 학습하였습니다.</li>
                        </ul>
                    </div>
                    <div className="text3">
                        <p id="Major-imgText1">C#</p>
                        <ul>
                            <li id="Major-imgText3">Unity를 이용한 키오스크 프로그램 제작 프로젝트를 진행하였습니다.</li>
                            <li id="Major-imgText4">Face Detecting 관련 Open API를 사용하여 표정 인식 검출을 구현하였습니다.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="Major-div2">
                <div className="Major-wrap">
                    <div className="text3">
                        <p id="Major-imgText2">JAVA</p>
                        <ul>
                            <li id="Major-imgText3">클래스와 상속에 대해 학습하였습니다.</li>
                            <li id="Major-imgText4">Swing과 Thread를 이용한 간단한 계산기 및 게임을 제작하였습니다.</li>
                        </ul>
                    </div>
                    <div className="text3">
                        <p id="Major-imgText2">MySQL</p>
                        <ul>
                            <li id="Major-imgText3">Database의 이론에 대해 학습하였습니다.</li>
                            <li id="Major-imgText4">E-R Diagram, Table, View 작성과 검색 및 수정에 대해 학습하였습니다.</li>
                        </ul>
                    </div>
                    <div className="text3">
                        <p id="Major-imgText2">Python</p>
                        <ul>
                            <li id="Major-imgText3">Python의 기본 문법에 대해 학습하였습니다.</li>
                            <li id="Major-imgText4">BeautifulSoup을 이용하여 웹 크롤링을 구현하였습니다.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="Major-div3">
                <div className="Major-wrap">
                    <div className="text2">
                        <p id="Major-imgText99">HTML, CSS, JavaScript</p>
                        <ul>
                            <li id="Major-imgText3">웹 프로그래밍 강의를 수강하였고, w3school에서 이론에 대해 학습하였으며 Youtube에서 강의를 참고하여 실습하였습니다.</li>
                            <li id="Major-imgText4">Vue.js, React.js 기반의 SPA 프레임워크와 Node.js 및 Firebase Hosting을 활용하여 웹사이트를 작성하였습니다.</li>
                            <li id="Major-imgText5">Bootstrap, Material-UI, Semantic UI 등의 라이브러리를 활용하여 다양한 컴포넌트를 사용하였습니다.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="Major-div4">
                <div className="Major-wrap">
                    <div className="text4">
                        <p id="Major-imgText6">React Native</p>
                        <ul>
                            <li id="Major-imgText7">Expo CLI와 React Native CLI를 통해 간단한 어플리케이션을 빌드하였습니다.</li>
                            <li id="Major-imgText8">Google Maps API를 이용하여 GPS 값을 추출하는 프로그램을 작성하였습니다.</li>
                            <li id="Major-imgText9">React와 병행하여 사용할 수 있도록 학습 계획중에 있습니다.</li>
                        </ul>
                    </div>
                    <div className="text4">
                        <p id="Major-imgText6">AWS</p>
                        <ul>
                            <li id="Major-imgText7">간단한 웹사이트를 호스팅하였습니다.</li>
                            <li id="Major-imgText8">Firebase, dothome 등의 호스팅 툴과 비교하며 학습 중에 있습니다.</li>
                            <li id="Major-imgText9">풀스택 개발자로 성장하기 위해 서버 프로그래밍에 대한 학습 계획중에 있습니다.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="Major-div5">
                <div className="Major-wrap">
                    <div className="text2">
                        <p id="Major-imgText11">GitHub</p>
                        <ul>
                            <li id="Major-imgText12">키오스크 시스템 - <a href="https://github.com/BonghoCha/DaeyangAI" target="_blank">https://github.com/BonghoCha/DaeyangAI</a></li>
                            <li id="Major-imgText12">역학조사 시스템 - <a href="https://github.com/hyundol97/CapstoneDesign_AdminWeb_React" target="_blank">https://github.com/hyundol97/CapstoneDesign_AdminWeb_React</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <a href="#Major-imgText1"><div className="Side-menu1"></div></a>
            <a href="#Major-imgText2"><div className="Side-menu2"></div></a>
            <a href="#Major-imgText99"><div className="Side-menu3"></div></a>
            <a href="#Major-imgText6"><div className="Side-menu4"></div></a>
            <a href="#Major-imgText11"><div className="Side-menu5"></div></a>

            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
            <style jsx>{ }</style>
        </div>
    )
}

export default Major;
