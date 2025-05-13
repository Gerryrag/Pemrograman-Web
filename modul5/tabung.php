<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabung Gerry</title>
</head>
<body>
    <?php
    $jari_jari = 7; // dalam cm
    $tinggi = 20;   // dalam cm
    $phi = 3.14;
    $volume = $phi * $jari_jari * $jari_jari * $tinggi;    
    echo "<h2>Tabung</h2>";
    echo "<p>Jari-jari: $jari_jari cm</p>";
    echo "<p>Tinggi: $tinggi cm</p>";
    echo "<p>Volume Tabung: $volume cm³</p>";       
    ?>
</body>
</html>