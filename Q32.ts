let current_users: string[] = ["Ahmed", "Uzair", "Ali", "Rameez", "Hamza"];
let new_users: string[] = ["Faaz", "AHMED", "Bilal", "Mahad", "UZAIR"];
let available_count = 0;
for (let i = 0; i < new_users.length; i++) {
  available_count = 0;
  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() == current_users[j].toLowerCase()) {
      available_count++;
    }
  }
  if (available_count == 1) {
    console.log(`The username ${new_users[i]} is not available`);
  } else {
    console.log(`The username ${new_users[i]} is available`);
  }
}