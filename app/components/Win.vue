<template>
  <div class="big-header">
    <div class="center">
    <h1>{{ message }}</h1>
    <br />
    <img src="../assets/images/characters-bobgary.png" alt="" srcset="">
  
   <!--  <button class="button" @click="handleClick">Click me up</button> -->
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
