class CharacterService {
  set(character) {
    this.character = character;
  }
  get() {
    return this.character;
  }
  getImage() {
    switch(this.character) {
      case 'sandy' : return require('../assets/images/characters-sandy.png');
      case 'patrick': return require('../assets/images/characters-patrick.png');
    }
  }
}

module.exports = new CharacterService();
