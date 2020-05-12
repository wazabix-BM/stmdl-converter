class convertM {
    constructor(kg, lbs) {
  
      this.kg = kg;
      this.lbs = lbs;
  
    }
    static kgToLbs(x) {
      return x * 2.205;
  
    }
    static lbsToKg(x) {
      return x * 0.453592;

    }
}

module.exports = convertM;