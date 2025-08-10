//1st Question

const Fullname = (firstName, lastName, age) => {
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`);
};

Fullname("Priya", "Sharma", 21);

//2nd question

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;`    `
        this.lastName = lastName;
        this.age = age;
    }

    showDetails() {
        console.log(`First Name: ${this.firstName}, Last Name: ${this.lastName}, Age: ${this.age}`);
    }
}

const user1 = new User("Priya", "Sharma", 21);
user1.showDetails();
  
// 3rd question

const calculator = (a, b, operation) => {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return b !== 0 ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operation";
    }
};

console.log("Addition:", calculator(10, 5, "add"));
console.log("Subtraction:", calculator(10, 5, "subtract"));
console.log("Multiplication:", calculator(10, 5, "multiply"));
console.log("Division:", calculator(10, 5, "divide"));

//4th question

const checkOddEven = (num) => {
    if (num % 2 === 0) {
        console.log(`${num} is Even`);
    } else {
        console.log(`${num} is Odd`);
    }
};

checkOddEven(7);

//5th question

let a = 10, b = 20;
console.log(`Before Swap: a = ${a}, b = ${b}`);
[a, b] = [b, a];
console.log(`After Swap: a = ${a}, b = ${b}`);

//6th question

const checkNumber = (num) => {
    if (num > 0) {
        console.log(`${num} is Positive`);
    } else if (num < 0) {
        console.log(`${num} is Negative`);
    } else {
        console.log(`The number is Zero`);
    }
};

checkNumber(-5);

//7th question

const factorial = (num) => {
    if (num < 0) return "Factorial not defined for negative numbers";
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
};

console.log("Factorial:", factorial(5));

//8th question

const sameLastDigit = (a, b) => {
    if (a % 10 === b % 10) {
        console.log("Both numbers have the same last digit.");
    } else {
        console.log("Different last digits.");
    }
};

sameLastDigit(27, 57);

//9th question

const calculateGrade = (marks) => {
    if (marks >= 90) {
        console.log("Grade: A");
    } else if (marks >= 80) {
        console.log("Grade: B");
    } else if (marks >= 70) {
        console.log("Grade: C");
    } else if (marks >= 60) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F (Fail)");
    }
};

calculateGrade(85);

