<script>
    import {endpoint, start, end} from "../../lib/store.js"
</script>
<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer2">
            <h1>개인정보 수</h1>
        </div>
        <div>
            <div class="apinorText marB20">
                각 개인정보(고객) 수를 호출해주는 API <br/>
                활성화중인 개인정보 수, 신규가입한 개인정보 수, 탈퇴한 개인정보 수, 금일 접속자 수를 호출한다.
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
                                        <p>URL : </p> <h4>https://{$endpoint}/v3/api/Persnal/count</h4>
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
                    <p class="jsonP_default">curl -i -X GET "https://kokonut.me/v3/api/Persnal/count" \</p><br/>
                    <p class="jsonP_default">-H "x-api-key : ApiKey" </p><br/>
                </div>
            </div>
        </div>

<!--        활성화중인 개인정보 수, 신규가입한 개인정보 수, 탈퇴한 개인정보 수, 금일 접속자 수를 호출한다.-->
        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #00C389">응답 성공</h2></div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <span class="jsonSpan_01">{$start}</span><br>
                    <span class="jsonSpan_02">"status": 200,</span><br>
                    <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                    <span class="jsonSpan_02">"message": "SUCCESS",</span><br>
                    <span class="jsonSpan_02">"response": {$start}</span><br>
                    <span class="jsonSpan_03">"activeCount": 0,</span><br>
                    <span class="jsonSpan_03">"newCount": 0,</span><br>
                    <span class="jsonSpan_03">"secessionCount": 0,</span><br>
                    <span class="jsonSpan_03">"todayCount": 0</span><br>
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
                                        <p>activeCount</p><span>Integer</span> <b>활동중인 개인정보 수</b>
                                    </div>
                                    <div class="drcont">
                                        <p>newCount</p><span>Integer</span> <b>신규가입한 개인정보 수</b>
                                    </div>
                                    <div class="drcont">
                                        <p>secessionCount</p><span>Integer</span> <b>탈퇴한 개인정보 수</b>
                                    </div>
                                    <div class="drcont">
                                        <p>todayCount</p><span>Integer</span> <b>금일 접속수</b>
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