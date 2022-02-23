"use strict";

const getApple = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('apple');
  }, 1000);
});
const getBanana = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('banana');
  }, 1000)
});

const getFruits = async () => {
  const apple = await getApple;
  const banana = await getBanana;
  return `${apple} + ${banana}`;
};

getFruits().then(console.log);