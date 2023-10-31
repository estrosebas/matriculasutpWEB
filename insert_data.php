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

// Recoger datos del POST
// Recoger datos del POST
$dni_Alumno = $_POST['dni_Alumno'];
$nom_Alu = $_POST['nom_Alu'];
$ape_PAl = $_POST['ape_PAl'];
$ape_MAl = $_POST['ape_MAl'];
$fec_Nac = $_POST['fec_Nac'];
$sexo = $_POST['sexo'];
$id_distritoAlum = $_POST['id_distritoAlum'];
$domicilio = $_POST['domicilio'];
$nivel_ing = $_POST['nivel_ing'];
$grado_ing = $_POST['grado_ing'];
$colegio_ant = $_POST['colegio_ant'];
$id_habilidad = $_POST['id_habilidad'];
$id_Repre = $_POST['id_Repre'];
$relacion = $_POST['relacion'];

// Insertar datos en la base de datos

$sql = "INSERT INTO alumno 
        (dni_Alumno, nom_Alu, ape_PAl, ape_MAl, fec_Nac, sexo, id_distritoAlum, domicilio, nivel_ing, grado_ing, colegio_ant, id_habilidad, id_Repre, relacion) 
        VALUES 
        ('$dni_Alumno', '$nom_Alu', '$ape_PAl', '$ape_MAl', '$fec_Nac', '$sexo', '$id_distritoAlum', '$domicilio', '$nivel_ing', '$grado_ing', '$colegio_ant', '$id_habilidad', '$id_Repre', '$relacion')";

if ($conn->query($sql) === TRUE) {
    echo "Datos insertados con éxito";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
