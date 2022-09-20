// Exercise_9:

// let boughtTesla = true;
// const yearOfTeslaPurchase = 2016;
// let isUSCitizen = true;
// let currentYear = 2018;

// if (boughtTesla === true && isUSCitizen === true) {
//   if (currentYear - yearOfTeslaPurchase >= 4) {
//     const answer = prompt("Would you like an upgrade?");
//   } else {
//     const answer = prompt("Are you satisfied with the car?");
//   }
// } else if (boughtTesla === true && isUSCitizen === false) {
//   const answer = prompt("Would you like to move to the US?");
// } else {
//   const answer = prompt("Would you like to buy a tesla?");
// }

// Exercise 11:

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// numbers.splice(1,2)
// numbers.splice(3,1,1)
// numbers.splice(numbers.length-4)
// numbers.splice(0,0,0)

// console.log(numbers)

// Exercis 13:
// 1)

// let p1 = {
//   name: "avi",
//   age: 30,
//   city: "Tel-aviv",
// };

// let p2 = {
//   name: "yosi",
//   age: 30,
//   city: "Tel-aviv",
// };

// if (p1.age === p2.age) {
//   console.log(p1.name + " and " + p2.name + " are in the same age");
// }

//2)
// let library = {
//   books: [{ title: "author" }, { title: "author" }],
// };

// Exercises 15:
// 1)

// const names = ["Ashley", "Donovan", "Lucas"];
// const ages = [23, 47, 18];
// const people = [];

// for (let index in names) {
//   people.push({ name: names[index], age: ages[index] });
// }
// console.log(people);

// 2)

// for(const index in names){
//     console.log(names[index]+ " is " + ages[index] + " years old" )
// }

// 3):

//  const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]

//   for(let index in posts){
//     if (posts[index].id === 2) {
//         posts.splice(index,1)
//         break
//     }
//   }
// console.log(posts)

// 4)

// const posts = [
//     {
//       id: 1,
//       text: "Love this product",
//       comments: []
//     },
//     {
//       id: 2,
//       text: "This is the worst. DON'T BUY!",
//       comments: [
//                   {id: 1, text: "Idiot has no idea"},
//                   {id: 2, text:"Fool!"},
//                   {id: 3, text: "I agree!"}
//                 ]
//      },
//      {
//       id: 3,
//       text: "So glad I found this. Bought four already!",
//       comments: []
//      }
//   ]

//   for(let index in posts){
//     if (posts[index].id === 2){
//         for(let index1 in posts[index].comments){
//             if(posts[index].comments[index1].id===3){
//                 posts[index].comments.splice(index1,1)
//             }
//         }
//     }
//   }

// console.log(posts)

//6)
// const dictionary = {
//     "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
//     "B": ["Banana", "Bonkers", "Brain", "Bump"],
//     "C": ["Callous", "Chain", "Coil", "Czech"]
//   }

//   for(let key of Object.keys(dictionary)){
//     console.log("Words that begin with " + key + ":")
//     for (let word of dictionary[key]){
//         console.log("   "+ word)
//     }
//   }
