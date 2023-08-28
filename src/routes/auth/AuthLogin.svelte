<script>
    import {endpoint, start, end} from "../../lib/store.js"
</script>
<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer2">
            <h1>로그인</h1>
        </div>
        <div>
            <div class="apinorText marB20">
                등록한 개인정보의 ID와 패스워드를 이용하여 로그인 과정을 진행 할 수 있습니다.<br/>
                개인정보 테이블에 등록되어있는 아이디(ID)여야하며 입력한 패스워드(PASSWODR)가 일치하면 로그인에 성공하게 됩니다.
            </div>
            <div class="apinorText marB30">
                <div class="cationBox"><dl>주의사항</dl></div>
                요청해주신 파라메터와 하단 가이드의 파라메터 명이 일치해야 합니다.
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
                                        <p>URL : </p> <h4>https://{$endpoint}/v3/api/Auth/login</h4>
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
                        <h2>요청 파라메터</h2>
                    </div>
                    <ul class="projItems nonePad">
                        <li>
                            <div class="open_proj_box">
                                <div class="dropcont">
                                    <div class="drcont">
                                        <p>jsonObject</p><span>필수</span><b>ex) {$start} "kokonutId" : "입력받은 아이디", "kokonutPw" : "입력받은 비밀번호" {$end}</b>
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
                    <p class="jsonP_default">curl -i -X POST "https://kokonut.me/v3/api/Auth/login" \</p><br/>
                    <p class="jsonP_default">-H "x-api-key : ApiKey" \</p><br/>
                    <span class="jsonSpan_01">-d '{$start}</span><br/>
                    <span class="jsonSpan_02">"kokonutId" : "입력받은 아이디",</span><br>
                    <span class="jsonSpan_02">"kokonutPw" : "입력받은 비밀번호"</span><br>
                    <span class="jsonSpan_01">{$end}'</span><br>
                </div>
            </div>
        </div>
        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #00C389">응답 성공</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        {$start}<br>
                            <span class="jsonSpan" style="color:#222">"response": ""</span><br>
                            <span class="jsonSpan" style="color:#222">"status": 200,</span><br>
                            <span class="jsonSpan" style="color:#222">"timestamp": "현재시간",</span><br>
                            <span class="jsonSpan" style="color:#222">"message": "SUCCESS</span><br>
                        {$end}
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 1 : 아이디를 입력하지 않을 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_19"</span><br>
                        <span class="jsonSpan_02">"err_msg": "아이디를 입력해주세요."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 2 : 비밀번호를 입력하지 않을 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_20"</span><br>
                        <span class="jsonSpan_02">"err_msg": "비밀번호를 입력해주세요."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 3 : 입력받은 아이디가 존재하지 않을 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_21"</span><br>
                        <span class="jsonSpan_02">"err_msg": "존재하지 않은 아이디 입니다."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 4 : 입력받은 비밀번호가 일치하지 않을 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_22"</span><br>
                        <span class="jsonSpan_02">"err_msg": "비밀번호가 일치하지 않습니다."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>


    </div>
</div>