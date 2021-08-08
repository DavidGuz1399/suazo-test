<template>
  <Characters />
</template>

<script>
import Characters from './components/Characters.vue'

export default {
  name: 'App',
  components: {
    Characters
  }
}
</script>
<style>
.container {
  display: grid;
  grid-template-columns: auto auto auto;
}
.card{
  display: flex;
}
.card-image{
  width: 150px;
}
</style>
