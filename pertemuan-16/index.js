// Asynchronous JavaScript

// Synchronous -> Single thread -> Blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses yg memakan waktu lama");
// console.log("Proses 4");

// Asynchronous -> Multi thread -> Non blocking
//1. Parallel
// setTimeout(()=>{
//     console.log("proses 1");
// }, 3000);
// console.log("proses 2");
// setTimeout(()=>{
//     console.log("proses 3");
// }, 5000);
// console.log("proses 4");

//2. Concurent
// setTimeout(()=>{
//     console.log("proses 1");
//     setTimeout(()=>{
//         console.log("proses 2");
//         setTimeout(()=>{
//             console.log("proses 3");
//             setTimeout(()=>{
//                 console.log("proses 4");
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }, 3000);

// Promise
// let condition = true;
// const newPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve("Berhasil");
//     } else {
//         reject("Gagal");
//     }
// });

//Cara pakai Promise
//1. then - catch
// newPromise
//     .then((result) => result)
//     .then((result) => console.log(result2))
//     .catch((error) => console.log(error));

//2. Async - Await
// Harus dibuat dalam fungsi
// const consumePromise = async () => {
//     try {
//         let result = await newPromise;
//     console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// };
// consumePromise();

//Pakai prosmise yang sudah ada
//1. Fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// (async () => {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users")
//     let json = await response.json()
//     json.forEach(({ name }) => console.log(name))
// })();

//2. Axios
// axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((result) => console.log(result.data))

// (async () => {
//     let result = await axios.get("https://jsonplaceholder.typicode.com/users")
//     result.data.forEach(({ name }) => console.log(name))
// })();