<template>
  <div class="big-header">
    <div class="center">
    <h1>{{ message }}</h1>
     
    <br />
    <div>
    <a @click.prevent="select('sandy')" ><img src="../assets/images/characters-sandy.png" ></a>
   
    <a @click.prevent="select('patrick')"><img src="../assets/images/characters-patrick.png" ></a>
     
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
.active{
  border: blue;
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
