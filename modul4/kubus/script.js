document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.getElementById("calculateBtn");
  const sideLengthInput = document.getElementById("sideLength");
  const resultsDiv = document.getElementById("results");
  const volumeResult = document.getElementById("volume");
  const surfaceAreaResult = document.getElementById("surfaceArea");

  calculateBtn.addEventListener("click", calculateCube);

  function calculateCube() {
    // Ambil nilai input
    const sideLength = parseFloat(sideLengthInput.value);

    // Validasi input
    if (isNaN(sideLength) || sideLength <= 0) {
      alert("Masukkan angka positif yang valid!");
      return;
    }

    // Hitung volume dan luas permukaan
    const volume = Math.pow(sideLength, 3);
    const surfaceArea = 6 * Math.pow(sideLength, 2);

    // Tampilkan hasil
    volumeResult.textContent = volume.toFixed(2) + " cm³";
    surfaceAreaResult.textContent = surfaceArea.toFixed(2) + " cm²";

    // Tampilkan bagian hasil
    resultsDiv.style.display = "block";
  }

  // Tambahkan event listener untuk tombol enter
  sideLengthInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      calculateCube();
    }
  });
});
