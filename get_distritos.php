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

$query = "SELECT id_distritoAlum, distritoA FROM distriitoalum"; 
$result = $conn->query($query);

$distritos = [];
while($row = $result->fetch_assoc()) {
    $distritos[] = $row;
}

echo json_encode($distritos);

$conn->close();
?>
