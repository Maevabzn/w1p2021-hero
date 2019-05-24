<template>
  <div class="big-header">
    <audio controls> <source src="../assets/audio/generique.mp3" type="audio/mpeg"></audio>
    <div class="logotype"><img class="logo" src="../assets/images/logo.png" ></div>
    <div class="center">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/explain">JOUER</router-link>
    <br />
 
  </div>
   <img class="characters-gary" src="../assets/images/characters-gary.png" >
  </div>
</template>
<style scoped>
.button {
  color: #5BC4F1;
  text-decoration: none;
  background: white;
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  cursor: pointer;
  font-size:30px;
}
h1{
  color: white;
}

</style>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'Retrouvez Gary'
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>
