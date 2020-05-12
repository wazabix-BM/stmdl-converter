class convertS {
    constructor(mph, kmh) {
  
      this.kmh = kmh;
      this.mph = mph;
  
    }
    static kmhToMph(x) {
        return x * 0.621371192;

    }
    static mphToKmh(x) {
        return x * 1.609344;

    }
}

module.exports = convertS;