function Lunch(names) {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex] + " is going to buy lunch today!";
}

const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

console.log(Lunch(names));
