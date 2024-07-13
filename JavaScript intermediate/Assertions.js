const word = "Cakes";

let firstChar = new RegExp(`^${word[0]}`);
let lastChar = new RegExp(`${word[word.length-1]}$`);
