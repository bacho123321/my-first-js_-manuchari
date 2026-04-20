let gadasaxdeliTanxa = prompt ("გთხოვთ შეიყვანოთ გადახდილი თანხა");
let tip = 10/100 * Number(gadasaxdeliTanxa);
let equal = Number(gadasaxdeliTanxa) + tip;

console.log(equal);

console.log(tip);

console.log("თქვენი გადასახადი იქნება: " + equal + " ლარი, საიდანაც " + tip + " ლარი იქნება მომსახურების საფასური, ხოლო " + gadasaxdeliTanxa + " ლარი იქნება თქვენი შეკვეთის ღირებულება.");
