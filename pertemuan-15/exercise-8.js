//EXERCISE 8
// 1;
console.log("1. yearUntilRetirement dengan Destructuring Parameter");
import { calculateAge } from"./utilsexercise-8.js";

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: "John" });
console.log(calculateAge);

// 2;
const addNumber = (...numbers) => {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum;
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3;
console.log("3. calculateArea dengan Destructuring Parameter");
const phi = 3.14;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4;
const makeAjaxRequest = (url, method = "GET") => {
  console.log(url, method);
};

makeAjaxRequest("www.google.com");