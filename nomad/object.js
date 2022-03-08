//Objects

/*
const playerName = "Wille";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "not that much";
*/

const player = {
  name: "Wille",
  points: 10,
  handsome: true,
  fat: "not that much"
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

player.lastName = "Lee";
console.log(player);
// the fact that the identifier contains an object,
// but values inside of the object can be changed.

delete player.name;
console.log(player);

player.points += 15;
console.log(player.points);