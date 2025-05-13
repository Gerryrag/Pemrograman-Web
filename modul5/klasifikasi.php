<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Klasifikasi Nilai</title>
</head>
<body>
    <h2>Klasifikasi Nilai</h2>
    <form method="post">
        <label for="nama">Nama:</label>
        <input type="text" name="nama" required><br><br>
        <label for="nilai">Nilai:</label>
        <input type="number" name="nilai" required><br><br>
        <input type="submit" value="Klasifikasikan">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nama = $_POST['nama'];
        $nilai = $_POST['nilai'];

        // Klasifikasi nilai
        if ($nilai > 80) {
            $grade = "A";
        } elseif ($nilai >= 70 && $nilai <= 79) {
            $grade = "B";
        } elseif ($nilai >= 60 && $nilai <= 69) {
            $grade = "C";
        } elseif ($nilai >= 50 && $nilai <= 59) {
            $grade = "D";
        } else {
            $grade = "Tidak Lulus";
        }

        // Output hasil
        echo "<h3>Hasil Klasifikasi:</h3>";
        echo "Nama: " . htmlspecialchars($nama) . "<br>";
        echo "Nilai: " . $nilai . "<br>";
        echo "Klasifikasi: " . $grade . "<br>";
    }
    ?>
</body>
</html>
