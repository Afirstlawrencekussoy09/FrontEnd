//EXERCISE 9: KUSSOY, AFIRST
//1. Promise
// function helloWorld() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello World!")
//         }, 2000)
//     })
// }
// async function messages() {
//     const msg = await helloWorld()
//     console.log(msg)
// }
// messages()

//2. Fetch
export const ambilDataUser = () => {
    fetch("https://reqres.in/api/users")
        .then((response) => response.json())
        .then((users) => {
            users.data.forEach(user => {
                console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
            });
        })
        .catch((error) => console.error('Error:', error));
};


//3. Async Await
// export const ambilDataUserAsync = async () => {
//     try {
//       const response = await fetch("https://reqres.in/api/users");
//       const users = await response.json();
//       users.data.forEach((user) => {
//         console.log(
//           `First Name: ${user.first_name}, Last Name: ${user.last_name}`
//         );
//       });
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
  


// //4. Axios
// export const ambilDataUserAxios = async () => {
//     try {
//       const response = await axios.get("https://reqres.in/api/users");
//       const users = response.data;
//       users.data.forEach((user) => {
//         console.log(
//           `First Name: ${user.first_name}, Last Name: ${user.last_name}`
//         );
//       });
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
  