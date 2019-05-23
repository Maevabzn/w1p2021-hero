<template>
  <div class="big-header">
    <div class="center">
    <h1>{{ message }}</h1>
     
    <br />
    <div class="container">
      <div class="first">
    <a @click.prevent="select('sandy')" ><img src="../assets/images/characters-sandy.png" ></a>
   <h2>SANDY</h2>
   </div>
   <div class="second">
    <a @click.prevent="select('patrick')"><img src="../assets/images/characters-patrick.png" ></a>
     <h2>PATRICK</h2>

    </div>
   
    <br />
  </div>
  
  </div>
</template>

<style lang="scss" scoped>
.big-header{
  background-image: url(../assets/images/homepage.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}


img{
  width:20vw;
}
 
h2{
  color: white;
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
  border: none;
  font-size:30px;
  width: 7vw;
}
h1{
  color: white;
}
.container{
  display: flex;
  padding-right: 40px;
}
.first{
  background: rgba(221, 242, 251, 0.5);
  display: flex;
  flex-direction: column;
  padding-top: 3vw;
  justify-content: space-between;
  align-items: center;
  background: rgba(221, 242, 251, 0.5);
  margin-left: 40px;
}
.second{
  display: flex;
  flex-direction: column;
  padding-top: 3vw;
  justify-content: space-between;
  align-items: center;
  background: rgba(221, 242, 251, 0.5);
  margin-left: 41px;
}

</style>


<script>
import characterService from '../services/characterService';

export default {
  data() {
    return {
      message: 'CHOISIS TON PERSONNAGE'
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
