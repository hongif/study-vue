<template>
    <div class="header">
        <h1 class="logo"><router-link to="/"><img src="../../assets/image/logo_org128x28.png" alt=""><span class="sr-only">MINDA</span></router-link></h1>
        <nav class="hd-nav">
            <ul class="gnb">
                <li class="i1">
                    <a href="javascript:showNationList(&#39;&#39;);">
                        숙소
                    </a>
                </li>
                <li class="i4"><a href="https://www.theminda.com/tg/index.php">트립</a></li>
                <li class="i2"><a href="https://www.theminda.com/main/info.php">정보 </a></li>
                <li class="i5"><!-- 티켓패스 개편완료 후 링크 변경/ticketpass/ticketpass_list.php -->
                    <a href="https://www.theminda.com/ticketpass/index.php">티켓/상품<!--2016-12-14수정 --></a>
                    <div class="dep2">
                        <ul class="clearfix" style="">
                            <!-- <li><a href="/ticketpass/ticketpass_list.php" >티켓/패스</a></li> -->
                            <li><a href="https://www.theminda.com/tg/list.php?category=&amp;mid=&amp;themeno=211">와이파이&amp;유심</a></li>
                            <li><a href="https://www.theminda.com/tg/list.php?category=&amp;mid=&amp;themeno=245">일본 티켓/패스</a></li>
                            <li><a href="https://www.theminda.com/ticketpass/eurail_event.php">유레일패스</a></li>
                            <li>
                                <a href="javascript:popup(&#39;http://minbakdanawa.rts.co.kr/aspx/eurailproducts/PTPSearchResult.aspx?sid=mizzk-01&#39;, 950, 1000);">
                                    유럽기차
                                    <img class="is_usual" src="../../assets/image/new_window_gray_15_15.svg" alt="">
                                    <img class="is_active" src="../../assets/image/new_window_orange_15_15.svg" alt="">
                                </a>
                            </li>
                            <li><a href="https://www.theminda.com/ticketpass/jungfrau.php">융프라우 할인권</a></li>
                            <li><a href="https://www.theminda.com/ticketpass/insurance_calc.php" class="active">여행자 보험</a></li>
                            <li><a href="https://www.theminda.com/ticketpass/rentcar.php">렌터카</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div class="tool_tip__type_animation_01">
                <a href="https://www.theminda.com/main/agoda.php">
                    한인민박에서 호텔까지
                </a>
            </div>
        </nav>
        <div class="hd-r">
            <div>
                <div id="div_login_btn" class="util">
                    <div class="header_user_menu">
                        <a href="https://www.theminda.com/member/login.php?login_return_page=/main/index.php"> 로그인</a>
                    </div>
                    <div class="header_user_menu has_tool_tip">
                        <a href="https://www.theminda.com/member/register.php">회원가입</a>
                    </div>
                    <!--<div class="header_user_menu">
                            <a href="https://play.google.com/store/apps/details?id=com.anymobi.samak.minbakdanawa" class="fw700">민다 앱 다운로드</a>
                         </div>-->
                    <div class="header_user_menu">
                        <a href="https://www.theminda.com/community/list.php?id=notice">고객센터</a>
                    </div>
                </div>
                <div id="div_top_user_menu" class="util " style="display:none">
                    <div class="userbx">
                        <div class="mk__outer_user_menu">
                            <div class="user"><img id="top_user_profile_img" src="../../assets/image/admin_profile_none.png" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;"><span class="top_user_info_txt"><span class="color_org" id="top_user_name"></span>님 반갑습니다. </span></div>
                            <ul class="dropdown-menu">
                                <li class="section"><a href="https://www.theminda.com/mypage/mypage_home.php">마이민다</a></li>
                                <li class="section"><a href="https://www.theminda.com/mypage/invite.php">친구 초대하기</a></li>
                                <li><a href="https://www.theminda.com/mypage/my_reservation.php">숙소 예약 내역</a></li>
                                <li class="section"><a href="https://www.theminda.com/mypage/my_tg_reserve.php">트립 예약 내역</a></li>
                                <li class="section"><a href="https://www.theminda.com/mypage/guidebook.php">저장 목록</a></li>
                                <li><a href="https://www.theminda.com/mypage/my_modify.php">정보 수정</a></li>
                                <li><a href="https://www.theminda.com/member/logout.php">로그아웃</a></li>
                            </ul>
                        </div>
                        <!--                            <a href="https://play.google.com/store/apps/details?id=com.anymobi.samak.minbakdanawa" class="mk__user_menu fw700">민다 앱 다운로드</a>-->
                        <div class="header_user_menu has_tool_tip">
                            <a href="https://www.theminda.com/mypage/invite.php" class="mk__user_menu">친구 초대하고! 할인쿠폰 받고!</a>
                        </div>
                        <div class="header_user_menu">
                            <a href="https://www.theminda.com/community/list.php?id=notice" class="mk__user_menu">고객센터</a>
                        </div>
                    </div>
                    <div class="dep2">
                        <strong class="sr-only">마이민다</strong>
                        <ul class="clearfix">
                            <li><a href="https://www.theminda.com/mypage/mypage_home.php">마이민다</a></li>
                            <li><a href="https://www.theminda.com/mypage/my_reservation.php">숙소 예약 내역</a></li>
                            <li><a href="https://www.theminda.com/mypage/my_tg_reserve.php">트립 예약 내역</a></li>
                            <li><a href="https://www.theminda.com/mypage/guidebook.php">저장 목록</a></li>
                            <li><a href="https://www.theminda.com/mypage/my_modify.php">정보 수정</a></li>
                            <li><a href="https://www.theminda.com/mypage/invite.php">친구 초대하기</a></li>
                            <li><a href="https://www.theminda.com/mypage/my_rate.php">나의 활동</a></li>
                            <li><a href="https://www.theminda.com/mypage/my_save.php">포인트/캐쉬/쿠폰</a></li>
                            <li><a href="https://www.theminda.com/mypage/my_eurail_list.php">유레일패스 예약</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="gnb right-gnb clear">
                <li class="i6">
                    <a href="https://www.theminda.com/community/list.php?id=jobs">커뮤니티</a><!-- [D] class="active" 추가시 dep2 보여짐 -->
                    <div class="dep2">
                        <ul class="clearfix">
                            <!--li><a href="/community/index.php" >커뮤니티</a></li-->
                            <li><a href="https://www.theminda.com/community/list.php?id=jobs">구인·구직</a></li>
                            <li><a href="https://www.theminda.com/community/list.php?id=sale">사고·팔고</a></li>
                            <li><a href="https://www.theminda.com/community/list.php?id=comment">톡톡 릴레이</a></li>
                        </ul>
                    </div>
                </li>
                <li class="i7">
                    <a href="https://www.theminda.com/main/sale_tab1.php">할인&amp;이벤트</a>
                    <div class="dep2">
                        <ul class="clearfix">
                            <li><a href="https://www.theminda.com/main/sale_tab1.php">땡처리 할인</a></li>
                            <li><a href="https://www.theminda.com/main/sale_tab3.php">비수기 할인</a></li>
                            <li><a href="https://www.theminda.com/main/coupon_tab2.php">숙소 쿠폰</a></li>
                            <li><a href="https://www.theminda.com/event/minda_event_list.php">민다 이벤트</a></li>
                            <li><a href="https://www.theminda.com/event/minbak_event_list.php">숙소 이벤트</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <!-- 상단 검색창은 아이콘 클릭으로만 검색이 작동해야 합니다.페이지 하단에 생길수 있는 다른 페이지의 폼입력과 구분이 되지 않을수 있기 때문에 -->
            <form method="get" name="fmSearchKeyMinbak" id="fmSearchKeyMinbak" action="https://www.theminda.com/main/total_search.php" onsubmit="return false;" class="srch_wrp">
                <input type="hidden" name="part" value="keyword_search">
                <!-- 전달되는 키워드는 구분자('__SP__')로 구분 하여 전달 -->
                <input type="hidden" name="keywords" id="keywords" value="">
                <input type="hidden" name="country">
                <input type="hidden" name="city">
                <input type="hidden" name="unit">
                <!-- <button type="button" class="icon_srch_gnb">검색</button> -->
                <!-- <div class="silde-wrap"> -->
                <div class="input-group">
						<span class="btn-wrap">
							<button type="button" id="city_search_btn" class="icon_srch_grey">검색</button>
						</span>
                    <span class="input-wrap">
							<input type="text" name="keyword" id="keyword" class="form-control" value="" data-part="main_keyword" data-autosubmitid="fmSearchKeyMinbak" placeholder="검색어를 입력하세요." title="검색어 입력" autocomplete="off" style="ime-mode:active;">
						</span>
                    <span class="close-btn-wrap">
							<button type="button" class="icon_date_close" style="display: none;">검색 취소</button>
						</span>
                    <!-- <div id="webProxy" class="web_automatic top_automatic" style="top:46px;width:840px;border:0px;"></div> -->
                </div>
                <!-- </div> -->
            </form>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>