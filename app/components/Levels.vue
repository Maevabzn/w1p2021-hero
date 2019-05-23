<template>
  <div class="big-header">
    <div class="center">
    <h1>{{ message }} <!-- - Hello {{ character }} --></h1>
    <br/>
    <br/>
    <img :src="characterImage"/>
    <br />
    <div class="one">
      <div class="two">
    <a @click.prevent="select('quizz')"><img src="../assets/images/level-quizz.jpg" ></a>
    <p>Niveau facil</p>
    </div>
    <div>
    <a @click.prevent="select('labyrinthe')"><img src="../assets/images/level-labyrinthe.jpg" ></a>
    <p>Niveau dur</p>
    </div>
    </div>
   <!--  <button class="button" @click="handleClick">Click me up</button> -->
  </div>
  
  </div>
</template>
<style scoped>
img{
  width:20vw;
}
.one{
  display: flex;
}
.two{
  margin-right: 50px;
}
.big-header{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>


<script>
import levelService from "../services/levelService";
import characterService from '../services/characterService';

export default {
  data() {
    return {
      message: 'Choisis ton niveau'
    };
  },
  
  computed: {
    character() {
      return characterService.get();
    },
    characterImage() {
      return characterService.getImage();
    }
  },
  methods: {
    handleClick() {
      countService.increment();
    },
    select(level){
      levelService.set();
    }
  }
};
</script>
