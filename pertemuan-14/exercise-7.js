// Nama: Afirst Kussoy
//Destructuring
// 1. Destructuring (Array & Object)
// a. Destructuring Array
// Array
const animals = ['cat', 'dog', 'rabbit'];

// Destructuring array
const [firstAnimal, secondAnimal, thirdAnimal] = animals;

console.log(firstAnimal); // Output: cat
console.log(secondAnimal); // Output: dog
console.log(thirdAnimal); // Output: rabbit

//b. Destructuring Object
// Object
const animal = { type: 'elephant', legs: 4, color: 'gray' };

// Destructuring object
const { type, legs, color } = animal;

console.log(type);  // Output: elephant
console.log(legs);  // Output: 4
console.log(color); // Output: gray

// 2. Destructuring dengan mengambil sebagian item (Array & Object)
// a. Array
const animals1 = ['cat', 'dog', 'rabbit'];

// Hanya ambil item pertama dan ketiga
const [firstAnimal1, , thirdAnimal1] = animals1;

console.log(firstAnimal1);  // Output: cat
console.log(thirdAnimal1);  // Output: rabbit

// b. Object
const animal1 = { type1: 'elephant', legs1: 4, color1: 'gray', habitat1: 'forest' };

// Hanya ambil type dan color
const { type1, color1 } = animal1;

console.log(type1); // Output: elephant 
console.log(color1); // Output: gray

// 3. Destructuring dengan menggunakan default value (Array & Object)
// a. Array
const animals2 = ['cat'];

// Berikan nilai default jika tidak ada
const [firstAnimal2, secondAnimal2 = 'dog'] = animals2;

console.log(firstAnimal2);  // Output: cat
console.log(secondAnimal2); // Output: dog (default value)

// b. Object
const animal2 = { type2: 'elephant', legs2: 4 };

// Berikan nilai default jika tidak ada properti
const { type2, color2 = 'blue' } = animal2;

console.log(type2);  // Output: elephant
console.log(color2); // Output: blue (default value)

// 4. Destructuring dengan menggunakan rest operator (Array & Object)
// a. Array
const animals3 = ['cat', 'dog', 'rabbit', 'hamster'];

// Ambil item yang pertama, sisa lainnya masuk ke restAnimals
const [firstAnimal3, ...restAnimals] = animals3;

console.log(firstAnimal3);  // Output: cat
console.log(restAnimals); // Output: ['dog', 'rabbit', 'hamster']

//b. Object
const animal3 = { type3: 'elephant', legs3: 4, color3: 'gray', habitat3: 'forest' };

// Ambil properti type, sisanya masuk ke rest
const { type3, ...rest } = animal3;

console.log(type3); // Output: elephant
console.log(rest); // Output: { legs: 4, color: 'gray', habitat: 'forest' }

// Soal: Dengan menggunakan konsep destructuring, coba anda
// cari di EXERCISE 6 bagian mana yang bisa diubah dengan destructuring.
console.log("Exercise 6");
// 1. yearUntilRetirement dengan Destructuring Parameter
console.log("1. yearUntilRetirement dengan Destructuring Parameter");
const calculateAge = (birthYear) => 2019 - birthYear;

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

// 3. calculateArea dengan Destructuring Parameter
console.log("3. calculateArea dengan Destructuring Parameter");
const phi = 3.14;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);