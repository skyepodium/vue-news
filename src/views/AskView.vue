<template>
  <div>
    <p
      v-for="item in this.$store.state.asks"
      :key="item.id"
    >
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            asks: 'asks'
        })

        // 2.
        // ...mapState({
        //     asks: state => state.asks
        // }),

        // 1. 
        // asks () {
        //     return this.$store.state.asks;
        // }
    },
    created () {
        this.$store.dispatch('FETCH_ASKS')
    }
}
</script>

<style>

</style>
