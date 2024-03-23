"use strict";

const mahabub = {
  birthYear: 1993,
  calcAge: function () {
    console.log(2024 - this.birthYear);
    console.log(this);
  },
};

const demo = mahabub.calcAge;
console.log(demo);
demo();

const mahmud = {
  birthYear: 2011,
};

//method borrowing
mahmud.calcAge = mahabub.calcAge;
mahmud.calcAge();

// const calcAge = (birthYear) => {
//   console.log(2024 - birthYear);
//   console.log(this);
// };
// calcAge(1993);

// const calcAge = function (birthYear) {
//   console.log(2024 - birthYear);
//   console.log(this);
// };
// calcAge(1993);

//console.log(this);
