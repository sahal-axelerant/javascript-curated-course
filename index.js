// Create an array of price range objects used to define price range filters.
// $ - Inexpensive, $$ - Moderate, $$$ - Expensive.

let priceRanges = [
    { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
    { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
    { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 }
];
console.log(priceRanges);