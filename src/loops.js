// const array = [
//   { id: 1, name: "Kris" },
//   { id: 2, name: "Giga" },
//   { id: 3, name: "Vesi" },
// ];

// // for (const number of array) {
// //   console.log(number);
// // }

// function search(searchNumber) {
//   let foundItem;
//   for (const object of array) {
//     if (object.id === searchNumber) {
//       foundItem = object;
//       break;
//     }
//   }
//   return foundItem;
// }

// console.log(search(1));

const object = { 1: "One", 2: "Two", 3: "Three" };

for (const key in object) {
  console.log(key);
  console.log(object[key]);
}

const MySongWriters = ["Limp Bizkit", "Linkin Park", "Sting"];
