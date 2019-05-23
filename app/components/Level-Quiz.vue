<template>
  <div class="big-header" >
    <div class="center">
      <h1>{{ message }}</h1>
      
      <h2>{{ step.questions }}</h2>
      <section class="answers"
      >
      <div v-for="(answer, index) in step.answers"
      :key="index"
      class="button"
      @click="changePath(step.answer, answer)" >
      {{answer}}
      </div>
      </section>
    </div>
       <img :src="characterImage"/>

  </div>
</template>
<style scoped>
.big-header{
  background-attachment: fixed;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100vh;
}
img {
  width: 20vw;
}
.answers{
  display: flex;
  width: 80vw;
  justify-content: space-between;
  padding-top:10vw;
}
</style>


<script>
import countService from "../services/countService";
import characterService from '../services/characterService';
import theQuestions from "../data.json";
import { symlink } from 'fs';

export default {

  data: function() {
    return {
      message: "Questions",
      numbreQuestion: 0
    };
  },

  computed: {
    step() {
      return theQuestions.steps.find(step => step.id === Number(this.$route.params.id));
    },
    character() {
      return characterService.get();
    },
    characterImage() {
      return characterService.getImage();
    }
  },

  methods: {
    changePath(correctAnswer, answer) {
      if (correctAnswer === answer) {
            this.$router.push({ name: 'level quiz', params: { id: Number(this.$route.params.id) +1  } });
      if ( this.$route.params.id === 15 ) {
        this.$router.push({ name: 'win', params: { path: '/win'}} );
      }
      }else{  
        countService.decrement()
        if( countService.value() <= 0 ){
          this.$router.push({ name: 'lose', params: { path: '/lose'}} );
        }else{
         this.$router.push({ name: 'level quiz', params: { id: Number(this.$route.params.id) +1  } })
        }
      }
    }
  }

}
</script>
