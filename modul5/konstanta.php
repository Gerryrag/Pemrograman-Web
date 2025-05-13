<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Konstanta Gerry</title>
</head>
<body>
<?php
    define("NAMA", "Gerry Robbie AG");
    define("USIA", 20);
    define("ALAMAT", "Probolinggo, Indonesia");

    echo "<h2>Contoh Konstanta di PHP</h2>";
    echo "<p>Nama: " . NAMA . "</p>";
    echo "<p>Usia: " . USIA . "</p>";
    echo "<p>Alamat: " . ALAMAT . "</p>";

    define("HOBI", ["Makan", "Ngoding", "Nonton"]);
    echo "<p>Hobi: " . implode(", ", HOBI) . "</p>";
    ?>

</body>
</html>