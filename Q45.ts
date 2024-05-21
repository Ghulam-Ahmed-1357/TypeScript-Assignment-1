type car_type = {
  manufacturer: string;
  model: string;
  [args: string]: string;
};
let car_function = (
  manufacturer: string,
  model: string,
  ...args: [string, string][]
) => {
  let carInfo: car_type = {
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
console.log(
  car_function("Toyota", "Corolla", ["color", "Black"], ["type", "Auto"])
);
console.log(
  car_function("Toyota", "BRV", ["color", "White"], ["type", "Manual"])
);
