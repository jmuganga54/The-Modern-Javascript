// const calculateAverage = (thing, ...numbers) => {
//   //return (numOne + numTwo) / 2;
//   let sum = 0;
//   numbers.forEach((num) => {
//     return (sum = sum + num);
//   });

//   const average = sum / numbers.length;
//   return `The average ${thing} is ${average}`;
// };

// console.log(calculateAverage(`temperature`, 0, 100, 88, 64));

const printTeam = (team, coachName, ...players) => {
  return `Team: ${team}, Coach: ${coachName}, Players: ${players.join(", ")}`;
};

console.log(printTeam("Liberty", "Casey Penn", "Aiden", "Herbert", "Sherry"));
