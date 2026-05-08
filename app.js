// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNums = nums.filter((num) => {
//   if (num % 3 === 0) return num;
// });
// const users = [
//   {
//     id: 1,
//     name: "Ali Valiyev",
//     email: "ali@example.com",
//     role: "Admin",
//     status: "active",
//   },
//   {
//     id: 2,
//     name: "Olima Karimoa",
//     email: "olima@example.com",
//     role: "User",
//     status: "inactive",
//   },
//   {
//     id: 3,
//     name: "Sardor Azimov",
// //     email: "sardor@example.com",
// //     role: "Editor",
// //     status: "active",
// //   },
// //   {
// //     id: 4,
// //     name: "Madina Rustamova",
// //     email: "madina@example.com",
// //     role: "User",
// //     status: "active",
// //   },
// //   {
// //     id: 5,
// //     name: "Jasur Rahimov",
// //     email: "jasur@example.com",
// //     role: "User",
// //     status: "pending",
// //   },
// //   {
// //     id: 6,
// //     name: "Nigora Shokirova",
// //     email: "nigora@example.com",
// //     role: "Moderator",
// //     status: "active",
// //   },
// //   {
// //     id: 7,
// //     name: "Bobur Mansurov",
// //     email: "bobur@example.com",
// //     role: "User",
// //     status: "inactive",
// //   },
// //   {
// //     id: 8,
// //     name: "Laylo Toirova",
// //     email: "laylo@example.com",
// //     role: "User",
// //     status: "active",
// //   },
// //   {
// //     id: 9,
// //     name: "Farhod Ergashev",
// //     email: "farhod@example.com",
// //     role: "Editor",
// //     status: "pending",
// //   },
// //   {
// //     id: 10,
// //     name: "Zuhra Akramova",
// //     email: "zuhra@example.com",
// //     role: "User",
// //     status: "active",
// //   },
// // ];
// // let newUsers = users.map((user) => {
// //   if (user.status === "active") {
// //     return { ...user, age: 20 };
// //   } else {
// //     return { ...user, age: 15 };
// //   }
// // });
// // console.log(newUsers);

// const users = [
//   {
//     id: 1,
//     name: "Ali",
//     age: 17,
//     role: "admin",
//   },
//   {
//     id: 2,
//     name: "Vali",
//     age: 25,
//     role: "user",
//   },
//   {
//     id: 3,
//     name: "Soli",
//     age: 15,
//     role: "admin",
//   },
//   {
//     id: 4,
//     name: "Gani",
//     age: 30,
//     role: "user",
//   },
// ];

// // Filter orqali 18 yoshdan kattalarini ajratib oling
// // let ahi = users.filter(user => {
// //   if (user.age >= 18) {
// //     return user
// //   }
// // })
// // console.log(ahi)
// // ============================================================================================================================
// // map orqali massivdagi barcha foydalanuvchilarning faqat ismlarini o'z ichiga olgan yangi massiv
// // yarating (masalan: ["Ali", "Vali", ...]).
// // let newMassiw = users.map((user)=>{
// // let ism=[]
// // ism=user.name
// // return ism
// // })
// // console.log(newMassiw);
// // ==============================================================================================================================
// // filter orqali faqat role: "admin" bo'lganlarni ajratib oling.
// // let admine = users.filter(user => {

// //   if( user.role =='admin'){
// //     return user;
// //   }

// // })
// // console.log(admine)
// // ===========================================================================================================================

// const products = [
//   {
//     name: "Laptop",
//     price: 1200,
//     category: "Electronics",
//   },
//   {
//     name: "T-shirt",
//     price: 20,
//     category: "Clothes",
//   },
//   {
//     name: "Smartphone",
//     price: 800,
//     category: "Electronics",
//   },
//   {
//     name: "Shoes",
//     price: 50,
//     category: "Clothes",
//   },
// ];
// Chegirma: map yordamida barcha mahsulotlar narxini 10% ga arzonlashtirib, yangi massiv hosil
// qiling.
// let chegirma = products.map((product)=>{
// let arzon =[]
// arzon=product.price*0.9
// return arzon
// })
// console.log(chegirma);
// ===========================================================================================================================
// Kategoriya: filter yordamida faqat "Electronics" kategoriyasiga tegishli mahsulotlarni
// ajrating.
// let electcate = products.filter((product)=>{
// if(product.category=='Electronics'){
//   return product.category
// }

// })
// console.log(electcate);
// ============================================================================================================================

// ['ahmad', 'bekzod', 'dilshod', 'elyor']
// map yordamida barcha ismlarning birinchi harfini katta qiling (Masalan: "Ahmad").
// let bigHarf = ['ahmad', 'bekzod', 'dilshod', 'elyor'].map(ism => {
//     return ism.charAt(0).toUpperCase() + ism.slice(1);
// });

// console.log(bigHarf);
// ========================================================================================================================

// filter yordamida ismining uzunligi 5 ta harfdan ko'p bo'lgan ismlarni ajratib oling.
// let longHarf = ['ahmad', 'bekzod', 'dilshod', 'elyor'].filter((ism )=> ism.length > 5);

// console.log(longHarf);
