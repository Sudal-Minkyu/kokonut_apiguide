<script>
    import {endpoint, start, end} from "../../lib/store.js"
</script>
<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer2">
            <h1>마이페이지 수정</h1>
        </div>
        <div>
            <div class="apinorText marB20">
                고객의 정보를 수정하기 위해 호출하는 API
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
                                        <p>메서드 : </p> <h4>POST</h4>
                                    </div>
                                    <div class="drcont">
                                        <p>URL : </p> <h4>https://{$endpoint}/v3/api/Auth/update</h4>
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
                                        <p>kokonut_IDX</p><span>필수</span>
                                        <b>String</b>
                                    </div>
                                    <div class="drcont">
                                        <p>updateList</p><span>필수</span><b>Json or Map : ex) {$start} "수정하고자 하는 값의 고유코드" : "수정할 값" {$end}</b>
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
                <h2>요청 예시 1 - 모든 고객에게 알림을 보낸다.</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p class="jsonP_default">curl -i -X POST "https://kokonut.me/v3/api/Auth/update" \</p><br/>
                    <p class="jsonP_default">-H "Content-Type: application/json" \</p><br/>
                    <p class="jsonP_default">-H "x-api-key:ApiKey" \</p><br/>
                    <span class="jsonSpan_01">--data-raw '{$start}</span><br/>
                    <span class="jsonSpan_02">"kokonut_IDX" : "avfZ3hHNhUwiIDL7c6d3",</span><br>
                    <span class="jsonSpan_02">"updateList": {$start}</span><br>
                    <span class="jsonSpan_03">"1_1" : "수정 할 이름",</span><br>
                    <span class="jsonSpan_03">"1_2" : "수정 할 주소"</span><br>
                    <span class="jsonSpan_02">{$end}</span><br>
                    <span class="jsonSpan_01">{$end}'</span><br>
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
                            <span class="jsonSpan_03">"result" : "수정을 완료했습니다."</span><br>
                        <span class="jsonSpan_02">{$end}</span><br>
                    <span class="jsonSpan_01">{$end}</span><br>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 1 : kokonut_IDX 를 보내주지 않을 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_26"</span><br>
                        <span class="jsonSpan_02">"err_msg": "'kokonut_IDX'가 존재하지 않습니다."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 2 : 수정할 데이터가 존재하지 않을 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_27"</span><br>
                        <span class="jsonSpan_02">"err_msg": "수정할 데이터가 존재하지 않습니다."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

    </div>
</div>