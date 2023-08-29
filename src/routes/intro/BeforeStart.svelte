
<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer3">
            <p>시작하기 전에</p>
        </div>
        <div class="apicont_type01">
            <h2>연동 전 설정하기</h2>
            <span>1. API Key 발급받기</span>
            <h4>회원가입하신 이후 왼쪽하단에 "환경설정 -> API키 관리"에서 API Key 발급 버튼을 눌러 발급 받아주세요.</h4>
            <div class="explan_image">
                <img src="../../../public/assets/img/apikeyguide01.png" alt="apikey" />
                <p>APIKey 발급전 화면</p>
            </div>
            <br/>
            <div class="apinorText marB30">
                <div class="cationBox"><dl>주의사항</dl></div>
                API Key는 통신의 핵심 키이므로 반드시 외부로 노출되지 않는 곳에 저장해서 사용하시기를 권장합니다.<br/>
                또한 보안을 위해 주기적으로 API Key를 재발급하시면 좋습니다.
            </div>

            <br/>
            <br/>
            <br/>

            <span>2. API Key 발급받기</span>
            <h4>발급받으신 APIKey의 사용하실 공인IP를 등록해주세요.</h4>
            <h4> 보안상의 이유로 공인IP는 5개로 제한됩니다.</h4>
            <div class="explan_image">
                <img src="../../../public/assets/img/apikeyguide02.png" alt="apikey" />
                <p>APIKey 발급후 화면</p>
            </div>
            <br/>
            <div class="apinorText marB30">
                <div class="cationBox"><dl>주의사항</dl></div>
                등록되어 있지 않은 IP에서 호출할 시 응답하지 않을 수 있습니다. 꼭 호출할 장소의 공인IP를 등록해주시길 바랍니다.<br/>
            </div>

            <br/>
            <br/>
            <br/>

            <span>3. API 호출하기</span>
            <h4>코코넛 API를 호출하고자 할떄 요청할 코코넛 API Header의 <a style="color: #FC5757">"x-api-key"</a> 값에 <a style="color: #FC5757">APIKey</a>를 지정하여 호출해주시길 바랍니다.</h4>
            <h4>생성한 헤더를 이용한 요청 예시는 다음과 같습니다.</h4>
            <br/>

            <div class="codeContentBox marB20" style="width: 50%">
                <div class="codeTitle">
                    <h2 style="color: #00C389;margin-bottom:0">요청 예시</h2>
                </div>
                <div class="codeNormalContent">
                    <div class="codeNormal" lang="ko">
                        <p class="jsonP_default">curl -i -X GET \</p><br/>
                        <p class="jsonP_red">-H "x-api-key:ApiKey" \ </p><br/>
                        <p class="jsonP_default">"https://kokonut.me/v3/api/Example?param1=123&amp;param2=456"</p>
                    </div>
                </div>
            </div>

        </div>
<!--        <div class="lineDivider"></div>-->
<!--        <div class="apicont_type01">-->
<!--            <h2>서버 개발</h2>-->
<!--            <h3>클라이언트의 결제정보는 언제나 위변조 될 수 있기 때문에, 보안상 서버 구현이 필요합니다. 만약 <span class="at_red">서버리스</span> 환경을 구축하고자 검토하신다면, <span class="at_green">웹훅 통지</span>를 수신할 <span class="at_green">람다 함수</span>를 검토하시길 추천합니다. 또한 보안상 고정 IP를 설정해야 하는데, 서버리스 환경에서 <span class="at_red">고정 IP</span>를 설정할 수 없을 경우, 모든 IP 허용 설정으로 대체할 수 있지만, 그 만큼 보안이 취약해짐으로 권고하지 않습니다.</h3>-->
<!--            <h3>서버 SDK는 아래 기능을 지원합니다.</h3>-->
<!--            <h4>결제 결과 통지 받기</h4>-->
<!--            <h4>결제 결과 조회</h4>-->
<!--            <h4>결제 취소 요청</h4>-->
<!--            <h4>빌링키로 결제 요청</h4>-->
<!--            <h4>빌링키로 결제 예약</h4>-->
<!--        </div>-->
    </div>
</div>
<div class="lineDivider"></div>