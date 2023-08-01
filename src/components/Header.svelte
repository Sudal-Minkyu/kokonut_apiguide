<script>
    import { link } from 'svelte-spa-router'
    // import jQuery from 'jquery';

    // var url = window.location.href;

    // if (url.indexOf('before-start') !== -1)
    // {jQuery('nav .start').addClass('on_nav');}

    // if (url.indexOf('findid') !== -1)
    // {jQuery('nav .one_login').addClass('on_nav');}
    // else if (url.indexOf('change-password') !== -1)
    // {jQuery('nav .two_login').addClass('on_nav');}
    // else if (url.indexOf('info-login') !== -1)
    // {jQuery('nav .three_login').addClass('on_nav');}
    // else if (url.indexOf('join-the-membership') !== -1)
    // {jQuery('nav .four_login').addClass('on_nav');}
    // else if (url.indexOf('dormancy') !== -1)
    // {jQuery('nav .five_login').addClass('on_nav');}
    //
    // else if (url.indexOf('detailed-inquiry') !== -1)
    // {jQuery('nav .one_privacy').addClass('on_nav');}
    // else if (url.indexOf('correction') !== -1)
    // {jQuery('nav .two_privacy').addClass('on_nav');}
    // else if (url.indexOf('status-inquiry') !== -1)
    // {jQuery('nav .three_privacy').addClass('on_nav');}

    // function nameReset() {
    //     jQuery('#docuse').val('');
    // }

    // jQuery(function() {
    //
    //     //----- 문서 검색 OPEN / CLOSE
    //     jQuery('#document_search_pop').on('click', function(e) {
    //         var targeted_popup_class = jQuery(this).attr('data-popup-open');
    //         jQuery('[data-popup="document_search_pop"]').fadeIn(0);
    //         jQuery('#docuse').focus();
    //         jQuery('body').css('overflow','hidden');
    //         e.preventDefault();
    //     });
    //     jQuery('.document_search_pop_close').on('click', function(e) {
    //         jQuery('[data-popup="document_search_pop"]').fadeOut(0);
    //         jQuery('body').css('overflow','unset');
    //         e.preventDefault();
    //     });
    //
    //     var Accordion = function(el, multiple) {
    //         this.el = el || {};
    //         this.multiple = multiple || false;
    //
    //         var dropdownlink = this.el.find('.pjdropName');
    //         dropdownlink.on('click',
    //             { el: this.el, multiple: this.multiple },
    //             this.dropdown);
    //     };
    //
    //     // Accordion.prototype.dropdown = function(e) {
    //     //     var $this = jQuery(this);
    //     //     var $next = $this.next();
    //     //     $next.slideToggle();
    //     //     $this.parent().toggleClass('open_faq');
    //     // }
    //     //
    // })

    const version = import.meta.env.VITE_API_VERSION;
    // console.log("현재 버전 version : "+version);
</script>

<!-- 헤더 -->
<header id="header" class="">
    <div class="topHead">
        <div class="topHeadInner">
            <div class="toplogo">
                <a use:link href="/"><img src="/assets/img/kokonutLogo.png" alt=""><p>Guide</p></a>
            </div>
            <div class="topversion">
                <a>문서버전 : {version}</a>
            </div>
        </div>
    </div>
</header>

<nav class="navMenu">
    <div class="navMenuInner">

        <div class="navSeaBox">
<!--            <div class="navSea" id="document_search_pop">-->
<!--                <div class="nsBox"><span>검색어를 입력해 주세요</span></div>-->
<!--            </div>-->
            <a use:link href="/before" class="start">시작하기 전에</a>
        </div>
        <div class="subNav">
            <ul>
                <li class="onedepth">고객 API</li>
                <li><a use:link href="/authLogin">로그인</a></li>
                <li><a use:link href="/authRegister">회원가입</a></li>
                <li><a use:link href="/develop">마이페이지 조회 및 변경(작업중)</a></li>
                <li><a use:link href="/develop">회원탈퇴(작업중)</a></li>
            </ul>
        </div>
        <div class="subNav">
            <ul>
                <li class="onedepth">홈 위젯 API</li>
                <li><a use:link href="/apiCount">API 호출 수</a></li>
                <li><a use:link href="/endeCount">암복호화 수 호출</a></li>
                <li><a use:link href="/privacyCount">개인정보 항목 수 호출</a></li>
                <li><a use:link href="/provisionCount">내부&외부 제공건 수 호출</a></li>
                <li><a use:link href="/emailSendInfo">이메일 발송 현황정보 호출</a></li>
<!--                <li><a use:link href="/">&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</a></li>-->
                <li><a use:link href="/develop">신규 가입 수 호출(작업중)</a></li>
            </ul>
        </div>
        <div class="subNav">
            <ul>
                <li class="onedepth">개인정보 API</li>
                <li><a use:link href="/develop">개인정보 수 호출(활성, 신규, 탈퇴, 금일접속자수)(작업중)</a></li>
                <li><a use:link href="/develop">개인정보 검색(작업중)</a></li>
                <li><a use:link href="/develop">개인정보 삭제(작업중)</a></li>
            </ul>
        </div>
        <div class="subNav">
            <ul>
                <li class="onedepth">관리자현황 API</li>
                <li><a use:link href="/develop">관리자 목록(작업중)</a></li>
                <li><a use:link href="/develop">금일 관리자 접속 수 호출(작업중)</a></li>
            </ul>
        </div>
        <div class="subNav">
            <ul>
                <li class="onedepth">이메일 발송(작업중)</li>
                <li><a use:link href="/develop">이메일 발송(작업중)</a></li>
            </ul>
        </div>
        <div class="subNav">
            <ul>
                <li class="onedepth">서트파티 API</li>
                <li><a use:link href="/bizmAlimTalkSend">비즈엠 알림톡 전송</a></li>
            </ul>
        </div>
    </div>
</nav>


<!-- [D] 문서 검색 팝업 -->
<!--<div class="docu_popup document_search_pop" data-popup="document_search_pop" >-->
<!--    <div class="docu_popup_inner">-->
<!--        <div class="docu_popup_container">-->
<!--            <div class="docu_popup_title">-->
<!--                <h3 class="">문서 검색</h3>-->
<!--            </div>-->
<!--            <div class="docupopinput">-->
<!--                <input type="text" name="docuse" id="docuse" class="excelfile" placeholder="검색어를 입력해 주세요" />-->
<!--                <button type="button" class="nemaclear" onclick="nameReset()"></button>-->
<!--                <dl>문서내에서 검색할 단어를 입력해주세요.</dl>-->
<!--            </div>-->
<!--            <div class="dcResultBox">-->
<!--                <div class="dcR_num">총<span>12</span>건</div>-->
<!--                <div class="dcResultList">-->
<!--                    <ul>-->
<!--                        <li><a href="">v1 &#8594; v2 마이그레이션 > 바뀐점</a></li>-->
<!--                        <li><a href="">v1 &#8594; v2 마이그레이션 > 바뀐점</a></li>-->
<!--                        <li><a href="">v1 &#8594; v2 마이그레이션 > 바뀐점</a></li>-->
<!--                        <li><a href="">v1 &#8594; v2 마이그레이션 > 바뀐점</a></li>-->
<!--                        <li><a href="">v1 &#8594; v2 마이그레이션 > 바뀐점</a></li>-->
<!--                        <li><a href="">v1 &#8594; v2 마이그레이션 > 바뀐점</a></li>-->
<!--                        <li><a href="">v1 &#8594; v2 마이그레이션 > 바뀐점</a></li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="docu-popup-close document_search_pop_close" data-popup-close="document_search_pop_close"></div>-->
<!--    </div>-->
<!--</div>-->
<!-- // [D] 문서 검색 팝업 -->