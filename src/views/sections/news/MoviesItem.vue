<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="item.poster || 'https://cdn.vuetifyjs.com/images/cards/cooking.png'"
    ></v-img>

    <v-card-title>{{item.title}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="item.imdb.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          {{item.imdb.rating}} ({{item.imdb.votes}})
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        {{item.year}}
      </div>

      <div>{{item.plot}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Type</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip v-for="row,index in item.genres">{{row}}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: ['item'],
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>

<style lang="css" scoped>
</style>
