let Person_Name= "Ghulam Ahmed";
console.log("Lowercase",Person_Name.toLowerCase());
console.log("Uppercase",Person_Name.toUpperCase());
console.log("Titlecase:", Person_Name.replace(/\b\w/g, t => t.toUpperCase()));
