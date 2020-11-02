// TASK 01

let myCar = {
    make: "Ford",
    model: "Mustang",
    year: "1969",
    speed: "120",
  };
  for (let key in myCar) {
    console.log(`Властивість ${key} має значення ${myCar[key]}`);
  }
  
  function whatTimeNeed(dis) {
    let result = dis / myCar.speed;
    let relax = 0;
    for (let hour = 1; hour <= result; hour++) {
      if (hour % 5 == 0) {
        relax++;
        result++;
      }
    }
    if (relax == 0) {
      console.log(`Вам не потрібен відпочинок`);
    } else {
      console.log(`Вам потрібен відпочинок`);
    }
    console.log(`${Math.round(result)} годин ви будете в дорозі`);
  }
  console.log(whatTimeNeed(740));
  
  // TASK 02
  function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  let firstNumber = new Fraction(1, 2);
  let secondNumber = new Fraction(3, 4);
  
  function additionFraction(obj1, obj2) {
    let resultNumerator = obj1.numerator + obj2.numerator;
    let resultDenominator = obj1.denominator + obj2.denominator;
    console.log(`${resultNumerator} / ${resultDenominator}`);
  }
  additionFraction(firstNumber, secondNumber);
  
  function subtractionFraction(obj1, obj2) {
    let resultNumerator = obj1.numerator - obj2.numerator;
    let resultDenominator = obj1.denominator - obj2.denominator;
    console.log(`${resultNumerator} / ${resultDenominator}`);
  }
  subtractionFraction(firstNumber, secondNumber);
  
  function multiplicationFraction(obj1, obj2) {
    let resultNumerator = obj1.numerator * obj2.numerator;
    let resultDenominator = obj1.denominator * obj2.denominator;
    console.log(`${resultNumerator} / ${resultDenominator}`);
  }
  multiplicationFraction(firstNumber, secondNumber);
  
  function divisionFraction(obj1, obj2) {
    let resultNumerator = obj1.numerator * obj2.denominator;
    let resultDenominator = obj1.denominator * obj2.numerator;
    console.log(`${resultNumerator} / ${resultDenominator}`);
  }
  divisionFraction(firstNumber, secondNumber);

  // TASK 03

let myTime = {
    hour: 4,
    minutes: 20,
    seconds: 35,
    days: 0,
  
    showMyTime() {
      console.log(
        `${this.days} : ${this.hour} : ${this.minutes} : ${this.seconds}`
      );
    },
  
    addSeconds(sec) {
      let hr = sec / 3600;
      this.hour += Math.floor(hr);
      let min = sec / 60;
      this.minutes += Math.floor(min);
      this.seconds += sec;
  
      if (this.seconds >= 60) {
        this.seconds %= 60;
        this.minutes += Math.floor(this.seconds / 60);
      }
      if (this.minutes >= 60) {
        this.minutes %= 60;
        this.hour += Math.floor(this.minutes / 60);
      }
      if (this.hour > 23) {
        this.hour %= 24;
        this.days += Math.floor(this.hour / 24);
      }
      return myTime;
    },
  
    addMinutes(min) {
      let hr = min / 60;
      this.hour += Math.floor(hr);
      this.minutes += min;
  
      if (this.minutes >= 60) {
        this.minutes %= 60;
        this.hour += Math.floor(hr / 60);
      }
      if (this.hour > 23) {
        this.hour %= 24;
        this.days = Math.floor(this.hour / 24);
      }
      return myTime;
    },
  
    addHours(hr) {
      let d = hr / 24;
      this.days += Math.floor(d);
      this.hour = (this.hour + hr) % 24;
  
      if (this.hour > 23) {
        this.days = Math.floor(this.hour / 24);
      }
      return myTime;
    },
  };
  
  myTime.showMyTime();
  myTime.addSeconds(7400);
  console.log(myTime.showMyTime());
  myTime.addMinutes(123);
  console.log(myTime.showMyTime());
  myTime.addHours(45);
  console.log(myTime.showMyTime());