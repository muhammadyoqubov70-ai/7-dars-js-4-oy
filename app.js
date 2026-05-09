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

// /**
//  * 1. Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv
//  * qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing.
//  */
// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// function getNamesByGrade(students, grade) {
//   return students
//     .map(student => {
//       let g;
//       if (student.percent >= 85) g = 5;
//       else if (student.percent >= 70) g = 4;
//       else if (student.percent >= 60) g = 3;
//       else g = 2;
//       return { ...student, grade: g };
//     })
//     .filter(student => student.grade === grade)
//     .map(student => student.name);
// }

// /**
//  * 2. Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating. (reduce)
//  */
// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const animalCount = animals.reduce((acc, animal) => {
//   acc[animal] = (acc[animal] || 0) + 1;
//   return acc;
// }, {});

// /**
//  * 3. Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)
//  */
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(num => num ** 2);

// /**
//  * 4. Massivdagi musbat sonlar yig’indisini hisoblang. (filter va reduce)
//  */
// const nums = [1, -4, 12, 0, -3, 29, -150];
// const positiveSum = nums
//   .filter(num => num > 0)
//   .reduce((acc, num) => acc + num, 0);

// /**
//  * 5. Satrdagi so’zlarning bosh harflarini oling. (split, map, join)
//  */
// const phrase = 'George Raymond Richard Martin';
// const initials = phrase.split(' ').map(word => word[0]).join('');

// /**
//  * 6. Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort)
//  */
// const people = [
//   {name: 'John', age: 13},
//   {name: 'Mark', age: 56},
//   {name: 'Rachel', age: 45},
//   {name: 'Nate', age: 67},
//   {name: 'Jeniffer', age: 65}
// ];
// const sortedPeople = [...people].sort((a, b) => a.age - b.age);
// const ageDiff = sortedPeople[sortedPeople.length - 1].age - sortedPeople[0].age;

// /**
//  * 7. N ta elementdan iborat massiv berilgan. Juftlarini va toqlarini ajrating. (filter)
//  */
// const nNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const evens = nNumbers.filter(n => n % 2 === 0);
// const odds = nNumbers.filter(n => n % 2 !== 0);

// /**
//  * 8. Massiv elementlari orasidan faqat birinchi uchraganini qoldiring. (reduce)
//  */
// const duplicates = [1, 2, 2, 3, 4, 4, 5, 1];
// const uniqueArray = duplicates.reduce((acc, curr) => {
//   if (!acc.includes(curr)) acc.push(curr);
//   return acc;
// }, []);

// /**
//  * 9-15. Products massivi bilan ishlash
//  */
// let products = [
//   { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
//   { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10 },
//   { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
//   { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30 },
//   { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30 },
// ];

// // 9. Sortlash (masalan, narxi bo'yicha)
// const sortedByPrice = [...products].sort((a, b) => a.price - b.price);

// // 10. Rating bo'yicha eng kuchli product
// const topRated = [...products].sort((a, b) => b.rating - a.rating)[0];

// // 11. Narxi eng past product
// const cheapest = [...products].sort((a, b) => a.price - b.price)[0];

// // 12. Barcha narxlar yig'indisi
// const totalPrice = products.reduce((acc, p) => acc + p.price, 0);

// // 13. Faqat nomlar massivi
// const productNames = products.map(p => p.name);

// // 14. Id si 5 bo'lgan element nomi
// const product5Name = products.find(p => p.id === 5)?.name;

// // 15. Id si 4 bo'lgan productni o'chirish
// const remainingProducts = products.filter(p => p.id !== 4);

// /**
//  * 16. Satrni faqatgina harflardan iborat ekanligiga tekshiring (split, every)
//  */
// const onlyLetters = "Javascript".split('').every(char => char.toLowerCase() !== char.toUpperCase());

// /**
//  * 17. Truthy va falsy elementlarni ajratib object qaytarish (filter)
//  */
// const mixedArr = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
// const getTruthyFalsy = {
//   truthy: mixedArr.filter(el => !!el),
//   falsy: mixedArr.filter(el => !el)
// };

// /**
//  * 18. Satrdagi so'zlar uzunligidan iborat massiv. (split, map)
//  */
// const sentence = "Men Abdulaziz Programmerman";
// const wordLengths = sentence.split(' ').map(word => word.length);

// /**
//  * 19. Satrda bo'sh joy borligini tekshiring. (split, some)
//  */
// const hasSpace = sentence.split('').some(char => char === ' ');

// /**
//  * 20. Object kalit va qiymatlari yig'indisi massivi. (Object.entries, map, join)
//  */
// const dataObj = {a: 2, b: 5, c: 7};
// const combinedEntries = Object.entries(dataObj).map(entry => entry.join(''));

// /**
//  * 21. Sonning raqamlari yig'indisi (rekursiv funksiya)
//  */
// function digitSum(n) {
//   if (n === 0) return 0;
//   return (n % 10) + digitSum(Math.floor(n / 10));
// }

// /**
//  * 22-25. Pupils massivi bilan ishlash
//  */
// const pupils = [
//   { name: "Elbek", protcent: 95 },
//   { name: "Zafar", protcent: 78 },
//   { name: "Aziz", protcent: 83 },
//   { name: "Jasur", protcent: 88 },
//   { name: "Bobur", protcent: 66 },
//   { name: "Kamron", protcent: 75 },
// ];

// // 22. O'rtacha protcent
// const averagePercent = pupils.reduce((acc, p) => acc + p.protcent, 0) / pupils.length;

// // 23 & 24. Grade va isPassed propertylarini qo'shish
// const finalPupils = pupils.map(p => {
//   let grade;
//   if (p.protcent >= 90) grade = 5;
//   else if (p.protcent >= 80) grade = 4;
//   else if (p.protcent >= 70) grade = 3;
//   else grade = 2;

//   return {
//     ...p,
//     grade: grade,
//     isPassed: p.protcent >= 70
//   };
// });

// // 25. O'tganlar va o'ta olmaganlar soni
// const stats = finalPupils.reduce((acc, p) => {
//   p.isPassed ? acc.passed++ : acc.failed++;
//   return acc;
// }, { passed: 0, failed: 0 });
