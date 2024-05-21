"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["King magician", "Rashid", "Alvi", "Hassam", "Atiq"];
let make_great = (magician) => {
    let new_magicians = [];
    for (let j = 0; j < magician.length; j++) {
        new_magicians[j] = "The great " + magician[j];
    }
    return new_magicians;
};
let show_magicians = (magician) => {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
};
let changed_array = make_great(magicians);
console.log("Original Array");
show_magicians(magicians);
console.log("\nUpdated Array");
show_magicians(changed_array);
