let guestlist = ["Hamza", "Faaz", "Bilal", "Rameez"];
guestlist.unshift("Umer");
guestlist.splice(3, 0, "Usman");
guestlist.push("Ahmed");
for (let i = 0; i < guestlist.length; i++) {
  console.log(
    `Dear ${guestlist[i]}, I would like to invite you at the dinner tonight. It will be pleasure for me to see you at the dinner tonight.`
  );
}

console.log(
  `\nI have found a bigger dinner table so now I have invited ${
    guestlist.length - 1 // excluding the invited guest
  } guests, I hope you will be delighted to meet with them at the dinner. `
);
