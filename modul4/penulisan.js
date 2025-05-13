// let nama = "Andi";
// let Nama = "Budi";
// let NAMA = "Cindy";

console.log(nama); // Output: "Andi"
console.log(Nama); // Output: "Budi"
console.log(NAMA); // Output: "Cindy"

function sapa() {
  console.log("Halo!");
}

sapa(); // Output: "Halo!" (benar)
SAPA(); // Error: SAPA is not defined (salah)

let i = 1;
while (i <= 5) {
  // Penulisan benar (huruf kecil)
  console.log("Iterasi ke-" + i);
  i++;
}

let j = 1;
WHILE (j <= 5) {  // Error karena 'WHILE' tidak dikenali
    console.log("Ini tidak akan pernah dijalankan");
    j++;
}