<template>
  <div id="app">
    <Navbar />
    <b-jumbotron header="York Harbor Menu Store" lead="York Harbor Inn" >
      <p>For more information visit website</p>
      <b-btn variant="primary" href="#">More Info</b-btn>
    </b-jumbotron>
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
