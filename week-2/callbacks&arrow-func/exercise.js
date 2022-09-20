// 1)
// const pushPull = function (func) {
//     func();
//   };

// const push = function () {
//   console.log("pushing it!");
// };

// const pull = function () {
//   console.log("pulling it!");
// };

// pushPull(push); //should print "pushing it!"
// pushPull(pull); //should print "pulling it!"

//2)

// const returnTime = function (time) {
//   alert("The current time is: " + time);
// };

// function getTime(func) {
//   const time = new Date();
//   returnTime(time);
// }
// getTime(returnTime);

//3)

// function logData(date) {
//   console.log(date);
// }

// const displayData = function (alertDataFunc, logDataFunc, data) {
//   alertDataFunc(data);
//   logDataFunc(data);
// };

// displayData(alert, logData, "I like to party");

//4)

// const threeSum = (a, b, c) => a + b + c;
// console.log(threeSum(1, 2, 3));

//5)

// capitalize = string => console.log(string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());

// capitalize("bOb")// returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia

//6)

// const determineWeather = (temp) => {
//   if (temp > 25) {
//     return "hot";
//   }
//   return "cold";
// };

// commentOnWeather = (temp) => console.log(`It's ${determineWeather(temp)}`);

// commentOnWeather(30); //returns "It's hot"
// commentOnWeather(22); //returns "It's cold"

//7)

// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
//   }
      
//   const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
//   const makeSound = sound => alert(sound)
      
//   explode(shineLight, makeSound, "BOOM")

