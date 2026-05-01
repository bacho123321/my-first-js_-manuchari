let total = 99;

function beer() {
  for (let total = 99; total > 0; total--) {
    console.log(`${total} bottles of beer on the wall, ${total} bottles of beer.`);
    console.log(`Take one down and pass it around, ${total - 1} bottles of beer on the wall.`);
  }
}

beer();