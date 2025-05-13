<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logika AND OR</title>
</head>
<body>
    <?php
    // Logika AND
    $a = true;
    $b = false;

    if ($a && $b) {
        echo "Kedua nilai adalah TRUE (AND)";
    } else {
        echo "Salah satu nilai atau keduanya adalah FALSE (AND)";
    }

    echo "<br>";

    // Logika OR
    if ($a || $b) {
        echo "Salah satu atau kedua nilai adalah TRUE (OR)";
    } else {
        echo "Kedua nilai adalah FALSE (OR)";
    }
    ?>

</body>
</html>