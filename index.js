// Code your solutions in this file
const names = ["Rhys", "Dad", "Mum", "Sean", "Brendan"];

function writeCards(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you,  ${names[i]} for the wonderful birthday gift!`);
    debugger;
  }

  return names;
}

writeCards(names); 


function countDown () {
    let count = 10;
    while (count >= 0) {
        console.log(count--);
        debugger;
    }
}

countDown();