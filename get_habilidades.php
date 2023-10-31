<?php
$servername = "bxzafa0u3qliscp3gxtn-mysql.services.clever-cloud.com";
$username = "uxmrkfdlbcdtt2la";
$password = "kUNzLZadxm8gAy3ZRm5c";
$dbname = "bxzafa0u3qliscp3gxtn";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$query = "SELECT id_habilidad, habilidad FROM habilidad";
$result = $conn->query($query);

$habilidades = [];
while($row = $result->fetch_assoc()) {
    $habilidades[] = $row;
}

echo json_encode($habilidades);

$conn->close();
?>
