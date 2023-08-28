<script>
    import {endpoint, start, end} from "../../lib/store.js"
</script>
<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer2">
            <h1>개인정보 삭제</h1>
        </div>
        <div>
            <div class="apinorText marB20">
                개인정보를 삭제할 경우 호출하는 API(해당 API는 회원탈퇴와 다르게 처리이력에 남습니다.)
            </div>
        </div>
        <div>
            <div class="apinorText marB30">
                <div class="cationBox"><dl>주의사항</dl></div>
                해당 API는 정말 삭제할 건지 <b style="color: #FC5757">사전절차</b>를 모두 확인하고 호출해 주시길 바랍니다.
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
                                        <p>URL : </p> <h4>https://{$endpoint}/v3/api/Persnal/delete</h4>
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
                                        <p>kokonut_IDX</p><span>필수</span> <b>String ex) avfZ$hHNhUwiIDL#c6d#</b>
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
                    <p class="jsonP_default">curl -i -X POST "https://kokonut.me/v3/api/Persnal/delete?kokonut_IDX="avfZ$hHNhUwiIDL#c6d#" \</p><br/>
                    <p class="jsonP_default">-H "x-api-key : ApiKey" </p><br/>
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
                    <span class="jsonSpan_03">"result" : "개인정보 삭제를 완료했습니다."</span><br>
                    <span class="jsonSpan_02">{$end}</span><br>
                    <span class="jsonSpan_01">{$end}</span><br>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 : kokonut_IDX 를 보내주지 않을 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_28"</span><br>
                        <span class="jsonSpan_02">"err_msg": "삭제할 개인정보를 선택해주세요."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

    </div>
</div>