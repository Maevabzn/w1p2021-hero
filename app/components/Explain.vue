<template>
  <div class="big-header">
    <div class="center">
    <h1>{{ message }}</h1>
    <br />
 <img src="/assets/images/characters-bob.png" alt=""> 
 <router-link class="button" to="/characters">START</router-link>
  </div>
</template>
<style scoped>
img{
  position: absolute;
  width: 168px;
  height: 195px;
  left: 270px;
  top: 500px;
}

h1{
  background: rgba(91, 196, 241, 0.5);
  border-radius: 69px;
  position: absolute;
  width: 640px;
  height: 290px;
  left: 400px;
  top: 170px;
  font-family: Press Start 2P;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 70px;
  text-align: center;
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
.button{
 position: absolute;
 top: 600px;
}

</style>


<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: `Aide moi à retrouver Gary mon escargot pour cela il faut savoir si tu nous connais reellement  ` 
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>
