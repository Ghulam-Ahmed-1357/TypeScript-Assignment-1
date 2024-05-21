let locationsOfPlacesToVisit: string[] = [
  "Switzerland",
  "Himalaya",
  "K-2",
  "Kashmir",
  "Gilgit Baltistan",
];
// original array
console.log("Original Order:", locationsOfPlacesToVisit);

// array in alphabetical order without modifying the original list
let modified_list = locationsOfPlacesToVisit.slice(0);
modified_list.sort();
console.log(
  "Alphabetical order after sorting in alphabetical order:",
  modified_list
);

// original order
console.log("Original Order After Sorting:", locationsOfPlacesToVisit);

// array in reverse alphabetical order without modifying the original list
modified_list.reverse();
console.log("Reverse Alphabetical Order:", modified_list);

// original order
console.log("Original Order After Reverse Sorting:", locationsOfPlacesToVisit);

// Reverse the order of the list
console.log("Reversed Order:", locationsOfPlacesToVisit.reverse());

// Reverse the order of the list again to get back to its original order
console.log(
  "Original Order After Double Reverse:",
  locationsOfPlacesToVisit.reverse()
);

// Sort the array in alphabetical order
locationsOfPlacesToVisit.sort();
console.log("Sorted Alphabetically:", locationsOfPlacesToVisit);

// Sort the array in reverse alphabetical order
locationsOfPlacesToVisit.reverse();
console.log("Sorted in Reverse Alphabetical Order:", locationsOfPlacesToVisit);