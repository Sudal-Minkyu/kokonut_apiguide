<script>
    import { start, end } from "../../lib/store.js"
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
                        <h2>요청 파라메터</h2>
                        <!--                        <i class="fa fa-chevron-down" aria-hidden="true"></i>-->
                    </div>
                    <ul class="projItems nonePad">
                        <li>
                            <div class="open_proj_box">
                                <div class="dropcont">
                                    <!--                                    <div class="drcont">-->
                                    <!--                                        <p>signinRequest</p><span>필수</span><b>json (그룹화 kokonutId, kokonutPw)</b>-->
                                    <!--                                    </div>-->
                                    <div class="drcont">
                                        <p>kokonutId</p><span>필수</span><b>사용자 아이디</b>
                                    </div>
                                    <div class="drcont">
                                        <p>kokonutPw</p><span>필수</span><b>사용자 패스워드</b>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #00C389">Response Success</h2>
                <!--                <img src="/assets/img/codeicon.png" alt="">-->
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        {start}<br>
                        <span class="jsonSpan" style="color:#222">"response": IDX(계정의 고유번호 IDX)</span><br>
                        <span class="jsonSpan" style="color:#222">"status": 200,</span><br>
                        <span class="jsonSpan" style="color:#222">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan" style="color:#222">"message": "SUCCESS</span><br>
                        {end}
                    </p>
                </div>
            </div>
        </div>
        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #FF6752">Response Fail 1 : 아이디를 입력하지 않을 경우</h2>
                <!--                <img src="/assets/img/codeicon.png" alt="">-->
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        {start}<br>
                        <span class="jsonSpan" style="color:#222">"status": 500</span><br>
                        <span class="jsonSpan" style="color:#222">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan" style="color:#222">"message": "FAIL"</span><br>
                        <span class="jsonSpan" style="color:#222">"err_code": "KOKONUT_01"</span><br>
                        <span class="jsonSpan" style="color:#222">"err_msg": "아이디를 입력해주세요."</span><br>
                        {end}
                    </p>
                </div>
            </div>
        </div>
        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #FF6752">Response Fail 2 : 아이디가 존재하지 않을 경우</h2>
                <!--                <img src="/assets/img/codeicon.png" alt="">-->
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        {start}<br>
                        <span class="jsonSpan" style="color:#222">"status": 500</span><br>
                        <span class="jsonSpan" style="color:#222">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan" style="color:#222">"message": "FAIL"</span><br>
                        <span class="jsonSpan" style="color:#222">"err_code": "KOKONUT_02"</span><br>
                        <span class="jsonSpan" style="color:#222">"err_msg": "존재하지 않은 아이디 입니다."</span><br>
                        {end}
                    </p>
                </div>
            </div>
        </div>
        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #FF6752">Response Fail 3 : 비밀번호가 틀릴 경우</h2>
                <!--                <img src="/assets/img/codeicon.png" alt="">-->
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        {start}<br>
                        <span class="jsonSpan" style="color:#222">"status": 500</span><br>
                        <span class="jsonSpan" style="color:#222">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan" style="color:#222">"message": "FAIL"</span><br>
                        <span class="jsonSpan" style="color:#222">"err_code": "KOKONUT_03"</span><br>
                        <span class="jsonSpan" style="color:#222">"err_msg": "입력한 비밀번호가 맞지 않습니다."</span><br>
                        {end}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>