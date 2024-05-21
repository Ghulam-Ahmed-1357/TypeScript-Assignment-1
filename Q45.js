"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let car_function = (manufacturer, model, ...args) => {
    let carInfo = {
        manufacturer,
        model,
    };
    for (let i = 0; i < args.length; i++) {
        let key = args[i][0];
        let value = args[i][1];
        carInfo[key] = value;
    }
    return carInfo;
};
console.log(car_function("Toyota", "Corolla", ["Color", "Black"], ["Type", "Auto"]));
console.log(car_function("Toyota", "BRV", ["Color", "White"], ["Type", "Manual"]));
