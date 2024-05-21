let guestlist = ["Hamza", "Faaz", "Mahad", "Rameez"];
let dislist_guest = guestlist.splice(2, 1, "Bilal");

for (let i = 0; i < guestlist.length; i++) {
  console.log(
    `Dear ${
      guestlist[i]
    }, I would like to invite you at the dinner tonight. It will be pleasure for me to see you at the dinner tonight. I have also invited ${
      guestlist.length - 1
    } more guests, you will meet them at the dinner `
  );
}
console.log(`the name of the guest who can’t make dinner is ${dislist_guest}.`);