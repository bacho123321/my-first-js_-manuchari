 type_conversion :   

/////The Tip Calculator" (Type Conversion)
დავალება: მომხმარებელს prompt-ით ჰკითხე რესტორნის ანგარიშის თანხა (მაგ: 50 ლარი).

მიზანი: გამოთვალე 10%-იანი "თიფი" (Tip) და აჩვენე მომხმარებელს საბოლოო ჯამი (ანგარიში + თიფი).

/////
https://www.freecodecamp.org/news/javascript-operators/

სავარჯიშო
The Party Planner  მომხმარებელს ჰკითხეთ სტუმრების რაოდენობა და პიცის ნაჭრების რაოდენობა.

1.  გამოთვალეთ, რამდენი ნაჭერი შეხვდება თითოეულ სტუმარს .
2.  მოდულოს (%) მეშვეობით გაიგეთ, რამდენი ნაჭერი დარჩება "ზედმეტი" (ნაშთი).

 გამოიტანეთ alert: "თითოეული სტუმარი შეჭამს X ნაჭერს, ხოლო ყუთში დარჩება Y ნაჭერი."

///////
ინცრემენტ

var a = 5;
var b = a++ + a;
console.log(b);

მოდულო
var logic = 3 % 10;
console.log(logic);

//
var n = 1;
n += n++ + ++n;
console.log(n);

//var surprise = "Hello" * 2;
console.log(surprise);

let power = 2;
power *= 3 + 2; 
console.log(power);

let score = 10;
score /= "2";
score += 5;
console.log(score);

Logical Operators: &&, ||, ! 

let isLoggedIn = true;
let hasBalance = false;
console.log(isLoggedIn && hasBalance && true); 

let isAdmin = false;
let isEditor = true;
console.log(isAdmin || isEditor || false);

let isHappy = true;
console.log(!!isHappy);

let x = 10;
let y = 5;
let result = (x > 5 && y < 10) || x++ === 10;
console.log(result);


console.log(0 || "გამარჯობა"); 
console.log("აკაკი" && 100);    


let nickname = ""; 
let finalName = nickname || "Guest";
console.log(finalName);

let a = "ვაშლი" && "მსხალი" && "ატამი";
console.log(a); 

let b = "" || 0 || "ალუბალი";
console.log(b); 

let c = "ყავა" && 0 && "ჩაი";
console.log(c); 

let d = "პური" || "წყალი";
console.log(d);

let userHasPremium = true;
userHasPremium && console.log("მოგესალმებით, პრემიუმ მომხმარებელო!"); 