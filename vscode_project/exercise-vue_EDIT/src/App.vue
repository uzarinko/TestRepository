<template>
  <div id="app">
    <v-app>
      <HeaderItem/>
      <div class="mx-16 mt-16">
        <router-view/>
      </div>
    </v-app>
  </div>
</template>

<script>
import HeaderItem from './components/Header'

export default {
  name: 'App',
  components: {
    HeaderItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
