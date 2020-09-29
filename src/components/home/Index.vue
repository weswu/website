<template>
  <v-app>
<<<<<<< HEAD
    <Header />
    <home-view />
    <Footer />
    <Settings />
=======
    <home-app-bar />
    <home-view />
    <home-footer />
    <home-settings />
>>>>>>> bc48a8a0d2bc57d214de841d83cd545e49305b5b
  </v-app>
</template>

<script>
  export default {
    name: 'HomeLayout',
    components: {
<<<<<<< HEAD
      Header: () => import('./Header'),
      Footer: () => import('./Footer'),
      Settings: () => import('./Settings'),
=======
      HomeAppBar: () => import('./AppBar'),
      HomeFooter: () => import('./Footer'),
      HomeSettings: () => import('./Settings'),
>>>>>>> bc48a8a0d2bc57d214de841d83cd545e49305b5b
      HomeView: () => import('./View'),
    },
  }
</script>
