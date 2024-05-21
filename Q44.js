"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sandwich_items = (...items) => {
    console.log("\n\nSummary of sandwich ordered");
    console.log(items);
};
sandwich_items("Lettuce", "Tomato slices", "Mayonnaise", "Toasted bread");
sandwich_items("Sliced breast", "Swiss cheese", "Lettuce", "Tomato slices", "Mustard or mayonnaise", "Sliced bread or sandwich roll");
sandwich_items("Fresh mozzarella cheese", "Tomato slices", "Fresh basil leaves", "Salt and pepper", "Olive");
