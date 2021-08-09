<template>
  <Characters />
</template>

<script>
import Characters from "./components/Characters.vue";

export default {
  name: "App",
  components: {
    Characters,
  },
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
.image-banner {
  width: 100%;
  max-height: 500px;
}
.search {
  width: 200px;
  height: 30px;
  position: absolute;
  right: 40%;
  top: 40%;
  background-color: black;
}
.search::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* background-color: #333;÷\ */
  position: relative;
  left: 35%;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
.categories {
  background: gray;
}
</style>
