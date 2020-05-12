class convertL {
  constructor(mm, cm, dm, m, km) {

    this.mm = mm;
    this.cm = cm;
    this.dm = dm;
    this.m = m;
    this.km = km;

  }
  static mmToCm(x) {
    return x/10;

  }
  static mmToM(x) {
    return x/1000;

  }
  static mmToKm(x) {
    return x/1000000;

  }
  static cmToM(x) {
    return x/100;

  }
  static cmToKm(x) {
    return x/100000;

  }
  static mToKm(x) {
    return x/1000;

  }
  static kmToM(x) {
    return x*1000;

  }
  static kmToCm(x) {
    return x*100000;

  }
  static kmToMm(x) {
    return x*1000000;

  }
  static kmToDm (x) {
    return x * 10000;

  }
  static mToCm(x) {
    return x*100;

  }
  static mToMm(x) {
    return x*1000;

  }
  static cmToMm(x) {
    return x*10;

  }
  static dmToCm (x) {
    return x * 10;

  }
  static dmToMm (x) {
    return x * 100;

  }
  static dmToM (x) {
    return x / 10;

  }
  static dmToKm (x) {
    return x / 10000;

  }
}

module.exports = convertL;