//Buatlah fungsi untuk menghitung BMI (Body Mass Index)
//Rumus : BMI = berat / (tinggi * tinggi),
//berat dalam kg dan tinggi dalam meter
//170 cm = 1.7 m
//Fungsi tersebut menerima 2 parameter yaitu berat dan tinggi
//Dan mengembalikan output berupa BMI

function calculateBMI(berat, tinggi){
let bmi = berat / (tinggi * tinggi);
return bmi;
}
let berat = 60;
let tinggi = 1.70;
let bmi = calculateBMI(berat, tinggi);
console.log("BMI ideal anda:" + bmi.toFixed(2));