<script>
    import { start, end } from "../../lib/store.js"
</script>

<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer2">
            <h1>개인정보 처리이력</h1>
        </div>
        <div>
            <div class="apinorText marB20">
                개인정보 처리이력은 개인정보의 대해 저장, 삭제, 수정의 대한 정보의 리스트의 데이터를 받아올 수 있습니다.
            </div>
            <div class="apinorText marB30">
                <div class="cationBox"><dl>주의사항</dl></div>
                주의사항 :
            </div>
        </div>
<!--        <div class="pjdro_Box marB20">-->
<!--            <ul class="pjandion-menu">-->
<!--                <li class="open_faq">-->
<!--                    <div class="pjdropName">-->
<!--                        <h2>요청 Parameters</h2>-->
<!--                        <i class="fa fa-chevron-down" aria-hidden="true"></i>-->
<!--                    </div>-->
<!--                    <ul class="projItems nonePad">-->
<!--                        <li>-->
<!--                            <div class="open_proj_box">-->
<!--                                <div class="dropcont">-->
<!--                                    <div class="drcont">-->
<!--                                        <p>요청 파라메터 값 필수값은 없을듯</p><span>필수</span><b>string</b>-->
<!--                                    </div>-->
<!--                                    <h3>사용자가 생성한 테이블 컬럼과 해당되는 데이터를 json 형태로 나열한 문자열</h3>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </li>-->
<!--            </ul>-->
<!--        </div>-->
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