<script>
    import {start, end, endpoint} from "../../lib/store.js"
</script>
<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer2">
            <h1>회원가입</h1>
        </div>
        <div>
            <div class="apinorText marB20">개인정보 테이블에 회원정보 한개를 저장하는 API</div>
            <div class="apinorText marB30">
                <div class="cationBox"><dl>주의사항</dl></div>
                안내문서를 참고하여 사용해 주세요.<br />
                <a target="_blank" href="https://everyfeb.notion.site/1a89f295b25d44c086cdc056763647d1?pvs=4">
                    <span style="color: #00BA83">안내문서 보기</span>
                </a>
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
                                        <p>URL : </p> <h4>https://{$endpoint}/v3/api/Auth/register</h4>
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
                                        <p>jsonObject</p><span>필수</span><b>ex) {$start} "1_id" : "회원가입 아이디", "1_pw" : "회원가입 비밀번호" {$end}</b>
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
                <h2>요청 예시 1 - 아이디가 chunsik 인 회원의 가입 (개인정보 데이터 추가)</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p class="jsonP_default">curl -i -X POST "https://{$endpoint}/v3/api/Auth/register" \</p><br/>
                    <p class="jsonP_default">-H "Content-Type: application/json" \</p><br/>
                    <p class="jsonP_default">-H "x-api-key:ApiKey" \</p><br/>
                    <span class="jsonSpan_01">--data-raw '{$start}</span><br/>
                    <span class="jsonSpan_02">"1_id" : "chunsik",</span><br>
                    <span class="jsonSpan_02">"1_pw" : "po01o2k!m",</span><br>
                    <span class="jsonSpan_02">"1_1" : "01012345678",</span><br>
                    <span class="jsonSpan_02">"1_12" : "서울 강남구 역삼로 165 해성빌딩",</span><br>
                    <span class="jsonSpan_02">"1_13" : "9808012112345",</span><br>
                    <span class="jsonSpan_01">{$end}'</span><br>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="pjdropName">
                <h2>요청 예시 2 - 1의 예제에서 전화번호에 null 값을 할당하고 싶을 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p class="jsonP_default">curl -i -X POST "https://{$endpoint}/v3/api/Auth/register" \</p><br/>
                    <p class="jsonP_default">-H "Content-Type: application/json" \</p><br/>
                    <p class="jsonP_default">-H "x-api-key:ApiKey" \</p><br/>
                    <span class="jsonSpan_01">--data-raw '{$start}</span><br/>
                    <span class="jsonSpan_02">"1_id" : "chunsik",</span><br>
                    <span class="jsonSpan_02">"1_pw" : "po01o2k!m",</span><br>
                    <span class="jsonSpan_02">"1_12" : "서울 강남구 역삼로 165 해성빌딩",</span><br>
                    <span class="jsonSpan_02">"1_13" : "9808012112345",</span><br>
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
                            <span class="jsonSpan_03">"kokonut_IDX" : "5Jm$N^bMG88TuSAvSdzT"</span><br>
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
                                        <p>kokonut_IDX</p><span>String</span> <b>회원가입 성공한 회원의 고유 IDX -</b>&nbsp;<b style="font-weight: 700">발급된 IDX는 꼭 데이터베이스에 저장할 것 (해당 유저를 조회하는 키가 되는 값)</b>
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
                <h2 style="color: #FF6752">응답 실패 1 : 필수로 보낼 데이터가 존재하지 않을 시</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_00"</span><br>
                        <span class="jsonSpan_02">"err_msg": "파라미터 데이터가 없습니다."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 2 : 보낸 데이터의 고유코드가 존재하지 않을 시</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_01"</span><br>
                        <span class="jsonSpan_02">"err_msg": "지정되지 않은 값입니다. 고유코드를 확인해주시고 메뉴얼대로 호출해주시길 바랍니다."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 3 : 필수항목데이터를 보내지않거나 같은 중복했을 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_03"</span><br>
                        <span class="jsonSpan_02">"err_msg": "필수항목을 넣지 않거나, 중복전송을 하셨습니다. '1_id'와 '1_pw'는 하나씩만 보내주시길 바랍니다."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 4 : 존재하지 않은 고유코드를 전송했을 떄</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_04"</span><br>
                        <span class="jsonSpan_02">"err_msg": "존재하지 않은 고유코드 입니다. 고유코드를 확인 해주세요. 고유코드 : 받은 고유코드"</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 5 : 이미 사용중인 아이디일때</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_10"</span><br>
                        <span class="jsonSpan_02">"err_msg": "이미 사용중인 아이디입니다."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 6 : 휴대폰번호에 공백이나 문자가 존재할때</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_18"</span><br>
                        <span class="jsonSpan_02">"err_msg": "휴대전화번호에 문자 또는 공백이 포함되어 있습니다."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 7 : 일정한 자릿수로 들어가야할 번호필드에 크기가 맞지 않을 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_11"</span><br>
                        <span class="jsonSpan_02">"err_msg": "형식과 맞지 않습니다. (-)를 제거하고 보내주세요."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 8 : 이메일 형식과 맞지 않을 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 500</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "FAIL"</span><br>
                        <span class="jsonSpan_02">"err_code": "ERROR_CODE_09"</span><br>
                        <span class="jsonSpan_02">"err_msg": "이메일주소 형식과 맞지 않습니다. 다시 한번 확인해주시길 바랍니다."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

    </div>
</div>