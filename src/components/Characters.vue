<template>
  <div>
    <div class="banner">
      <img
        src="https://www.earlygame.com/uploads/images/_1200x630_crop_center-center_82_none/rick-morty-season-5.jpg?mtime=1624273864"
        alt=""
        class="image-banner"
      />
      <input
        type="text"
        v-model="search"
        class="search"
        placeholder="Buscar personaje"
      />
    </div>
    <div class="categories">
      <ul>
        <li><a href="#" @click="getAll()">All</a></li>
        <li><a href="#" @click="getByGender('unknow')">Unknow</a></li>
        <li><a href="#" @click="getByGender('female')">Female</a></li>
        <li><a href="#" @click="getByGender('male')">Male</a></li>
        <li><a href="#" @click="getByGender('genderless')">Genderless</a></li>
      </ul>
    </div>
    <div class="container-character">
      <p>
        Mostrar favoritos :<span @click="activeFavorite"
          ><font-awesome-icon :icon="starIcon" :style="{ color: this.color }"
        /></span>
      </p>
    </div>
    <div class="container-character">
      <div
        v-for="(character, index) in characters"
        v-bind:key="index"
        class="card-character"
      >
        <div
          data-bs-toggle="modal"
          data-bs-target="#character"
          @click="getCharacter(character.id)"
        >
          <img :src="character.image" alt="" class="card-image" />
        </div>
        <div class="info-character">
          <div>
            <span class="info-text"
              >{{ character.status }}-{{ character.species }}</span
            >
          </div>
          <span>{{ character.name }}</span>
          <div>
            <span class="info-text">Last know location</span>
          </div>
          <div>
            <span>{{ character.location.name }}</span>
          </div>
          <div>
            <span class="info-text">First see in</span>
          </div>
          <div>
            <span>{{ character.origin.name }}</span>
          </div>
          <button @click="favorito(character.id)" class="add-favorite">
            <font-awesome-icon
              :icon="starIcon"
              :style="[
                this.favorites.find(function (value) {
                  if (value == character.id) {
                    return true;
                  }
                })
                  ? { color: 'yellow' }
                  : { color: 'gray' },
              ]"
            />
          </button>
        </div>
      </div>
    </div>
    <div v-show="characters.length == 0" style="text-align: center">
      <h2>Uh-oH!</h2>
      <p>¡Pareces perdido en tu viaje!</p>
      <button @click="cleanFilter">Eliminar Filtros</button>
    </div>
    <div
      class="modal fade"
      id="character"
      tabindex="-1"
      aria-labelledby="characterLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <img
              src="https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2020/05/Rick-Morty-Sexta-Temporada.jpg?resize=1200%2C720&quality=80&ssl=1"
              alt=""
              class="image-modal"
            />
            <button
              type="button"
              class="btn-close close-character"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="personal-data">
              <div>
                <img
                  :src="character.image"
                  alt=""
                  class="image-character-modal"
                />
              </div>
              <div>
                <span>{{ this.character.status }}</span>
              </div>
              <div>
                <span class="name-character">{{ this.character.name }}</span>
              </div>
              <div>
                <span>{{ this.character.species }}</span>
              </div>
            </div>
            <div>
              <h4>Informacion</h4>
              <div class="row">
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body">{{ this.character.gender }}</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body">
                      {{ this.character.origin?.name }}
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body">{{ this.character.type }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4>Episodios</h4>
              <div class="row">
                <div
                  v-for="(item, index) in this.chapters"
                  :key="index"
                  class="col-md-3"
                >
                  <div v-if="index < 8" class="card">
                    <div class="card-body">
                      <div>
                        <span>{{ item.name }}</span>
                      </div>
                      <div>
                        <span>{{ item.episode }}</span>
                      </div>
                      <div>
                        <span>{{ item.air_date }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4>Personajes interesantes</h4>
              <div class="row">
                <div
                  v-for="(item, index) in this.aleatoryCharactersR"
                  :key="index"
                  class="col-md-6"
                >
                  <div class="card-character">
                    <div>
                      <img :src="item.image" alt="" class="card-image" />
                    </div>
                    <div class="info-character">
                      <div>
                        <span class="info-text"
                          >{{ item.status }}-{{ item.species }}</span
                        >
                      </div>
                      <span>{{ item.name }}</span>
                      <div>
                        <span class="info-text">Last know location</span>
                      </div>
                      <div>
                        <span>{{ item.location.name }}</span>
                      </div>
                      <div>
                        <span class="info-text">First see in</span>
                      </div>
                      <div>
                        <span>{{ item.origin.name }}</span>
                      </div>
                      <button
                        @click="favorito(item.id)"
                        class="add-favorite"
                      >
                        <font-awesome-icon
                          :icon="starIcon"
                          :style="[
                            this.favorites.find(function (value) {
                              if (value == item.id) {
                                return true;
                              }
                            })
                              ? { color: 'yellow' }
                              : { color: 'gray' },
                          ]"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">
              Compartir personaje
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      characters: [],
      favorites: [],
      search: null,
      isFavorite: false,
      starIcon: faStar,
      color: "gray",
      character: {},
      chapters: [],
      aleatoryCharactersR: [],
    };
  },
  mounted() {
    this.getAll();
    this.aleatoryCharacters();
    //  this.show()
  },
  methods: {
    favorito: function (id) {
      if (!this.favorites.includes(id)) {
        this.favorites.push(id);
      } else {
        this.favorites.splice(this.favorites.indexOf(id), 1);
      }
    },
    getAll: function () {
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => {
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
      if (this.favorites.length > 0) {
        axios
          .get(`https://rickandmortyapi.com/api/character/${this.favorites}`)
          .then((response) => {
            if (Array.isArray(response.data)) {
              this.characters = response.data;
            } else {
              this.characters = [];
              this.characters.push(response.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.characters = [];
      }
    },
    getByGender: function (gender) {
      axios
        .get(`https://rickandmortyapi.com/api/character/?gender=${gender}`)
        .then((response) => {
          this.characters = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCharacter: function (id) {
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
          this.character = response.data;
          this.character.episode.forEach((element) => {
            axios.get(element).then((response) => {
              this.chapters.push(response.data);
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cleanFilter: function () {
      this.getAll();
      this.search = "";
      this.isFavorite = false;
      this.color = "gray";
    },
    activeFavorite: function () {
      if (!this.isFavorite) {
        this.isFavorite = true;
        this.color = "yellow";
      } else {
        this.isFavorite = false;
        this.color = "gray";
      }
    },
    aleatoryCharacters: function () {
      axios
        .get(
          `https://rickandmortyapi.com/api/character/${Math.floor(
            Math.random() * 100
          )},${Math.floor(Math.random() * 100)}`
        )
        .then((response) => {
          console.log(response);
          this.aleatoryCharactersR = response.data;
          console.log(this.aleatoryCharactersR);
        })
        .catch((error) => {
          console.log(error);
        });
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
