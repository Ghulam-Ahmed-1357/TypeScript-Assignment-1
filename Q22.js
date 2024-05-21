"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let array = [2, 4, 6, 8, 10];
console.log(array[8]); // it shows undefined
let req_index = 8;
if (array.length > req_index) {
    console.log(array[req_index]);
}
else {
    console.log("Array index 8 is out of bound");
}
