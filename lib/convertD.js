class convertD {
  constructor(celsius, farhenheit) {
      
      this.celsius = celsius;
      this.farhenheit = farhenheit;

  }
  static farToCelsius(x) {
      return Math.round((x - 32) * 5/9);

      
  }
  static celToFarhenheit(x) {
       return Math.round(x * 9/5 + 32);

  }
}

module.exports = convertD;