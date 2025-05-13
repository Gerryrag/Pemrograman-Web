<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>gettype Gerry</title>
</head>
<body>
    <?php
    $nama = "Gerry Robbie AG";    
    $umur = 20;                   
    $tinggi = 1.75;               
    $mahasiswa = true;            
    $hobi = ["Makan", "Ngoding"]; 
    $alamat = null;               

    echo "<h2>Tipe Data Variabel</h2>";
    echo "<p>Nama (String): " . gettype($nama) . "</p>";
    echo "<p>Umur (Integer): " . gettype($umur) . "</p>";
    echo "<p>Tinggi (Float): " . gettype($tinggi) . "</p>";
    echo "<p>Mahasiswa (Boolean): " . gettype($mahasiswa) . "</p>";
    echo "<p>Hobi (Array): " . gettype($hobi) . "</p>";
    echo "<p>Alamat (Null): " . gettype($alamat) . "</p>";
    ?>

</body>
</html>