"use strict";

const mahabub = {
  firstName: "Mahabub",
  birthYear: 1993,
  calcAge: function () {
    //console.log(this);
    console.log(2024 - this.birthYear);

    const isMillenial = () => {
      console.log(this);
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

mahabub.calcAge();

// const self = this;

//     const isMillenial = function () {
//       console.log(self);
//       console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
//     };
