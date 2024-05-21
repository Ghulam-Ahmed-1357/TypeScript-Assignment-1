let city_country = (city: string, country: string): string => {
  return `"${city}, ${country}"`;
};
console.log(city_country("Madina", "Saudia Arabia"));
console.log(city_country("Makkah", "Saudia Arabia"));
console.log(city_country("Multan", "Pakistan"));
console.log(city_country("Karachi", "Pakistan"));
