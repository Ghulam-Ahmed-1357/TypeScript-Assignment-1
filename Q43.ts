let magicians:string[] = ["King magician", "Rashid", "Alvi", "Hassam", "Atiq"];
let make_great = (magician: string[]): string[] => {
        let new_magicians: string[] = [];
  for (let j = 0; j < magician.length; j++) {
    new_magicians[j] = "The great " + magician[j];
  }
  return new_magicians;
};
let show_magicians = (magician: string[]) => {
  for (let i = 0; i < magician.length; i++) {
    console.log(magician[i]);
  }
};
let changed_array = make_great(magicians);
show_magicians(magicians)
show_magicians(changed_array);
