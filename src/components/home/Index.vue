<template>
  <v-app>
    <home-app-bar />
    <home-view />
    <home-footer />
    <home-settings />
  </v-app>
</template>

<script>
  export default {
    name: 'HomeLayout',
    components: {
      HomeAppBar: () => import('./AppBar'),
      HomeFooter: () => import('./Footer'),
      HomeSettings: () => import('./Settings'),
      HomeView: () => import('./View'),
    },
  }
</script>
