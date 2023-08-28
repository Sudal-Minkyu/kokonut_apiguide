<script>
    import { start, end } from "../../lib/store.js"
</script>

<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer2">
            <h1>개인정보 검색</h1>
        </div>
        <div>
            <div class="apinorText marB20">
                개인정보 검색은 고객을 검색할 때 사용됩니다.
            </div>
            <div class="apinorText marB30">
                <div class="cationBox"><dl>주의사항</dl></div>
                주의사항 :
            </div>
        </div>
        <div class="pjdro_Box marB20">
            <ul class="pjandion-menu">
                <li class="open_faq">
                    <div class="pjdropName">
                        <h2>요청 Parameters</h2>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>
                    <ul class="projItems nonePad">
                        <li>
                            <div class="open_proj_box">
                                <div class="dropcont">
                                    <div class="drcont">
                                        <p>id</p><span>필수</span><b>등록된 사용자 아이디 또는 이메일</b>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2>Response</h2><img src="/assets/img/codeicon.png" alt="복사아이콘"></div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <p>
                        {$start}<br>
                        <span class="jsonSpan">"response": "",</span><br>
                        <span class="jsonSpan">"id": "id",</span><br>
                        <span class="jsonSpan">"success": true</span><br>
                        {$end}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>