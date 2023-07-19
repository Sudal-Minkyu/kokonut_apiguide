<script>
    import { start, end } from "../../lib/store.js"
</script>
<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer2">
            <h1>API 호출 수</h1>
        </div>
        <div>
            <div class="apinorText marB20">
                금일기준 0시부터 현재시간까지 코코넛 API를 호출한 수를 가져오는 API
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
                                        <p>메서드</p> <span>GET</span>
                                    </div>
                                    <div class="drcont">
                                        <p>URL</p> <span>https://kokonut.me/v3/api/Index/apiCount</span>
                                    </div>
                                    <div class="drcont">
                                        <p>인증방식</p> <span>APIKey</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #00C389">요청 예시</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p class="jsonP_default">curl -i -X GET \</p><br/>
                    <p class="jsonP_default">-H "x-api-key : ApiKey" \ </p><br/>
                    <p class="jsonP_default">"https://kokonut.me/v3/api/Index/apiCount"</p>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #00C389">응답: 성공</h2>
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        {$start}<br>
                        <span class="jsonSpan" style="color:#222">"status": 500</span><br>
                        <span class="jsonSpan" style="color:#222">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan" style="color:#222">"message": "FAIL"</span><br>
                        <span class="jsonSpan" style="color:#222">"err_code": "KOKONUT_01"</span><br>
                        <span class="jsonSpan" style="color:#222">"err_msg": "아이디를 입력해주세요."</span><br>
                        {$end}
                    </p>
                </div>
            </div>
        </div>



        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #FF6752">응답 실패1 : 아이디를 입력하지 않을 경우</h2>
                <!--                <img src="/assets/img/codeicon.png" alt="">-->
            </div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        {$start}<br>
                        <span class="jsonSpan" style="color:#222">"status": 500</span><br>
                        <span class="jsonSpan" style="color:#222">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan" style="color:#222">"message": "FAIL"</span><br>
                        <span class="jsonSpan" style="color:#222">"err_code": "KOKONUT_01"</span><br>
                        <span class="jsonSpan" style="color:#222">"err_msg": "아이디를 입력해주세요."</span><br>
                        {$end}
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