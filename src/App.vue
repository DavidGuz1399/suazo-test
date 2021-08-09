<template>
  <Characters />
</template>

<script>
import Characters from "./components/Characters.vue";

export default {
  name: "App",
  components: {
    Characters,
  }
};
</script>
<style>
body {
  margin: unset;
}
.container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.card {
  display: flex;
  border: 1px solid lightgrey;
  border-radius: 10px;
}
.card-image {
  width: 150px;
}
.banner {
  position: relative;
  justify-content: center;
  text-align: center;
}
.image-banner{
  width: 100%;
  max-height: 500px;
}
.search{
  width: 200px;
  height: 30px;
}
</style>
