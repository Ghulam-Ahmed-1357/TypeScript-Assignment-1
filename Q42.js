"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["King magician", "Rashid", "Alvi", "Hassam", "Atiq"];
let make_great = (magician) => {
    for (let j = 0; j < magician.length; j++) {
        magician[j] = "The great " + magician[j];
    }
    return magician;
};
let show_magicians = (magician) => {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
};
let changed_array = make_great(magicians);
show_magicians(changed_array);
