"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let city_country = (city, country) => {
    return `"${city}, ${country}"`;
};
console.log(city_country("Madina", "Saudia Arabia"));
console.log(city_country("Makkah", "Saudia Arabia"));
console.log(city_country("Multan", "Pakistan"));
console.log(city_country("Karachi", "Pakistan"));
