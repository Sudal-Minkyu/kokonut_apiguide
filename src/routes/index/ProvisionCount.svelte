<script>
    import {endpoint, start, end} from "../../lib/store.js"
</script>
<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer2">
            <h1>내부&외부 제공건 수 호출</h1>
        </div>
        <div>
            <div class="apinorText marB20">
                내부제공 건수와 외부제공 건수를 가져오는 API
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
                                        <p>URL : </p> <h4>https://{$endpoint}/v3/api/Index/provisionCount</h4>
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
                                        <p>dateType</p><span>필수</span> <b>String : "1" : 오늘, "2" : 이번주, "3" : 이번달 / (디폴트 : "1")</b>
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
                    <p class="jsonP_default">curl -i -X GET "https://kokonut.me/v3/api/Index/provisionCount?dateType=1" \</p><br/>
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
                                <span class="jsonSpan_04">"fromDate" : "yy. mm. dd"</span><br>
                                <span class="jsonSpan_04">"toDate" : "yy. mm. dd"</span><br>
                                <span class="jsonSpan_04">"todayInsideCount" : 0</span><br>
                                <span class="jsonSpan_04">"todayOutsideCount" : 0</span><br>
                                <span class="jsonSpan_04">"offerInsideCount" : 0</span><br>
                                <span class="jsonSpan_04">"offerOutsideCount" : 0</span><br>
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
                                        <p>fromDate</p><span>String</span> <b>yy. mm. dd(시작 기간)</b>
                                    </div>
                                    <div class="drcont">
                                        <p>toDate</p><span>String</span> <b>yy. mm. dd(끝 기간)</b>
                                    </div>
                                    <div class="drcont">
                                        <p>todayInsideCount</p><span>Integer</span> <b>오늘 등록된 내부건수</b>
                                    </div>
                                    <div class="drcont">
                                        <p>todayOutsideCount</p><span>Integer</span> <b>오늘 등록된 외부건수</b>
                                    </div>
                                    <div class="drcont">
                                        <p>offerInsideCount</p><span>Integer</span> <b>기간 사이에 등록된 내부건수</b>
                                    </div>
                                    <div class="drcont">
                                        <p>offerOutsideCount</p><span>Integer</span> <b>기간 사이에 등록된 외부건수</b>
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