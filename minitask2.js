// buatkan saya segitiga siku siku

// for (let i = 1; i < 7; i++) {
//   let baris = "";
//   for (let j = 1; j <= i; j++) {
//     baris = baris + "*";
//   }
//   console.log(baris);
// }

// do while
let i = 1;
let tinggi = 5;

do {
  let j = 1;
  let baris = "";

  do {
    baris += "*";
    j++;
  } while (j <= i);

  console.log(baris);
  i++;
} while (i <= tinggi);


