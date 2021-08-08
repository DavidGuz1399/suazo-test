<template>
  <div class="container">
    <div
      v-for="(character, index) in characters"
      v-bind:key="index"
    >
      <div>
        <img :src="character.image" alt="" />
      </div>
      <div>
        <span>{{ character.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      characters: [],
    };
  },
  mounted() {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        console.log(response);
        this.characters = response.data.results;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
