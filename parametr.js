// ✅ ნაბიჯი 1: Default Parameters მინიჭება
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
  console.log(`საყიდლების სია: ${item1}, ${item2}, ${item3}`);
}

makeShoppingList();

makeShoppingList('apples');
