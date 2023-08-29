<script>
    import {endpoint, start, end} from "../../lib/store.js"
</script>
<div>
    <div class="apiContentBox">
        <div class="apicontTitleVer2">
            <h1>개인정보 검색</h1>
        </div>
        <div>
            <div class="apinorText marB20">
                현재까지 활동중인 개인정보(고객)을 검색하는 API
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
                                        <p>URL : </p> <h4>https://{$endpoint}/v3/api/Persnal/search</h4>
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
                    <p class="jsonP_default">curl -i -X GET "https://kokonut.me/v3/api/Persnal/search \</p><br/>
                    <p class="jsonP_default">-H "x-api-key:ApiKey" </p><br/>
                </div>
            </div>
        </div>

        <div class="codeContentBox marB20">
            <div class="codeTitle"><h2 style="color: #00C389">응답 성공</h2></div>
            <div class="codeNormalContent">
                <div class="codeNormal">
                    <span class="jsonSpan_01">{$start}</span><br>
                        <span class="jsonSpan_02">"status": 200,</span><br>
                        <span class="jsonSpan_02">"timestamp": "현재시간",</span><br>
                        <span class="jsonSpan_02">"message": "SUCCESS",</span><br>
                        <span class="jsonSpan_02">"response": {$start}</span><br>
                            <span class="jsonSpan_03">"persnalList": [{$start}</span><br>
                                <span class="jsonSpan_04">"kokonut_IDX": "6kZ!hyelzsWP2BBrL#DV",</span><br>
                                <span class="jsonSpan_04">"1_id": "test1",</span><br>
                                <span class="jsonSpan_04">"1_1": "홍*동",</span><br>
                                <span class="jsonSpan_04">"1_2": "서울특별시",</span><br>
                                <span class="jsonSpan_04">"1_4": "010****1234"</span><br>
                            <span class="jsonSpan_03">{$end},</span><br>
                            <span class="jsonSpan_03">{$start}</span><br>
                                <span class="jsonSpan_04">"kokonut_IDX": "avfZ$hHNhUwiIDL#c6d#",</span><br>
                                <span class="jsonSpan_04">"1_id": "test2",</span><br>
                                <span class="jsonSpan_04">"1_1": "코*넛",</span><br>
                                <span class="jsonSpan_04">"1_2": "인천광역시",</span><br>
                                <span class="jsonSpan_04">"1_4": "010****5678"</span><br>
                            <span class="jsonSpan_03">{$end},</span><br>
                            <span class="jsonSpan_03">{$start}</span><br>
                                <span class="jsonSpan_04">"kokonut_IDX": "J$zzx$j%#0p5Ukl8SUj%",</span><br>
                                <span class="jsonSpan_04">"1_id": "test3",</span><br>
                                <span class="jsonSpan_04">"1_1": "이*신",</span><br>
                                <span class="jsonSpan_04">"1_2": "서울특별시",</span><br>
                                <span class="jsonSpan_04">"1_4": "010****9123"</span><br>
                            <span class="jsonSpan_03">{$end}]</span><br>
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
                                        <p>persnalList</p><span>List</span> <b>개인정보 목록 데이터</b>
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