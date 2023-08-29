<script>
    import {endpoint, start, end} from "../../lib/store.js"
</script>
<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer2">
            <h1>비즈엠 알림톡 전송</h1>
        </div>
        <div>
            <div class="apinorText marB20">
                고객들에게 알림톡 전송을 하는 API
            </div>
        </div>
        <div>
            <div class="apinorText marB30">
                <div class="cationBox"><dl>시작하기에 앞서</dl></div>
                코코넛 페이지의 환경설정 -> 서트파티 -> <b style="color: #FC5757">비즈엠</b> 부분에서 알림톡을 전송할 고객의
                <b style="color: #FC5757">전화번호(reciver_num)</b> 또는  <b style="color: #FC5757">앱유저아이디(app_user_id)</b> 둘 중 하나를 선택하여 설정해 주시길 바랍니다.
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
                                        <p>URL : </p> <h4>https://{$endpoint}/v3/api/ThirdParty/alimTalkSend</h4>
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
                                        <p>profileKey</p><span>필수</span>
                                        <b>String : 발신프로필키</b> <br/>
                                    </div>
                                    <div class="drcont">
                                        <p>templateCode</p><span>필수</span>
                                        <b>String : 템플릿코드</b> <br/>
                                    </div>
                                    <div class="drcont">
                                        <p>sendType</p><span>필수</span>
                                        <b>String : "ALL" : 전체고객에게 발송, "SELECT" : 'kokonut_IDX_List'에 담은 고객에게만 발송</b> <br/>
                                    </div>
                                    <div class="drcont">
                                        <p>kokonut_IDX_List</p><span>반필수</span>
                                        <b>String[] : kokonut_IDX 리스트</b> <br/>
                                    </div>
                                    <div class="drcont">
                                        <p>codeList</p><span>선택</span>
                                        <b>JSON or Map : 변수에 해당하는 키(Key)와 값(Value)의 JSON 자료형(Type)으로 구성 -> </b> <br/>
                                        <b>ex) #{$start}변수{$end} 일 때 "변수" : "넣고자하는 변수명" 또는 "변수" : "고유코드(개인정보테이블의 항목)"</b>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div>
            <div class="apinorText marB30">
                <div class="cationBox"><dl>주의사항</dl></div>
                'sendType'의 값이 "SELECT"일 경우 선택전송으로 판단하여 kokonut_IDX_List의 데이터는 <b style="color: #FC5757">필수</b>로 적용됩니다. <br/>
                고유코드의 값의 특징은 맨 앞에 항상 '1_'가 붙기 때문에 변수명은 되도록 앞부분에 '1_'을 넣는 건 피해주시길 당부드립니다.<br/>
                보내고자하는 변수명이 일치하지 않으면 변수 값이 들어가지 않습니다. 전송하신 데이터에 등록하신 템플릿 또는 제공 템플릿의 변수가 <b style="color: #FC5757">일치</b>할 수 있도록 꼭 확인해주시길 바랍니다.
            </div>
        </div>



        <div>
            <div class="apinorText marB30">
                <div class="cationBox"><dl>알림톡 템플릿 예시 1</dl></div>
                #{$start}회사명{$end}회원 여러분께 알립니다. 현재 저희를 사칭하는 기업들이 부쩍 늘고 있습니다. 고객님들께서는 각별히 주의해 주시길 바랍니다. 신고 문의전화 : #{$start}문의전화{$end}
            </div>
        </div>
        <div class="codeContentBox marB20">
            <div class="pjdropName">
                <h2>요청 예시 1 - 모든 고객에게 알림을 보낸다.</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p class="jsonP_default">curl -i -X POST "https://kokonut.me/v3/api/ThirdParty/alimTalkSend" \</p><br/>
                    <p class="jsonP_default">-H "Content-Type: application/json" \</p><br/>
                    <p class="jsonP_default">-H "x-api-key:ApiKey" \</p><br/>
                    <span class="jsonSpan_01">--data-raw '{$start}</span><br/>
                        <span class="jsonSpan_02">"profileKey" : "b930c71b0b66a4debdb4b0f3c4876e93cc0d8401",</span><br>
                        <span class="jsonSpan_02">"templateCode" : "kokonut_code_01",</span><br>
                        <span class="jsonSpan_02">"sendType" : "ALL",</span><br>
                        <span class="jsonSpan_02">"codeList": {$start}</span><br>
                            <span class="jsonSpan_03">"회사명" : "코코넛",</span><br>
                            <span class="jsonSpan_03">"문의전화" : "0507-1348-6533"</span><br>
                        <span class="jsonSpan_02">{$end}</span><br>
                    <span class="jsonSpan_01">{$end}'</span><br>
                </div>
            </div>
        </div>
        <div class="explan_image" style="width: 40%">
            <img src="../../../public/assets/img/thirdparty/alimtalk_example_01.PNG" alt="alimtalkExample01" />
            <p>알림톡 전송 성공 예시 이미지 - 1</p>
        </div>

        <br/><br/><br/>

        <div>
            <div class="apinorText marB30">
                <div class="cationBox"><dl>알림톡 템플릿 예시 2</dl></div>
                #{$start}고객명{$end}님 안녕하세요. #{$start}금액{$end}원 결제가 완료되었습니다. 감사합니다. -#{$start}회사명{$end} 드림-
            </div>
        </div>
        <div class="codeContentBox marB20">
            <div class="pjdropName">
                <h2>요청 예시 2 - 결제완료된 고객에게 알림을 보낸다.</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p class="jsonP_default">curl -i -X POST "https://kokonut.me/v3/api/ThirdParty/alimTalkSend" \</p><br/>
                    <p class="jsonP_default">-H "Content-Type: application/json" \</p><br/>
                    <p class="jsonP_default">-H "x-api-key:ApiKey" \</p><br/>
                        <span class="jsonSpan_01">--data-raw '{$start}</span><br/>
                        <span class="jsonSpan_02">"profileKey" : "b930c71b0b66a4debdb4b0f3c4876e93cc0d8401",</span><br>
                        <span class="jsonSpan_02">"templateCode" : "kokonut_code_02",</span><br>
                        <span class="jsonSpan_02">"sendType" : "SELECT",</span><br>
                        <span class="jsonSpan_02">"kokonut_IDX_List" : ["avfZ3hHNhUwiIDL7c6d3","T7aeHNfVOnQMDyMqCCh5"],</span><br>
                        <span class="jsonSpan_02">"codeList": {$start}</span><br>
                            <span class="jsonSpan_03">"고객명" : "1_31",</span><br>
                            <span class="jsonSpan_03">"금액" : "10000",</span><br>
                            <span class="jsonSpan_03">"회사명" : "코코넛"</span><br>
                        <span class="jsonSpan_02">{$end}</span><br>
                    <span class="jsonSpan_01">{$end}'</span><br>
                </div>
            </div>
        </div>
        <div class="explan_image" style="width: 40%">
            <img src="../../../public/assets/img/thirdparty/alimtalk_example_02.PNG" alt="alimtalkExample02" />
            <p>알림톡 전송 성공 예시 이미지 - 2</p>
        </div>

        <br/><br/><br/>

        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #00C389">응답 성공</h2></div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status" : 200,</span><br>
                        <span class="jsonSpan_02">"timestamp" : "현재시간",</span><br>
                        <span class="jsonSpan_02">"message" : "SUCCESS",</span><br>
                        <span class="jsonSpan_02">"response" : {$start}</span><br>
                            <span class="jsonSpan_03">"alimTalkSendSuc" : 0</span><br>
                            <span class="jsonSpan_03">"alimTalkSendFail" : 0</span><br>
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
                                        <p>alimTalkSendSuc</p><span>Integer</span> <b>알림톡전송 성공건수</b>
                                    </div>
                                    <div class="drcont">
                                        <p>alimTalkSendFail</p><span>Integer</span> <b>알림톡전송 실패건수</b>
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
                <h2 style="color: #FF6752">응답 실패 1 : 필수 파라메터를 보내지 않을 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                            <span class="jsonSpan_02">"status": 500</span><br>
                            <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                            <span class="jsonSpan_02">"message": "FAIL"</span><br>
                            <span class="jsonSpan_02">"err_code": "ERROR_CODE_12"</span><br>
                            <span class="jsonSpan_02">"err_msg": "필수 파라메터가 존재하지 않습니다."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 2 : 'kokonut_IDX_List'의 값이 'List' 형태가 아닐 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                            <span class="jsonSpan_02">"status": 500</span><br>
                            <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                            <span class="jsonSpan_02">"message": "FAIL"</span><br>
                            <span class="jsonSpan_02">"err_code": "ERROR_CODE_13_1"</span><br>
                            <span class="jsonSpan_02">"err_msg": "'kokonut_IDX_List'는 'List' 형태로 보내주시길 바랍니다."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 3 : 'codeList'의 값이 'JSON' 또는 'Map' 형태가 아닐 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                            <span class="jsonSpan_02">"status": 500</span><br>
                            <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                            <span class="jsonSpan_02">"message": "FAIL"</span><br>
                            <span class="jsonSpan_02">"err_code": "ERROR_CODE_13_2"</span><br>
                            <span class="jsonSpan_02">"err_msg": "'codeList'는 'Map' 형태로 보내주시길 바랍니다."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>


        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 4 : 알림톡을 보낼 필드값을 선택하지 않을 경우 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                            <span class="jsonSpan_02">"status": 500</span><br>
                            <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                            <span class="jsonSpan_02">"message": "FAIL"</span><br>
                            <span class="jsonSpan_02">"err_code": "ERROR_CODE_14"</span><br>
                            <span class="jsonSpan_02">"err_msg": "환경설정 -> 서드파티 -> 비즈엠에서 보낼 대상의 항목을 지정해 주시길 바랍니다."</span><br>
                        <span class="jsonSpan_01">{$end}</span><br>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 5 : 'codeList'에 담은 고유코드가 실제로 존재하지 않은 고유코드 일 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                            <span class="jsonSpan_02">"status": 500</span><br>
                            <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                            <span class="jsonSpan_02">"message": "FAIL"</span><br>
                            <span class="jsonSpan_02">"err_code": "ERROR_CODE_15"</span><br>
                            <span class="jsonSpan_02">"err_msg": "지정된 고유코드가 존재하지 않습니다. 보낼 항목의 대상을 다시 지정해주시길 바랍니다. 현재 지정된 고유코드 : 1_??"</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 6 : 비즈엠의 reciver_num 또는 app_user_id로 설정한 필드값이 테이블에 존재하지 않을 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                            <span class="jsonSpan_02">"status": 500</span><br>
                            <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                            <span class="jsonSpan_02">"message": "FAIL"</span><br>
                            <span class="jsonSpan_02">"err_code": "ERROR_CODE_16"</span><br>
                            <span class="jsonSpan_02">"err_msg": "변수로 요청된 고유코드가 존재하지 않습니다. 보내신 고유코드를 다시 한번 확인해주시길 바랍니다. 요청하신 변수 고유코드 : 1_??"</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle">
                <h2 style="color: #FF6752">응답 실패 7 : 알림톡을 전송할 대상이 한명이라도 존재하지 않을 경우</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        <span class="jsonSpan_01">{$start}</span><br>
                            <span class="jsonSpan_02">"status": 500</span><br>
                            <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                            <span class="jsonSpan_02">"message": "FAIL"</span><br>
                            <span class="jsonSpan_02">"err_code": "ERROR_CODE_17"</span><br>
                            <span class="jsonSpan_02">"err_msg": "알림톡 보낼 대상이 존재하지 않습니다."</span><br>
                        <span class="jsonSpan_01">{$end}</span>
                    </p>
                </div>
            </div>
        </div>


    </div>
</div>