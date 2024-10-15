//JavaScript Loop

//Array Object
// let students = [
//     {
//         id: 1,
//         firstName: "John",
//         grade: 80,
//     },
//     {
//         id: 2,
//         firstName: "Jane",
//         grade: 90,
//     },
//     {
//         id: 3,
//         firstName: "Bob",
//         grade: 100,
//     },
// ];
// console.log(students);

//1. for-loop
// for(let i=0; i<students.length; i++) {
//     console.log(students[i]);
//     console.log(students[i].firstName); //Hanya menampilkan firstName saja
// }

//2. while-loop
// let i = 0;
// while(i < students.length) {
//     console.log(students[i].firstName);
//     i++;
// }

//3. do - while loop
// let i = 0;
// do {
//     console.log(students[1].firstName);
//     i++;
// } while (i < students.length);

//4. Array built-in method
//4.a forEach()
// students.forEach(function (item) {
//     console.log(item);
//     console.log(item.firstName); //Hanya menampilkan firstName 
// });

//4.b map()
// let output = students.map(function (item) {
//     return item.firstName;
// });
// console.log(output);

//4.c filter()
// let outputFilter = students.filter (function (item) {
//     return item.grade >= 90;
// });
// console.log(outputFilter);

//4.d find() //Hanya mendapat satu data saja
// let outputFind = students.find (function (item) {
//     return item.grade >= 90;
// });
// console.log(outputFind);

//4.e findIndex()
// let outputFindIndex = students.findIndex (function (item){
//     return item.firstName ==="Jane";
// });
// console.log(outputFindIndex);

//Mini Exercise
let countries = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp;Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon",
    "Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua",
    "Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe" 
];
console.log(countries);
//1.
let Index = countries.findIndex (function (item){
        return item.countries ==="Indonesia";
    });
    console.log(Index);
//2.
let Filtercountries1 = countries.filter (function (item) {
    return item.endsWith = "sia";
});
console.log(Filtercountries1);
//3.
let Filtercountries2 = countries.filter (function (item) {
    return item.length > 7;
});
console.log(Filtercountries2);

//1. cari index dari negara indonesia
//2. dengan menggunakan filter tampilkan semua negara yang berakhiran "sia"
//3. tampilkan semua negara yang memiliki jumlah karakter > 7

