"use strict";

const fetchNum = new Promise((resolve, reject) => {
  console.log("Loading...");
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNum
.then((num) => num*2)
.then((num) => num*2)
.then((num) => {
  console.log("reloads...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num-1)
    }, 1000);
  });
})
.then((num) => console.log(num));