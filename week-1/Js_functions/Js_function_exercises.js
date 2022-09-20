// 1)

function isEven(num) {
  return num % 2 === 0;
}

// 2)

function printOdd(list) {
  for (let num of list) {
    if (isEven(num) === false) {
      console.log(num);
    }
  }
}

// 3)

function checkExists(list, num) {
  for (let value of list) {
    if (value === num) {
      return true;
    }
  }
  return false;
}

// 4)

const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
};
