<template>
  <base-section id="news">
    <v-container>
      <v-row>
        <v-col
          v-for="item,index in list"
          :key="index"
          cols="3"
          md="4"
        >
          <MoviesItem :item="item"/>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  import {fetchList, addObj, delObj, putObj} from '@/api/movies'
  import MoviesItem from './MoviesItem'

  export default {
    components: {
      MoviesItem
    },
    data: () => ({
      searchData: {
        current: 1,
        size: 10,
      },
      list: [],
    }),
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        fetchList(Object.assign(this.searchData)).then(res => {
          this.list = res.data
        })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
    },
  }
</script>
