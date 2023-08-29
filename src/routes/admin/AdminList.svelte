<script>
    import {endpoint, start, end} from "../../lib/store.js"
</script>
<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer2">
            <h1>관리자 목록</h1>
        </div>
        <div>
            <div class="apinorText marB20">
                현재까지 등록된 관리자목록을 호출하는 API
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
                                        <p>URL : </p> <h4>https://{$endpoint}/v3/api/Admin/list</h4>
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
                    <p class="jsonP_default">curl -i -X GET "https://kokonut.me/v3/api/Admin/list" \</p><br/>
                    <p class="jsonP_default">-H "x-api-key:ApiKey" </p><br/>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #00C389">응답 성공 1</h2></div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 200,</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "SUCCESS",</span><br>
                        <span class="jsonSpan_02">"response": {$start}</span><br>
                            <span class="jsonSpan_03">"adminList": [{$start}</span><br>
                                <span class="jsonSpan_04">"email": "test@email.com",</span><br>
                                <span class="jsonSpan_04">"name": "홍길동",</span><br>
                                <span class="jsonSpan_04">"role": "최고관리자",</span><br>
                                <span class="jsonSpan_04">"connectDate": "yyyy-mm-dd hh:mm,</span><br>
                                <span class="jsonSpan_04">"connectIp": "192.168.0.1"</span><br>
                            <span class="jsonSpan_03">{$end},</span><br>
                            <span class="jsonSpan_03">{$start}</span><br>
                                <span class="jsonSpan_04">"email": "kokonut@email.com",</span><br>
                                <span class="jsonSpan_04">"name": "코코넛",</span><br>
                                <span class="jsonSpan_04">"role": "관리자",</span><br>
                                <span class="jsonSpan_04">"connectDate": "yyyy-mm-dd hh:mm,</span><br>
                                <span class="jsonSpan_04">"connectIp": "192.168.0.2"</span><br>
                            <span class="jsonSpan_03">{$end},</span><br>
                            <span class="jsonSpan_03">{$start}</span><br>
                                <span class="jsonSpan_04">"email": "guide@email.com",</span><br>
                                <span class="jsonSpan_04">"name": "가이드",</span><br>
                                <span class="jsonSpan_04">"role": "게스트",</span><br>
                                <span class="jsonSpan_04">"connectDate": "yyyy-mm-dd hh:mm,</span><br>
                                <span class="jsonSpan_04">"connectIp": "192.168.0.3"</span><br>
                            <span class="jsonSpan_03">{$end}]</span><br>
                        <span class="jsonSpan_02">{$end}</span><br>
                    <span class="jsonSpan_01">{$end}</span><br>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #00C389">응답 성공 2</h2></div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <span class="jsonSpan_01">{$start}</span><br>
                    <span class="jsonSpan_02">"status": 200,</span><br>
                    <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                    <span class="jsonSpan_02">"message": "SUCCESS",</span><br>
                    <span class="jsonSpan_02">"response": {$start}</span><br>
                    <span class="jsonSpan_03">"adminList": []</span><br>
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
                                        <p>adminList</p><span>List</span> <b>관리자 목록 데이터</b>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

    </div>
</div>