<script>
    import {endpoint, start, end} from "../../lib/store.js"
</script>
<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer2">
            <h1>이메일 발송 현황정보 호출</h1>
        </div>
        <div>
            <div class="apinorText marB20">
                이메일 발송 현황정보를 금일, 이번주, 이번달의 발송완료건수와 예약발성건수 그리고 청구금액과 수신자수를 가져오는 API 입니다.
            </div>
        </div>
        <div class="pjdro_Box marB20">
            <ul class="pjandion-menu">
                <li class="open_faq">
                    <div class="pjdropName">
                        <h2>기본정보</h2>
                    </div>
                    <ul class="projItems nonePad">
                        <li>
                            <div class="open_proj_box">
                                <div class="dropcont">
                                    <div class="drcont">
                                        <p>메서드 : </p> <h4>GET</h4>
                                    </div>
                                    <div class="drcont">
                                        <p>URL : </p> <h4>https://{$endpoint}/v3/api/Index/emailSendInfo</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="pjdro_Box marB20">
            <ul class="pjandion-menu">
                <li class="open_faq">
                    <div class="pjdropName">
                        <h2>요청 파라미터</h2>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>
                    <ul class="projItems nonePad">
                        <li>
                            <div class="open_proj_box">
                                <div class="dropcont">
                                    <div class="drcont">
                                        <p>dateType</p><span>필수</span> <b>String : "1" : 오늘, "2" : 이번주, "3" : 이번달 / (디폴트값 : "1")</b>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="codeContentBox marB20">
            <div class="pjdropName">
                <h2>요청 예시</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p class="jsonP_default">curl -i -X GET \</p><br/>
                    <p class="jsonP_default">-H "x-api-key : ApiKey" \ </p><br/>
                    <p class="jsonP_default">"https://kokonut.me/v3/api/Index/emailSendInfo?dateType=1"</p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #00C389">응답 성공</h2></div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 200,</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "SUCCESS",</span><br>
                        <span class="jsonSpan_02">"sendData": {$start}</span><br>
                            <span class="jsonSpan_03">"emailSendInfoDto": {$start}</span><br>
                                <span class="jsonSpan_04">"completeCount": 0</span><br>
                                <span class="jsonSpan_04">"reservationCount": 0</span><br>
                                <span class="jsonSpan_04">"receptionCount": 0</span><br>
                                <span class="jsonSpan_04">"sendAmount": 0</span><br>
                            <span class="jsonSpan_03">{$end}</span><br>
                        <span class="jsonSpan_02">{$end}</span><br>
                    <span class="jsonSpan_01">{$end}</span><br>
                </div>
            </div>
        </div>

        <div class="pjdro_Box marB20">
            <ul class="pjandion-menu">
                <li class="open_faq">
                    <div class="pjdropName">
                        <h2>응답 데이터</h2>
                    </div>
                    <ul class="projItems nonePad">
                        <li>
                            <div class="open_proj_box">
                                <div class="dropcont">
                                    <div class="drcont">
                                        <p>completeCount</p><span>Integer</span> <b>완료건수</b>
                                    </div>
                                    <div class="drcont">
                                        <p>reservationCount</p><span>Integer</span> <b>예약건수</b>
                                    </div>
                                    <div class="drcont">
                                        <p>receptionCount</p><span>Integer</span> <b>수신건수</b>
                                    </div>
                                    <div class="drcont">
                                        <p>sendAmount</p><span>Integer</span> <b>청구금액</b>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

    </div>
</div>