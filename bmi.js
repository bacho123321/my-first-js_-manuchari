
 
function Nakiani(weli) {
  if (weli % 4 === 0) {
    if (weli % 100 === 0) {
      if (weli % 400 === 0) {
        console.log("nakiania");
      } else {
        console.log("ar aris nakiani");
      }
    } else {
      console.log("nakiania");
    }
  } else {
    console.log("ar aris nakiani");
  }
}

Nakiani(2000); 
Nakiani(1570); 
Nakiani(2024); 
Nakiani(2023); 



