<template>
  <div class="big-header">
    <div class="center">
    <h1>{{ message }}</h1>
    <br/>
    <router-link class="button" to="/">RECOMMENCER</router-link>
   <video autoplay src="../assets/video/lose.mov" width="150vw" height="150vh"></video>
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
.center{
    background: rgba(91, 196, 241, 0.5);
    width: 50vw;
    padding-top: 20vh;
    padding-bottom: 20vh;
}
</style>


<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: `TU N'AS PAS ETE A LA HAUTEUR`
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>
