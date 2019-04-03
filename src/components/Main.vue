<template>
    <div>
        <slide-banner
            :banners="banners"
        />
        <stay
            :cities="stayCities"
        />
        <trip/>
        <additional-services/>
        <tip/>
        <info/>

    </div>
</template>

<script>
    import AdditionalServices from "./main/AdditionalServices";
    import Info from "./main/Info";
    import SlideBanner from "./main/SlideBanner";
    import Stay from "./main/Stay";
    import Tip from "./main/Tip";
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
                          this.$router.push({name:'stay', params: {goodsno: 1}});
                      }
                  },
                  {
                      title: '다 다 다 - 다 드림 이벤트',
                      description: '민다 호텔 예약<br>트립쿠폰 100% 증정',
                      image: '../../assets/image/pc_main_banner(1).png',
                      click() {
                          this.$router.push('stay');
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

              ],
              stayCities: [
                  {
                      name: '오세아니아',
                      click() {
                          location.href="www.theminda.com/md/stays?cityname=시드니";
                      },
                      stays: [
                          {
                              name: '괌 자생 게스트하우스',
                              description: '아름답고 쾌적한 괌 자생 게스트하우스로 놀러오세요.',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 1}});
                              }
                          },
                          {
                              name: '사이판 카리스 풀빌라',
                              description: '테마별 깨끗하고 세련된 인테리어, 이국적인 느낌의 수영장!',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 2}});
                              }
                          },
                          {
                              name: '사이판 TOP PALACE',
                              description: '안녕하세요? 사이판 TOP PALACE 입니다.',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 3}});
                              }
                          },
                          {
                              name: '괌 이모네 게스트하우스',
                              description: '안녕하세요? 괌 이모네 게스트하우스 입니다.',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 4}});
                              }
                          },

                      ]

                  },
                  {
                      name: '마드리드',
                      click() {
                          location.href="www.theminda.com/md/stays?cityname=마드리드";
                      },
                      stays: [
                          {
                              name: '괌 자생 게스트하우스',
                              description: '아름답고 쾌적한 괌 자생 게스트하우스로 놀러오세요.',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 1}});
                              }
                          },
                          {
                              name: '사이판 카리스 풀빌라',
                              description: '테마별 깨끗하고 세련된 인테리어, 이국적인 느낌의 수영장!',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 2}});
                              }
                          },
                          {
                              name: '사이판 TOP PALACE',
                              description: '안녕하세요? 사이판 TOP PALACE 입니다.',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 3}});
                              }
                          },
                          {
                              name: '괌 이모네 게스트하우스',
                              description: '안녕하세요? 괌 이모네 게스트하우스 입니다.',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 4}});
                              }
                          },

                      ]
                  },
                  {
                      name: '암스테르담',
                      click() {
                          location.href="www.theminda.com/md/stays?cityname=암스테르담";
                      },
                      stays: [
                          {
                              name: '괌 자생 게스트하우스',
                              description: '아름답고 쾌적한 괌 자생 게스트하우스로 놀러오세요.',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 1}});
                              }
                          },
                          {
                              name: '사이판 카리스 풀빌라',
                              description: '테마별 깨끗하고 세련된 인테리어, 이국적인 느낌의 수영장!',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 2}});
                              }
                          },
                          {
                              name: '사이판 TOP PALACE',
                              description: '안녕하세요? 사이판 TOP PALACE 입니다.',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 3}});
                              }
                          },
                          {
                              name: '괌 이모네 게스트하우스',
                              description: '안녕하세요? 괌 이모네 게스트하우스 입니다.',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 4}});
                              }
                          },

                      ]
                  },
                  {
                      name: '크로아티아',
                      click() {
                          location.href="www.theminda.com/md/stays?cityname=자그레브";
                      },
                      stays: [
                          {
                              name: '괌 자생 게스트하우스',
                              description: '아름답고 쾌적한 괌 자생 게스트하우스로 놀러오세요.',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 1}});
                              }
                          },
                          {
                              name: '사이판 카리스 풀빌라',
                              description: '테마별 깨끗하고 세련된 인테리어, 이국적인 느낌의 수영장!',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 2}});
                              }
                          },
                          {
                              name: '사이판 TOP PALACE',
                              description: '안녕하세요? 사이판 TOP PALACE 입니다.',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 3}});
                              }
                          },
                          {
                              name: '괌 이모네 게스트하우스',
                              description: '안녕하세요? 괌 이모네 게스트하우스 입니다.',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 4}});
                              }
                          },

                      ]
                  },
                  {
                      name: '피렌체',
                      click() {
                          location.href="www.theminda.com/md/stays?cityname=피렌체";
                      },
                      stays: [
                          {
                              name: '괌 자생 게스트하우스',
                              description: '아름답고 쾌적한 괌 자생 게스트하우스로 놀러오세요.',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 1}});
                              }
                          },
                          {
                              name: '사이판 카리스 풀빌라',
                              description: '테마별 깨끗하고 세련된 인테리어, 이국적인 느낌의 수영장!',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 2}});
                              }
                          },
                          {
                              name: '사이판 TOP PALACE',
                              description: '안녕하세요? 사이판 TOP PALACE 입니다.',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 3}});
                              }
                          },
                          {
                              name: '괌 이모네 게스트하우스',
                              description: '안녕하세요? 괌 이모네 게스트하우스 입니다.',
                              click() {
                                  this.$router.push({name: 'stay', params: { goodsno: 4}});
                              }
                          },

                      ]
                  },

              ]
          }
        },
        components: {
            AdditionalServices,
            Info,
            SlideBanner,
            Stay,
            Tip,
            Trip,
        }
    }
</script>

<style scoped>

</style>