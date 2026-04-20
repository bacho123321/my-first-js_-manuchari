let stumrebisRaodenoba = Number(prompt("რამდენი სტუმარი გყავთ?"));
let picisNachrebi = Number(prompt("რამდენი ნაჭერი გაქვთ?"));
let stumrebisNashti = picisNachrebi % stumrebisRaodenoba;
let stumrebisNachrebi = (picisNachrebi - stumrebisNashti) / stumrebisRaodenoba;

console.log(stumrebisNashti);

console.log(stumrebisNachrebi);
//alert ("თითოეული სტუმარი შეჭამს " + stumrebisNachrebi + " ნაჭერს, ხოლო ყუთში დარჩება " + stumrebisNashti + " ნაჭერი.")
console.log("თითოეული სტუმარი შეჭამს " + stumrebisNachrebi + " ნაჭერს, ხოლო ყუთში დარჩება " + stumrebisNashti + " ნაჭერი.");