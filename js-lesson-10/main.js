function helloName(name) {
  return ('Hello ' + name)
}

console.log(helloName("Alex"))


const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    console.log(numbers[i])
  }
}


// function sumNumbers (firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }

// const result = sumNumbers(5, 7)
// console.log(result)

function sumNumbers(num1, num2, operator) {
  switch (operator.toLowerCase()) {
    case 'minus':
    case '-':
      return num1 - num2;
    case 'plus':
    case '+':
      return num1 + num2;
    case 'dividedby':
    case '/':
      return num1 / num2;
    case 'multiply':
    case '*':
      return num1 * num2;
  }
}

console.log(sumNumbers(2, 3, 'minus'));
console.log(sumNumbers(2, 3, 'plus'));
console.log(sumNumbers(6, 3, 'dividedby'));
console.log(sumNumbers(8, 5, 'multiply'));


// ====================================DZ2===============

const users = [
  {
    name: 'alex',
      age: 27,
      isAdmin: true
    },
    {
    name: 'max',
      age: 30,
      isAdmin: true
    },
    {
      name: 'nik',
      age: 47,
      isAdmin: false
    },
    {
      name: 'oleg',
      age: 35,
      isAdmin: true
    },
    {
      name: 'den',
      age: 23,
      isAdmin: false
    }
]

users.push ({
  name: 'ivan',
  age: 42,
  isAdmin: false
})

for (let i = 0; i < users.length; i++) {
  console.log(users[i])
}

// console.log(users)

function helloName(name) {
  return ('Hello ' + name)
}

console.log(helloName("Alex"))


