<script>
    import {endpoint, start, end} from "../../lib/store.js"
</script>
<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer2">
            <h1>아이디 중복확인</h1>
        </div>
        <div>
            <div class="apinorText marB20">
                회원가입시 아이디 중복확인을 확인하는 API
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
                                        <p>URL : </p> <h4>https://{$endpoint}/v3/api/Auth/checkId</h4>
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
                                        <p>kokonutId</p><span>필수</span> <b>String</b>
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
                    <p class="jsonP_default">curl -i -X GET "https://kokonut.me/v3/api/Auth/checkId?kokonutId=입력받은아이디" \</p><br/>
                    <p class="jsonP_default">-H "x-api-key : ApiKey" </p><br/>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #00C389">응답 성공 1 : 입력받은 아이디가 이미 존재할 경우</h2></div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <span class="jsonSpan_01">{$start}</span><br>
                    <span class="jsonSpan_02">"status" : 200,</span><br>
                    <span class="jsonSpan_02">"timestamp" : "현재시간",</span><br>
                    <span class="jsonSpan_02">"message" : "SUCCESS",</span><br>
                    <span class="jsonSpan_02">"response" : {$start}</span><br>
                    <span class="jsonSpan_03">"result" : "이미 사용중인 아이디 입니다."</span><br>
                    <span class="jsonSpan_02">{$end}</span><br>
                    <span class="jsonSpan_01">{$end}</span><br>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #00C389">응답 성공 2 : 입력받은 아이디를 사용할 수 있을 경우</h2></div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <span class="jsonSpan_01">{$start}</span><br>
                    <span class="jsonSpan_02">"status" : 200,</span><br>
                    <span class="jsonSpan_02">"timestamp" : "현재시간",</span><br>
                    <span class="jsonSpan_02">"message" : "SUCCESS",</span><br>
                    <span class="jsonSpan_02">"response" : {$start}</span><br>
                    <span class="jsonSpan_03">"result" : "사용가능한 아이디 입니다."</span><br>
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
                                        <p>result</p><span>String</span> <b>완료 메세지</b>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 : kokonutId 를 보내주지 않을 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_23"</span><br>
                        <span class="jsonSpan_02">"err_msg": "중복확인 할 아이디를 입력해주세요."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

    </div>
</div>