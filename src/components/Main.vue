<template>
    <div>
        <top-banner/>
        <main-header/>
        <slide-banner
            :banners="banners"
        />
        <stay/>
        <trip/>
        <additional-services/>
        <tip/>
        <info/>
        <main-footer/>
    </div>
</template>

<script>
    import AdditionalServices from "./main/AdditionalServices";
    import MainFooter from "./main/MainFooter";
    import MainHeader from "./main/MainHeader";
    import Info from "./main/Info";
    import SlideBanner from "./main/SlideBanner";
    import Stay from "./main/Stay";
    import Tip from "./main/Tip";
    import TopBanner from "./main/TopBanner";
    import Trip from "./main/Trip";

    export default {
        name: "Main",
        data() {
          return {
              banners: [
                  {
                      title: '여행자들이 선정한 최고의 숙소',
                      description: '2018 하반기<br>베스트 스테이 선정',
                      image: '../../assets/image/pc_main_banner.png',
                      click() {
                          location.href = 'www.theminda.com/main/beststay.php';
                      }
                  },
                  {
                      title: '다 다 다 - 다 드림 이벤트',
                      description: '민다 호텔 예약<br>트립쿠폰 100% 증정',
                      image: '../../assets/image/pc_main_banner(1).png',
                      click() {
                          location.href = 'www.theminda.com/event/view.php?id=gevent&amp;no=227';
                      }
                  },
                  {
                      title: '유럽 4대 인기 트립 할인쿠폰 100% 증정!',
                      description: '유럽 BEST 트립<br>할인전',
                      image: '../../assets/image/pc_main_banner(2).png',
                      click() {
                          location.href = 'www.theminda.com/event/view.php?id=gevent&amp;no=228';
                      }
                  },

              ]
          }
        },
        components: {
            AdditionalServices,
            MainFooter,
            MainHeader,
            Info,
            SlideBanner,
            Stay,
            Tip,
            TopBanner,
            Trip,
        }
    }
</script>

<style scoped>

</style>