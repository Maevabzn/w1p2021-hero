<template>
  <div class="big-header">
    <div class="center">
    <h1>{{ message }}</h1>
     
    <br />
    <div class="container">
      <div class="first">
    <a @click.prevent="select('sandy')" ><img src="../assets/images/characters-sandy.png" ></a>
   <h2>Sandy</h2>
   </div>
   <div class="second">
    <a @click.prevent="select('patrick')"><img src="../assets/images/characters-patrick.png" ></a>
     <h2>Patrick</h2>

    </div>
   
    <br />
  </div>
  
  </div>
</template>

<style lang="scss" scoped>
.big-header{
    background-image: url(../assets/images/homepage.jpg);
}


img{
  width:20vw;
}
 
h2{
  color: white;
  text-decoration: none;
  background: #5BC4F1;
  padding: 5px;
  border-radius: 5px;
  border: none;
  font-size:30px;
  width: 7vw;
}
h1{
  color: white;
  text-decoration: none;
  background: #5BC4F1;
  padding: 5px;
  border-radius: 5px;
  border: none;
  font-size:30px;
  width: 25vw;
}
.container{
  display: flex;
}
</style>


<script>
import characterService from '../services/characterService';

export default {
  data() {
    return {
      message: 'Choisis ton Personnage'
    };
  },
  methods: {
    handleClick() {
      countService.increment()
    },
    select(character) {
      switch(character) {
        case 'sandy':
          this.selectedSandy = true
          this.selectedPatrick = false
          this.$router.push({ name: 'level quiz', params: { id:1  } })
          break
        case 'patrick':
          this.selectedSandy = false
          this.selectedPatrick = true
           this.$router.push({ name: 'level quiz', params: { id:15  } })
          break
      }
      characterService.set(character)
      
    }
  }
};
</script>
