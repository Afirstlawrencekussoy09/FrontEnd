// //JavaScript Object & Conditional
// //Deklarasi Object
// //Object Literal
// let John = {
//     firstName: "John",
//     age: 30,
//     isMarried: true,
//     grade: [80, 90,100 ],
//     sayGreetings: function () {
//         console.log("Hello my name is" + )
//     }
// };
// console.log(John);


// //Mengakses properti dalam object
// //1. Dot notation
// console.log(John.firstName);//John
// console.log(John.age);//30
// John.age = 31; //ubah nilai
// console.log(John);
// John.job = "Teacher";// tambah properti baru
// console.log(John);

// //2. Bracket Notation
// console.log(John["isMarried"]);//true
// John["nationality"] = "Indonesia"; //tambah properti baru
// console.log(John);

// //Object Method
// John.sayGreetings();

// // Object inside object
// console.log(John.addres.city);

// // Delete properti dalam object
// delete John.grade;
// console.log(John);

//JavaScript Conditional
//1. if - else
//Jika suhu hari ini lebih dari atau sama dengan 37,
//tampilkan suhu hari ini panas
///jika tidak tampilkan suhu hari ini dingin
let temp = 38;
if (temp >= 37){
    console.log("Suhu hari ini panas")
} else {
    console.log("Suhu hari ini dingin")
};

//2. if - else if - else
//Jika nilai 100 - 80 tampilkan grade A
//Jika nilai 70 - 79 tampilkan grade B
//Jika nilai 50 - 69 tampilkan grade C
//Jika nilai dibawah 50 tampilkan grade D
let grade = 100
if (grade >= 80 && grade <= 100){
    console.log("Grade A")
} else if (grade >= 70 && grade < 80){
    console.log("Grade B")
}else if (grade >= 50 && grade < 69){
    console.log("Grade C")
}else {
    console.log("Grade D")
}

//3. Switch - Case
// Jika angka 1 tampilkan january
// Jika angka 2 tampilkan february
// Jika angka 3 tampilkan march
// :
// Jika angka 12 tampilkan december

let number = 1;
switch (number) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default;
    console.log("Not Found");
    break;
}