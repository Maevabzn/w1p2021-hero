class levelService {
  set(level) {
    this.level = level;
  }
  get() {
    return this.level;
  }
  getImage() {
 /*    switch(this.level) {
      case 'quizz' : return require ('../assets/images/level-quizz.png');
      case 'labyrinthe' : return require('../assets/images/level-labyrinthe.png');
    } */
  }
}

module.exports = new levelService();
