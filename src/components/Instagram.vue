<template>
  <base-info-card title="Instagram">
    <v-row dense>
      <v-col
        v-for="n in 6"
        :key="n"
        cols="auto"
      >
        <base-img
<<<<<<< HEAD
          :src="require(`@/assets/insta/insta-${n}.jpg`)"
=======
          :src="require(`@/assets/insta-${n}.jpg`)"
>>>>>>> bc48a8a0d2bc57d214de841d83cd545e49305b5b
          color="grey lighten-1"
          width="96"
          tile
        />
      </v-col>
    </v-row>
  </base-info-card>
</template>

<script>
  export default {
    name: 'Instagram',
  }
</script>
