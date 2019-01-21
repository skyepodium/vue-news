<template>
  <div id="app">
    <tool-bar />
    <router-view />
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  name: 'App',
  components: {
    ToolBar,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
