let describe_city = (city: string, country: string = "Pakistan") => {
  console.log(`${city} is in ${country}`);
};
describe_city("Madina", "Saudia Arabia");
describe_city("Makkah", "Saudia Arabia");
describe_city("Multan");
describe_city("Karachi");