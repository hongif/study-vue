<template>
    <article class="renew__main_banner">
        <div class="bx-wrapper" style="max-width: 100%;">
            <div class="bx-viewport" style="width: 100%; overflow: hidden; position: relative; height: 380px;">
                <carousel class="renew__main_banner__slider">
                    <slide v-for="banner in banners" :key="banner.title" @click="banner.click">
                        <div class="width_inner">
                            <div class="renew__main_banner__pic_box">
                                <img class="main_img"
                                     src="../../assets/image/pc_main_banner.png" alt="이미지">
                            </div>
                            <div class="renew__main_banner__txt_box">
                                <p class="renew__main_banner__sub_tit">
                                    {{ banner.title }}
                                </p>
                                <p v-html="banner.description" class="renew__main_banner__tit"></p>
                                <div class="renew__main_banner__go_btn" alt="바로가기">
                                    자세히보기
                                    <img src="../../assets/image/go_icon_white_5@8.png"
                                         class="renew__icon">
                                </div>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>

        <div class="renew__main_banner__prev"><a class="bx-prev" href="https://www.theminda.com/main/index.php"><img
                src="../../assets/image/main_banner__prev.png" alt="이전"></a></div>
        <div class="renew__main_banner__next"><a class="bx-next" href="https://www.theminda.com/main/index.php"><img
                src="../../assets/image/main_banner__next.png" alt="다음"></a></div>
    </article>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: "SlideBanner",
        props: {
          banners: {
              type: Array,
              required: true
          }
        },
        components: {
            Carousel,
            Slide
        }
    }
</script>

<style scoped>

</style>