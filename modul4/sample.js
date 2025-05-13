// Data balok
const panjang = 10;
const lebar = 5;
const tinggi = 7;

// Hitung volume
const volume = panjang * lebar * tinggi;

// Format hasil
const hasilHTML = `
    <p>Panjang balok = ${panjang}</p>
    <p>Lebar balok = ${lebar}</p>
    <p>Tinggi balok = ${tinggi}</p>
    <h2>Volume balok = ${volume}</h2>
`;

// Tampilkan hasil di elemen dengan id="hasil"
document.getElementById("hasil").innerHTML = hasilHTML;
