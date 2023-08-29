<script>
    import {endpoint, start, end} from "../../lib/store.js"
</script>
<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer2">
            <h1>개인정보 항목 수 호출</h1>
        </div>
        <div>
            <div class="apinorText marB20">
                현재까지 추가한 개인정보 테이블의 항목 수를 가져오는 API
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
                                        <p>URL : </p> <h4>https://{$endpoint}/v3/api/Index/privacyItemCount</h4>
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
                    <p class="jsonP_default">curl -i -X GET "https://kokonut.me/v3/api/Index/privacyItemCount" \</p><br/>
                    <p class="jsonP_default">-H "x-api-key:ApiKey" </p><br/>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #00C389">응답 성공</h2></div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status" : 200,</span><br>
                        <span class="jsonSpan_02">"timestamp" : "현재시간",</span><br>
                        <span class="jsonSpan_02">"message" : "SUCCESS",</span><br>
                        <span class="jsonSpan_02">"response" : {$start}</span><br>
                                <span class="jsonSpan_03">"privacyItemCount" : {$start}</span><br>
                                    <span class="jsonSpan_04">"totalAddCount" : 0</span><br>
                                    <span class="jsonSpan_04">"securityCount" : 0</span><br>
                                    <span class="jsonSpan_04">"uniqueCount" : 0</span><br>
                                    <span class="jsonSpan_04">"sensitiveCount" : 0</span><br>
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
                                        <p>totalAddCount</p><span>Integer</span> <b>전체 항목 건수</b>
                                    </div>
                                    <div class="drcont">
                                        <p>securityCount</p><span>Integer</span> <b>암호화 항목 건수</b>
                                    </div>
                                    <div class="drcont">
                                        <p>uniqueCount</p><span>Integer</span> <b>고유식별정보 항목 건수</b>
                                    </div>
                                    <div class="drcont">
                                        <p>sensitiveCount</p><span>Integer</span> <b>민감정보 항목 건수</b>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

<!--        <CommonErrorCode />-->

    </div>
</div>