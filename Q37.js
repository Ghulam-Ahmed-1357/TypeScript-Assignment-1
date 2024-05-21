"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let make_shirt = (size = "Large", message = "I love TypeScript") => {
    console.log(`\nThe size of the shirt is ${size}, \nMessage is: '${message}'`);
};
make_shirt(); // call with default parameters
make_shirt("Medium");
make_shirt("Small", "Never Give Up");
