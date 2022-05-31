// Code your solutions in this file
const names = [ 'Lisa', 'Kaitlin', 'Jan' ];

function writeCards(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`"Thank you, ${names[i]}, for the wonderful surprise gift!"`);
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