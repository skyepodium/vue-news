<template>
  <div>
    ask
    <div
      v-for="ask in asks"
      :key="ask.id"
    >
      {{ ask.title }}
    </div>
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
