<template>
  <div class="big-header">
    <audio src="../assets/audio/generique.mp3" type="audio/mpeg"></audio>
    <div class="logotype"><img class="logo" src="../assets/images/logo.png" ></div>
    <div class="center">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/characters">START</router-link>
    <br />
   <!--  <button class="button" @click="handleClick">Click me up</button> -->

  </div>
   <img class="characters-gary" src="../assets/images/characters-gary.png" >
  </div>
</template>

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
