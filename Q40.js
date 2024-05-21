"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let make_album = (artist, title, tracks) => {
    let album = {
        artist,
        title,
    };
    if (tracks != undefined) {
        album.tracks = tracks;
    }
    return album;
};
console.log(make_album("Waqas", "Evermore", 13));
console.log(make_album("Arif", "Song album"));
console.log(make_album("Asif", "Entertainment", 20));
