let isActive = true; // Menyimpan nilai true
let isDisabled = false; // Menyimpan nilai false

console.log("Status aktif:", isActive); // Output: Status aktif: true
console.log("Status disabled:", isDisabled); // Output: Status disabled: false

// Boolean dalam Kondisi If-Else

let usia = 17;
let batasUsia = 18;

if (usia >= batasUsia) {
  console.log("Anda sudah dewasa");
} else {
  console.log("Anda masih di bawah umur"); // Output: Anda masih di bawah umur
}

// Operasi Perbandingan yang Menghasilkan Boolean
let a = 10;
let b = 5;

let hasilSama = a == b;
let hasilLebihBesar = a > b;
let hasilLebihKecil = a < b;
let hasilTidakSama = a != b;

console.log("a sama dengan b:", hasilSama); // Output: a sama dengan b: false
console.log("a lebih besar dari b:", hasilLebihBesar); // Output: a lebih besar dari b: true
console.log("a lebih kecil dari b:", hasilLebihKecil); // Output: a lebih kecil dari b: false
console.log("a tidak sama dengan b:", hasilTidakSama); // Output: a tidak sama dengan b: true
