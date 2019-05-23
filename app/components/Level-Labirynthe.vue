<template>
  <div class="big-header">
    <div class="center">
    <h1>{{ message }}</h1>
    <br />
    <div>
    <img src="../assets/images/characters-bob.png" >
    <img src="../assets/images/characters-sandy.png" >
    <img src="../assets/images/characters-patrick.png" >
    </div>
    <router-link class="button" to="/levels">START</router-link>
    <br />
   <!--  <button class="button" @click="handleClick">Click me up</button> -->
  </div>
  
  </div>
</template>
<style scoped>
img{
  width:20vw;
}
</style>


<script>
 
import countService from '../services/countService';

export default {
  data() {
    return {
      message: 'Choisis ton Personnage'
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>
