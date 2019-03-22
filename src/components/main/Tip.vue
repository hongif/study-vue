<template>
    <div class="main-service-area">
        <div class="inner w1100">
            <h3 class="sr-only">부가서비스</h3>
            <ul class="list-mian-service row clearfix">
                <li class="col-xs-3 text-center">
                    <a href="https://www.theminda.com/ticketpass/eurail_event.php" onclick="ga(&#39;send&#39;,&#39;event&#39;,&#39;pc_main_goods&#39;,&#39;click&#39;,&#39;eurail&#39;)">
                        <span class="icon_eurail"></span>
                        <strong class="tit color_blk">유레일패스</strong>
                        <p class="txt">자유로운 유럽여행의 필수템</p>
                    </a>
                </li>
                <li class="col-xs-3 text-center">
                    <a href="https://www.theminda.com/ticketpass/rentcar.php" onclick="ga(&#39;send&#39;,&#39;event&#39;,&#39;pc_main_goods&#39;,&#39;click&#39;,&#39;rentalcar&#39;);">
                        <span class="icon_rent"></span>
                        <strong class="tit color_blk">렌터카</strong>
                        <p class="txt">전세계 지역에서 렌터카 대여</p>
                    </a>
                </li>
                <li class="col-xs-3 text-center">
                    <a href="https://www.theminda.com/tg/list.php?category=&amp;mid=&amp;themeno=211" onclick="ga(&#39;send&#39;,&#39;event&#39;,&#39;pc_main_goods&#39;,&#39;click&#39;,&#39;wifi&#39;);">
                        <span class="icon_pocket"></span>
                        <strong class="tit color_blk">와이파이&amp;유심</strong>
                        <p class="txt">언제 어디서나 막힘없이!</p>
                    </a>
                </li>
                <li class="col-xs-3 text-center">
                    <a href="https://www.theminda.com/ticketpass/insurance_calc.php" onclick="ga(&#39;send&#39;,&#39;event&#39;,&#39;pc_main_goods&#39;,&#39;click&#39;,&#39;insu&#39;);">
                        <span class="icon_insurr"></span>
                        <strong class="tit color_blk">여행자 보험</strong>
                        <p class="txt">안전한 자유여행을 위한 보험</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tip"
    }
</script>

<style scoped>

</style>