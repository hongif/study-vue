<template>
    <div class="main-mid-area bg_light_grey ">
        <div class="inner w1100">
            <div class="main-tit-wrap text-center">
                <h3 class="sub-tit color_blk">숙소</h3>
            </div>
            <div class="room-area">
                <div class="main-room-top">
                    <ul class="tab nav-tab clearfix" data-toggle="tab-hover">
                        <li class="">
                            <a href="https://www.theminda.com/main/index.php#room_link_1" onclick="showNationList(&#39;007&#39;);" data-toggle="tab">오세아니아</a>
                        </li>
                        <li class="">
                            <a href="https://www.theminda.com/main/index.php#room_link_2" onclick="location.href=&#39;/md/stays?cityCode=001004002&#39;;" data-toggle="tab">마드리드</a>
                        </li>
                        <li class="">
                            <a href="https://www.theminda.com/main/index.php#room_link_3" onclick="location.href=&#39;/md/stays?cityCode=001008001&#39;;" data-toggle="tab">암스테르담</a>
                        </li>
                        <li class="active">
                            <a href="https://www.theminda.com/main/index.php#room_link_4" onclick="showNationList(&#39;001018&#39;);" data-toggle="tab">크로아티아</a>
                        </li>
                        <li class="">
                            <a href="https://www.theminda.com/main/index.php#room_link_5" onclick="location.href=&#39;/md/stays?cityCode=001003003&#39;;" data-toggle="tab">피렌체</a>
                        </li>
                    </ul>
                    <button type="button" class="no_style btn_main_total" onclick="javascript:showNationList(&#39;001&#39;);">전체도시보기<span class="icon_plus_blk"></span></button>
                </div>
                <div id="room_link_1" class="tab-pane">
                    <ul class="row list-pd10" id="getlist_1">
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=7377&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/0_59c1bfce7c65b.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/1500191767_guamjsh.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">괌 자생 게스트하우스</strong>
                                    <p class="txt">아름답고 쾌적한 괌 자생 게스트하우스로 놀러오세요. ^^*</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=2286&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/0_5a3b63f826d3a.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/1493191754_guamemone.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">괌 이모네 게스트하우스</strong>
                                    <p class="txt">안녕하세요? 괌 이모네 게스트하우스 입니다.</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=3661&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/0_59acaf441737e.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/1504660737_karisvilla.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">사이판 카리스 풀빌라</strong>
                                    <p class="txt">테마별 깨끗하고 세련된 인테리어, 이국적인 느낌의 수영장!</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=8653&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/0_5a9ce52461547.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/10ba9f0cadfee3edb8a6d3a5a89f1688.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">사이판 TOP PALACE</strong>
                                    <p class="txt">안녕하세요? 사이판 TOP PALACE 입니다.</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="room_link_2" class="tab-pane">
                    <ul class="row list-pd10" id="getlist_2">
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=14804&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/3084527a1db229008177d52389dd3e3c.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/4cf7d16188612a409235349ad3c5dd4a.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">마드리드 라꼬마 유스</strong>
                                    <p class="txt">위치 갑! 가성비 갑! 더더더 머무르고 싶은 라꼬마 유스! 알차고 의미있는 마드리드 여정을 만들어 보세요:)</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=4547&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/ac9e0f1c7f868dfb098d27f8a0804ad9.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/7a133ef18f7a8eee1a45685e6a5b13c7.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">마드리드 까사사랑</strong>
                                    <p class="txt">^^까사사랑은 왕궁앞 강변에 위치하고 있어 조용하고 편안한 여행을 원하시는 분들을 가족을 맞이하는 마음으로 정성껏 모시는 사랑의 집(casa)입니다~!!!</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=6469&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/0_57eb9b3f622f9.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/1475204054_lkangsan12.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">마드리드 펠릭스 게스트하우스</strong>
                                    <p class="txt">오늘이 내 인생의 봄이라는 마음으로 살고 있습니다.</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=5401&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/a908544dc04571d10ccf561c75662680.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/6986980b6af57aefc80f4cd21f0b0e5e.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">마드리드 레알민박</strong>
                                    <p class="txt">스페인 현지인의 집을 방문한 듯 편안하고 쾌적한, 부띠끄 게스트하우스 레알 민박입니다.</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="room_link_3" class="tab-pane">
                    <ul class="row list-pd10" id="getlist_3">
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=7037&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/5c435f4b8a73c51673c3939e978ef2ee.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/1487767361_FirstHolland.jpeg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">암스테르담 퍼스트 홀란드 스테이</strong>
                                    <p class="txt">아름다운 꽃과 어딜가나 활기와 친절함이 가득한 네덜란드에 오신것을 환영합니다.  FHS는 안전하고 조용한 전원주택가의 3층 주택입니다. 편리한 교통, 편안한 잠자리와 맛있는 아침 식사로 여러분을  맞겠습니다.</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=1017&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/0_54eeb595caafa.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/1487569353_diemensong.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">암스테르담 해피 민박</strong>
                                    <p class="txt">안녕하세요? 암스테르담 해피 민박 입니다.</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=4319&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/3599ecd941f531971768c07a7bde7e1c.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/1495191349_suhouse.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">암스테르담 수 호스텔</strong>
                                    <p class="txt">안녕하세요? 암스테르담 수 호스텔 입니다.</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=4183&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/1_5574a31675ba2.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/6bad109faeb1db9afa522684f54a86cc.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">암스테르담 원룸 민박</strong>
                                    <p class="txt">안녕하세요? 암스테르담 원룸 민박 입니다.</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="room_link_4" class="tab-pane active">
                    <ul class="row list-pd10" id="getlist_4">
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=3671&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/0_596b97e0b808b.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/1487954088_heartofcity90.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">자그레브 호스텔 하트 오브 더 시티</strong>
                                    <p class="txt">안녕하세요? 자그레브 호스텔 하트 오브 더 시티 입니다.</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=2484&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/0_57280aa31595d.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/be8d7ed2652136e0be6acf29f8a89e49.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">자그레브 코코하우스</strong>
                                    <p class="txt">안녕하세요? 자그레브 코코하우스 입니다.</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=3673&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/0_5a1829a408d54.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/512852df7be3d3b2d413d8ceec9f1fc2.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">러브 게스트하우스 2호점_스플리트</strong>
                                    <p class="txt">안녕하세요? 러브 게스트하우스 2호점_스플리트 입니다.</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=7565&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/0_5ac60d9548964jpeg.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/1521772164_Buzahouse.png" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">두브로브니크 부자하우스</strong>
                                    <p class="txt">안녕하세요? 두브로브니크 부자하우스 입니다.</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="room_link_5" class="tab-pane">
                    <ul class="row list-pd10" id="getlist_5">
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=7631&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/57bc630c492694be3036421b2e2dda7f.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/732559c4086837dc687d026e1a9e977f.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">러브 게스트하우스 13호점_피렌체</strong>
                                    <p class="txt">러브게스트하우스의 13번째 숙소인 러브피렌체 입니다.</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=4853&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/b48d4b8886a706be10f3ef20df10d8c2.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/ad1def62a6e797699c7be717848e4a50.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">안녕 피렌체</strong>
                                    <p class="txt">안녕하세요? 안녕 피렌체 입니다.</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=6207&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="../../assets/image/0_59144d94730c2jpeg.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/1488346217_firenzesister.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">피렌체 꽃보다 언니네</strong>
                                    <p class="txt">안녕하세요? 피렌체 꽃보다 언니네 입니다.</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-xs-3">
                            <a href="https://www.theminda.com/main/view.php?goodsno=7725&amp;v_type=thismon">
                                <div class="img-wrap">
                                    <img src="" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/1503059545_firenzeholic.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">피렌체 홀릭</strong>
                                    <p class="txt">이탈리아에서 제일 깨끗한 집입니다^^</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="main-event-area">
                <ul class="row list-pd10">
                    <li class="col-xs-4 li1">
                        <a href="https://www.theminda.com/main/sale_tab1.php">
                            <span class="tit">땡처리숙소</span>
                            <span class="color_red">최대 <strong>60.0</strong>% 할인</span>
                            <p class="txt">급하게 남은 숙소를 땡처리 가격으로 예약하세요.</p>
                        </a>
                    </li>
                    <!-- [D] 2017-01-19 수정 -->
                    <!-- <li class="col-xs-8">
                        <a href="/event/view.php?id=gevent&no=147" target="_blank" class="pa0">
                            <img src ="/cust/img/main/banner_pickup.jpg" alt="한인민박 예약하면 공항픽업이 무료!(공항부터 숙소까지 안전하게)" />
                        </a>
                    </li> -->

                    <li class="col-xs-4 li2">
                        <a href="https://www.theminda.com/event/minbak_event_list.php">
                            <span class="tit">숙소이벤트</span>
                            <span class="color_red">총 <strong>15</strong>개의 이벤트</span>
                            <p class="txt">숙소에서 진행하는 핫한 이벤트를 확인하세요.</p>
                        </a>
                    </li>
                    <li class="col-xs-4 li3">
                        <a href="https://www.theminda.com/main/coupon_tab2.php">
                            <span class="tit">숙소쿠폰</span>
                            <span class="color_red">총 <strong>72</strong>개의 쿠폰</span>
                            <p class="txt">숙소가 직접 쏘는 숙소만의 혜택을 확인하세요.</p>
                        </a>
                    </li>
                </ul>
            </div>
            <!--// 2016-12-23-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Stay"
    }
</script>

<style scoped>

</style>