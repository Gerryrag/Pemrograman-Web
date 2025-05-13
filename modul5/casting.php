<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Casting Gerry</title>
</head>
<body>
    <?php

    $angka = 123;    // Integer
    $float = 3.14;   // Float
    $boolean = true; // Boolean

    $string_angka = (string) $angka;
    $string_float = (string) $float;
    $string_boolean = (string) $boolean;

    echo "Integer ke String: $string_angka <br>";
    echo "Float ke String: $string_float <br>";
    echo "Boolean ke String: $string_boolean <br>";
    ?>

</body>
</html>