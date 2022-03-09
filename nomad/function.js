function sayHello(name, age){
  console.log(`${name} (${age})`);
}

sayHello('Wille', 13);

function plus(firstNum, secondNum){
  console.log(firstNum + secondNum);
}

plus(); // NaN
plus(8, 60); // 68

function divide(a, b){
  console.log(a / b);
}
divide(98, 20);

const player = {
  name: "Wille",
  age: 13,
  sayHello: function(otherPerson){
    console.log(`Hello, ${otherPerson}, my name is ${this.name}, and I'm ${this.age} years old.`);
  }
};

player.sayHello('Orange');

const calculator = {
  plus: function(a, b){
    console.log(a + b);
  },
  minus: function(a, b){
    console.log(a - b);
  },
  times: function(a, b){
    console.log(a * b);
  },
  divide: function(a, b){
    console.log(a / b);
  },
  power: function(a, b){
    console.log(a ** b);
  }
};