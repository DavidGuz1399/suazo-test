<template>
  <div class="container">
    <div
      v-for="(character, index) in characters"
      v-bind:key="index"
      class="card"
    >
      <div>
        <img :src="character.image" alt="" class="card-image" />
      </div>
      <div>
        <div>
          <span>{{ character.status }}-{{ character.species }}</span>
        </div>

        <span>{{ character.name }}</span>
        <div>
          <span>Last know location</span>
          <span>{{ character.location.name }}</span>
        </div>
        <div>
          <span>First see in</span>
          <span>{{ character.origin.name }}</span>
        </div>
        <button @click="favorito(character.id)">Favorito</button>
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
      favoritos: [],
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
  methods: {
    favorito: function(id) {
      if (!this.favoritos.includes(id)) {
        //checking weather array contain the id
        this.favoritos.push(id); //adding to array because value doesnt exists
      } else {
        this.favoritos.splice(this.favoritos.indexOf(id), 1); //deleting
      }
      console.log(this.favoritos)
    }
  },
};
</script>
