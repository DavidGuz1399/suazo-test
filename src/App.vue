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
.container-character {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.card-character {
  display: flex;
  border: 1px solid lightgrey;
  border-radius: 10px;
  position: relative;
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
.search::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
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
.add-favorite {
  position: absolute;
  left: 30%;
  top: 70%;
  background-color: lightgray;
  border: unset;
  border-radius: 50%;
}
.info-text {
  font-size: 12px;
}
.info-character {
  padding-left: 10px;
}
.close-character {
  position: absolute;
  top: 20px;
  background-color: white;
  right: 20px;
}
.image-modal{
  width: 100%;
  height: 300px;
}
.modal-header{
  padding: unset;
}
.personal-data{
  text-align: center;
}
.name-character{
  font-weight: bold;
  font-size: 20px;
}
.image-character-modal{
  width: 150px;
  border-radius: 50%;
}
</style>
