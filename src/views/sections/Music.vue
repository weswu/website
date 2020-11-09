<template>
  <base-section
    id="music"
    space="56"
  >
    <v-container style="width: 1020px;">
      <TopBar></TopBar>
      <CenterAll></CenterAll>
      <BottomBar></BottomBar>
    </v-container>
  </base-section>
</template>

<script>
  import TopBar from '@/views/music/TopBar'
  import CenterAll from '@/views/music/CenterAll'
  import BottomBar from '@/views/music/BottomBar'

  export default {
    name: 'SectionMusic',
    components: {
      BottomBar,
      TopBar,
      CenterAll
    }
  }
</script>
