<template>
    <div class="main-mid-area bg_light_grey ">
        <div class="inner w1100">
            <div class="main-tit-wrap text-center">
                <h3 class="sub-tit color_blk">숙소</h3>
            </div>
            <div class="room-area">
                <div class="main-room-top">
                    <ul class="tab nav-tab clearfix" data-toggle="tab-hover">
                        <li class="{active: isActiveCity}" v-for="city in cities" :key="city.name">
                            <a @click="city.click" data-toggle="tab">{{ city.name }}</a>
                        </li>
                    </ul>
                    <button type="button" class="no_style btn_main_total">전체도시보기<span class="icon_plus_blk"></span></button>
                </div>
                <div v-for="city in cities" :key="city.name" class="tab-pane active">
                    <ul class="row list-pd10" id="getlist_1">
                        <li v-for="stay in city.stays" :key="stay.name" class="col-xs-3">
                            <router-link to="/stay/stay_1">
                                <div class="img-wrap">
                                    <img src="../../assets/image/0_59c1bfce7c65b.jpg" alt="" onerror="this.src=&#39;/cust/img/empty_photo.gif&#39;">
                                </div>
                                <div class="info-desc text-center">
                                    <div class="img-profile">
                                        <img src="../../assets/image/1500191767_guamjsh.jpg" alt="" onerror="this.src=&#39;/cust/img/admin_profile_none.png&#39;">
                                    </div>
                                    <strong class="tit ellipsis">{{ stay.name }}</strong>
                                    <p class="txt">{{ stay.description }}</p>
                                </div>
                            </router-link>
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
        name: "Stay",
        props: {
            cities: {
                type: Array,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>