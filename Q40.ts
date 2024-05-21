type album_type = { artist: String; title: String; tracks?: number };
let make_album = (artist: string, title: string, tracks?: number) => {
  let album: album_type = {
    artist,
    title,
  };
  if (tracks != undefined) {
    album.tracks = tracks;
  }
  return album;
};
console.log(make_album("Waqas", "Evermore", 13));
console.log(make_album("Arif", "Song album"));
console.log(make_album("Asif", "Entertainment", 20));
