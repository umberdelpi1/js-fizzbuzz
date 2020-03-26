// Stampare numeri da 1 a 100
for(var i = 1; i <= 100; i++) {

  console.log(i);
// I numeri multipli di 3 stampare "Fizz" al posto del numero
// I multipli di 5 stampare "Buzz" al posto del numero
//  Per numeri sia multipli di 3 che 5 stampare "FizzBuzz"
  if(i%3==0){
  console.log("Fizz: " + i)
  } else if (i%5==0){
   console.log("Buzz: " + i)
  }
  if(i%15==0){
   console.log("FizzBuzz: " + i);
  }
}

// for(var i = 1; i <= 100; i++) {
//
//   console.log(i);
// // I numeri multipli di 3 stampare "Fizz" al posto del numero
//   if(i%3==0){
//   console.log("Fizz: " + i)
//   }
// // I multipli di 5 stampare "Buzz" al posto del numero
//   if (i%5==0){
//    console.log("Buzz: " + i)
//   }
// //  Per numeri sia multipli di 3 che 5 stampare "FizzBuzz"
//   if(i%15==0){
//    console.log("FizzBuzz: " + i);
//   }
// }
