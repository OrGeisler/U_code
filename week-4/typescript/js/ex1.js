"use strict";
function sum(arryNum) {
    let sum = 0;
    arryNum.forEach(value => sum += value);
    return sum;
}
console.log(sum([1, 2, 3, 4]));
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));
//# sourceMappingURL=ex1.js.map
