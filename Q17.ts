let guestlist = ["Umer", "Hamza", "Faaz", "Usman", "Bilal", "Rameez", "Ahmed"];
console.log("I can invite only two guest for dinner ");
for (let i = 0; i <= guestlist.length + 1; i++) {
  let removed_guest = guestlist.pop();
  console.log(`I am sorry ${removed_guest} I can't invite you to dinner`);
}

for (let i = 0; i < guestlist.length; i++) {
  console.log(
    `Dear ${guestlist[i]}, you are still invited at the dinner tonight. It will be pleasure for me to see you at the dinner tonight.`
  );
}
guestlist.pop();
guestlist.pop();
console.log("Guest list=", guestlist); // empty