class CountService {
  constructor() {
    this.count = 3;
  }
  decrement() {
    this.count--;
  }
  value() {
    return this.count;
  }
}

module.exports = new CountService();
