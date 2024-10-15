// Array in JavaScript
// Deklarasi Array
// Cara 1. Array Literal
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// // Cara 2. Kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2);

// // Tipe data apa saja yang bisa disimpan dalam array
// let numbers = [1, 2, 3, 4, 5]; //mumbers
// let students = ["John", "Jane", "Rob"]; //string
// let John = ["John", 30, true, [80, 90, 100]]; //mixed
// console.log(John);

// //  Array Lenght
// console.log(numbers.length); //5
// console.log(students.length); // 4
// console.log(John.length); //3

// // Cara mengakses element/data tertentu dalam array
// // Melalui index array, Index selalu dimulai 
// console.log(numbers[2]); //3
// console.log(students[1]); //Jane
// console.log(John[2]); //true
// console.log(John[3][1]); //90

// // Mengakses element/data terakhir dalam array
// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers2[9]);
// console.log(numbers2[numbers2.length - 1]);
// console.log(numbers2[numbers2.length/2 - 1]);
// let index = numbers2.findIndex(function(item) {
//     return item === "Togo";
// });
// console.log(index);
// console.log(numbers2[186]); //contoh di slide sir yang countries

// Array Method
let array = [1, 2, 3, "Hello", "Selamat Pagi", false, true];
console.log(array);

//1. toString()
console.log(array.toString());
//2. toJoin
console.log(array.join());
console.log(array.join(" "));
console.log(array.join("_"));
console.log(array.join("#"));
//3. pop()
array.pop();
console.log(array);
//4. push()
array.push("Selamat Pagi");
console.log(array);
//5. shift()
array.shift();
console.log(array);
//6. unshift()
array.unshift("Selamat Pagi");
console.log(array);
//7. splice()
