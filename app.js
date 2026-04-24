getMilk(10); //1.5ლარ

function getMilk(money) {
  let price = 1.5;
  let bottles = Math.floor(money / price);
  let returnMoney = money % price;
  // რძის ყიდვა
  console.log("buyMilk " + bottles + " bottles", "and return " + returnMoney + " gel");

  console.log(bottles);
  console.log(returnMoney);
}
