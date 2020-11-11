<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      color="white"
      elevation="1"
      height="60"
    >

      <base-img
        :src="require('@/assets/svg/wes-logo-light.svg')"
        contain
        max-width="90"
        width="100%"
      />

      <v-spacer />

      <div>
        <v-tabs class="hidden-sm-and-down" optional>
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === '主页'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"/>
    </v-app-bar>

    <Drawer v-model="drawer" :items="items"/>
  </div>
</template>

<script>
  export default {
    name: 'HomeAppBar',
    components: {
      Drawer: () => import('./Drawer'),
    },
    data: () => ({
      drawer: null,
      items: [
        '主页',
        '文章',
        '音乐',
        '联系我们',
        '个人中心',
      ],
    }),
  }
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
