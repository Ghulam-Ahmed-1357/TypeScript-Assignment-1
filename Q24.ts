// Tests for equality and inequality with strings
let name: string = "Bilal";
console.log("Is name == 'Bilal'? I predict True.");
console.log(name == "Bilal");

let name2: string = "Ahmed";
console.log("Is name2 == 'Umer'? I predict false.");
console.log(name2 == "Umer");

// Tests using the lower case function

let text = "Hello, World!";
let result = text.toLowerCase();
console.log("Is text == 'hello, world'? I predict false.");
console.log(result == "hello, world");

let text1 = "How are you?";
let res = text1.toLowerCase();
console.log("Is text1 == 'how are you?'? I predict true.");
console.log(res == "how are you?");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
console.log("Is num1 == '5'? I predict true.");
console.log(num1 == 5);

let num2 = 10;
console.log("Is num2 != '10'? I predict false.");
console.log(num2 != 10);

let num3 = 17;
console.log("Is num3 >= '17'? I predict true.");
console.log(num3 >= 17);

let num4 = 23;
console.log("Is num4 <= '30'? I predict true.");
console.log(num4 <= 30);

let num5 = 13;
console.log("Is num5 > '15'? I predict false.");
console.log(num5 > 15);

let num6 = 13;
console.log("Is num6 < '16'? I predict true.");
console.log(num6 < 16);

// Tests using "and" and "or" operators

let a = 10;
let b = 15;

console.log("Is a > 5 && b < 20 ? I predict true.");
console.log(a > 5 && b < 20);

console.log("Is a == 10 && b < 10 ? I predict false.");
console.log(a == 10 && b < 10);

console.log("Is a == 10 || b < 10? I predict true.");
console.log(a == 10 || b < 10);

console.log("Is a < 5 || b > 20? I predict false.");
console.log(a < 5 || b > 20);

// Test whether an item is in a array
let array: number[] = [1, 3, 5, 7, 9];
let num_to_find = 5;
if (array.includes(num_to_find)) {
  console.log("Is number found in the array? I predict true.");
  console.log(array.includes(num_to_find));
}

// Test whether an item is not in a array

let num_to_find_2 = 11;
if (!array.includes(num_to_find_2)) {
  console.log("Is number found in the array? I predict false.");
  console.log(array.includes(num_to_find_2));
}
