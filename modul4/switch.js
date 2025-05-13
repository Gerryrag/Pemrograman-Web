let nilai = "B";
let deskripsi;

switch (nilai) {
  case "A":
    deskripsi = "Sangat Baik";
    break;
  case "B":
    deskripsi = "Baik";
    break;
  case "C":
    deskripsi = "Cukup";
    break;
  case "D":
    deskripsi = "Kurang";
    break;
  case "E":
    deskripsi = "Sangat Kurang";
    break;
  default:
    deskripsi = "Nilai tidak valid";
}

console.log(`Nilai ${nilai}: ${deskripsi}`);
