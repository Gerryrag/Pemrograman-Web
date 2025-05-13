// Penulisan keyword yang salah (akan menghasilkan SyntaxError)
// WHILE (angka < 3) { // SyntaxError: Unexpected token 'WHILE'
//     console.log("Masih kurang dari 3");
//     angka++;
// }

function sapa() {
  console.log("Halo!");
}

function Sapa() {
  console.log("Hai!");
}

sapa(); // Output: Halo!
Sapa(); // Output: Hai!

// Mencoba memanggil dengan kapitalisasi berbeda akan error:
// sapa();   // Ini akan bekerja
// sApa();   // TypeError: sApa is not a function
