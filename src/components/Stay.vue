<template>
    <div>
        <div class="content">
            <!-- 방 상단정보 -->
            <div class="room_detail_hd room-detail__hd--v2 w1100">
                <div class="room_detail_top clearfix">
                    <div class="tmbwrp">

                        <span class="badge badge_none">아직 뱃지가 없습니다. 조금만 노력해보세요!</span>
                    </div>
                    <div class="room_txt">
                        <h2>
                            <div class="stay_view_tit__type_mk01">{{ $route.params.goodsno }}</div>
                        </h2>
                        <div class="roominfo row pr">
                            <p class="col-xs-6 pr15">
                                <span class="roominfo_text">뉴욕 디자이너가 만든 프리미엄 한인 숙소! 쉐어룸부터 커플룸, 프라이빗 독채까지 앳홈뉴욕에서 즐거운 뉴욕여행을 시작하세요.</span>
                            </p>
                            <!-- 베스트 스테이 리뉴얼 180712 -->
                            <!-- 베스트 스테이 리뉴얼 180712 end -->
                        </div>
                    </div>
                    <!-- 탭 -->

                    <ul class="basic_step2 tb_fixed">
                        <li class="col-sx-3 active"><a href="https://www.theminda.com/main/view.php?goodsno=6621">숙소</a>
                        </li>
                        <li class="col-sx-3"><a href="javascript:;" class="tip" data-toggle="tooltip" title=""
                                                data-original-title="아직 트립정보를 제공하지 않습니다." style="cursor: default;"
                                                aria-describedby="tooltip609240">트립</a>
                            <div class="tooltip fade top" role="tooltip" id="tooltip609240"
                                 style="top: 96px; left: 319.5px; display: block;">
                                <div class="tooltip-arrow" style="left: 50%;"></div>
                                <div class="tooltip-inner">아직 트립정보를 제공하지 않습니다.</div>
                            </div>
                        </li>
                        <li class="col-sx-3"><a href="javascript:;" class="tip" data-toggle="tooltip" title=""
                                                data-original-title="아직 장소정보를 제공하지 않습니다."
                                                style="cursor: default;">장소</a></li>
                        <li class="col-sx-3"><a href="javascript:;" class="tip" data-toggle="tooltip" title=""
                                                data-original-title="아직 일정정보를 제공하지 않습니다."
                                                style="cursor: default;">일정</a></li>
                    </ul>
                </div>

                <!-- 상세내용 -->
                <div id="detailContent" class="view_body clearfix pr">
                    <!-- 사이드고정퀵  -->
                    <nav id="tabNav" class="scroll_nav">
                        <ul class="nav nav-justified">
                            <li class="active"><a
                                    href="https://www.theminda.com/main/view.php?goodsno=6621&amp;v_type=thismon#view1">숙소
                                소개</a></li>
                            <li class=""><a
                                    href="https://www.theminda.com/main/view.php?goodsno=6621&amp;v_type=thismon#roomChk">객실
                                예약</a></li>
                            <li class=""><a
                                    href="https://www.theminda.com/main/view.php?goodsno=6621&amp;v_type=thismon#view6">추가정보 </a>
                            </li>
                            <li><a href="https://www.theminda.com/main/view.php?goodsno=6621&amp;v_type=thismon#view3">위치/오시는
                                방법</a></li>
                            <li><a href="https://www.theminda.com/main/view.php?goodsno=6621&amp;v_type=thismon#view4">취소환불규정</a>
                            </li>
                            <li><a href="https://www.theminda.com/main/view.php?goodsno=6621&amp;v_type=thismon#view7">QnA/리뷰</a>
                            </li>
                        </ul>
                    </nav>
                    <!-- 컨텝츠탭 -->
                </div>
            </div>
            <!-- //페이지시작 -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Stay',
    };
</script>

<style scoped>

</style>