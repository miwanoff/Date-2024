let tick = true;
let counter = 0;
let d = new Date();

function ticker() {
  if (tick) {
    document.write("Тік ");
    tick = false;
  } else {
    document.write("Так ");
    tick = true;
  }
//   let d1 = new Date();
//   let dif = (d1.getTime() - d.getTime())/ 1000 ;
//  if (dif > 10) {
//     clearInterval(t);
//   }
  // counter++;
  // if (counter > 10) {
  //   clearInterval(t);
  // }
  // document.write(counter);
}

let t = setInterval(ticker, 1000);
