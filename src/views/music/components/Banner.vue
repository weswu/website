<template>
  <section id="music-banner">
    <v-container>
      <v-carousel hide-delimiters height="200" style="width:900px;margin: 0 auto">
        <v-carousel-item
          v-for="(item, i) in swipers"
          :key="i"
          :src="item.imageUrl"
        >
        <v-sheet
          :color="item.titleColor"
          width="100"
          height="30"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-6">
              {{ item.typeTitle }}
            </div>
          </v-row>
        </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </section>


</template>

<script>
import { getSwiper } from '@/api/music/home'

export default {
  name: 'SectionBanner',
  data:() => ({
    swipers: []
  }),
  created() {
    this.get()
  },
  methods: {
    //获取轮播图数据
    get() {
      getSwiper().then(res => {
        this.swipers = res.banners;
      });
    },
  }

}
</script>

<style lang="scss">
</style>
