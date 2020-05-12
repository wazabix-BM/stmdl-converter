class convertT {
    constructor(ms, s, min, hour) {
  
      this.ms = ms;
      this.s = s;
      this.min = min;
      this.hour = hour;
  
    }
    static msToS(x) {
        return x * 0.001;
    
    }
    static msToS(x) {
        return x * 0.001;
    
    }
    static sToMin(x) {
        return x * 0.0166667;
    
    }
    static minToHour(x) {
        return x * 0.0166667;
    
    }
    static msToMin(x) {
        return x / 60000;
    
    }
    static msToHour(x) {
        return x / 3600000;
    
    }
    static sToHour(x) {
        return x / 3600;
    
    }
    static minToMs(x) {
        return x * 60000;
    
    }
    static minToS(x) {
        return x * 60;
    
    }
    static sToMs(x) {
        return x * 1000;
    
    }
    static hourToMin(x) {
        return x * 60;
    
    }
    static hourToS(x) {
        return x * 3600;
    
    }
    static hourToMs(x) {
        return x * 3600000;
    
    }
}

module.exports = convertT;