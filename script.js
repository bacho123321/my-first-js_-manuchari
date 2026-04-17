let a = "3";
let b = "8";

console.log("a არის " + a);
console.log("b არის " + b);

//  Counteri

let userText = prompt("შეიყვანე ტექსტი");
let usedSymbols = userText.length;
let allSymbols = 26 - usedSymbols;

console.log(
  "შენ გამოიყენე " +
    usedSymbols +
    " სიმბოლო, დარჩენილი სიმბოლოების რაოდენობა არის " +
    allSymbols,
);

//  Capitalize Name

let userName = prompt("სახელი");

let firstLetter = userName.slice(0, 1).toUpperCase();
let lastLetters = userName.slice(1).toLowerCase();
let finalName = firstLetter + lastLetters;

console.log("გამარჯობა, " + finalName + "!");
