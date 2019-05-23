<template>
  <div class="big-header">
    <div class="center">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/">RECOMMENCER</router-link>
   <!--  <button class="button" @click="handleClick">Click me up</button> -->
  </div>
  
  </div>
</template>
<style scoped>
.big-header {
  background-image: url("../assets/images/lose.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  text-align: center;
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
      message: `Tu n'as pas été à la hauteur`
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>
