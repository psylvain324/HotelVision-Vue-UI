<template>
<!-- <section> -->
  <google-map :center="{lat: 1.38, lng: 103.8}" :zoom="12" style="width: 100%; height: 500px">
    <ground-overlay source="./overlay.png" :bounds="{
          north: 1.502,
          south: 1.185,
          east: 104.0262,
          west: 103.5998,
      }" :opacity="0.5">
    </ground-overlay>
  </google-map>
<!-- </section> -->
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
