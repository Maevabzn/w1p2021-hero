<template>
  <div class="big-header">
    <div class="center">
    <h1>{{ message }}</h1>
    <br />
    <img src="../assets/images/characters-bobgary.png" alt="" srcset="">
    <router-link class="button" to="/">REJOUER</router-link>
  </div>
  
  </div>
</template>
<style scoped>

img{
  width:20vw;
}
.big-header {
  background-image: url("../assets/images/win.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  color: white;
}
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
</style>


<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: `Merci d'avoir retrouvé Gary` 
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>
