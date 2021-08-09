<template>
  <div class="banner">
    <img
      src="https://www.earlygame.com/uploads/images/_1200x630_crop_center-center_82_none/rick-morty-season-5.jpg?mtime=1624273864"
      alt=""
      class="image-banner"
    />
    <input type="text" v-model="search" class="search"/>
  </div>
  <p>Mostrar favoritos:<span @click="activeFavorite"><font-awesome-icon :icon="starIcon" :style="{color:this.color }"/></span></p>
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
    <div v-show="characters.length == 0">
      Uh-oH! ¡Pareces perdido en tu viaje!
      <button @click="cleanFilter">Eliminar Filtros</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  components:{
    FontAwesomeIcon
  },
  data() {
    return {
      characters: [],
      favoritos: [],
      search: null,
      isFavorite: false,
      starIcon:faStar,
      color:'gray'
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    favorito: function (id) {
      if (!this.favoritos.includes(id)) {
        this.favoritos.push(id);
      } else {
        this.favoritos.splice(this.favoritos.indexOf(id), 1);
      }
      console.log(this.favoritos);
    },
    getAll: function () {
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
    getBySearch: function (name) {
      axios
        .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then((response) => {
          this.characters = response.data.results;
        })
        .catch((error) => {
          console.log(error);
          this.characters = [];
        });
    },
    getByFavorite: function () {
      if (this.favoritos.length > 0) {
        axios
          .get(`https://rickandmortyapi.com/api/character/${this.favoritos}`)
          .then((response) => {
            if (Array.isArray(response.data)) {
              this.characters = response.data;
            } else {
              this.characters = [];
              this.characters.push(response.data);
              console.log(this.characters);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }else{
        this.characters = [];
      }
    },
    cleanFilter: function () {
      this.getAll();
      this.search = "";
    },
    activeFavorite: function () {
      if (!this.isFavorite) {
        this.isFavorite = true;
        this.color = 'yellow'
      } else {
        this.isFavorite = false;
        this.color = 'gray'
      }
    },
  },
  watch: {
    search: function (value) {
      this.getBySearch(value);
    },
    isFavorite: function (value) {
      if (value) {
        this.getByFavorite();
      } else {
        this.getAll();
      }
    },
  },
};
</script>
