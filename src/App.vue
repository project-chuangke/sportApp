<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #id {
    height: 100%;
    position: absolute;
    width: 100%;
  }

  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
</style>